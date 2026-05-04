"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { AttendanceStatus, FamilyMember } from "@/types/rsvp";
import { PinForm } from "@/components/rsvp/PinForm";
import { FamilySelector } from "@/components/rsvp/FamilySelector";

export function RsvpSection() {
  const [pin, setPin] = useState("");
  const [pinValidated, setPinValidated] = useState(false);
  const [pinError, setPinError] = useState("");
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [loadingInvite, setLoadingInvite] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [confirmationCompleted, setConfirmationCompleted] = useState(false);

  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  const attendingCount = useMemo(
    () =>
      familyMembers.filter((member) => member.status === "confirmado").length,
    [familyMembers]
  );

  const notAttendingCount = useMemo(
    () => familyMembers.filter((member) => member.status === "nao_vai").length,
    [familyMembers]
  );

  const pendingCount = useMemo(
    () => familyMembers.filter((member) => member.status === "pendente").length,
    [familyMembers]
  );

  const canSubmit =
    pinValidated && familyMembers.length > 0 && pendingCount === 0;

  function resetRsvpForm() {
    setPin("");
    setPinValidated(false);
    setPinError("");
    setFamilyMembers([]);
    setLoadingInvite(false);
    setLoadingSubmit(false);
    setConfirmationCompleted(false);
  }

  async function handleValidatePin() {
    setPinError("");
    setPinValidated(false);
    setFamilyMembers([]);
    setConfirmationCompleted(false);
    setLoadingInvite(true);

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    try {
      const response = await fetch("/api/rsvp/lookup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Convite não encontrado.");
      }

      setPinValidated(true);
      setFamilyMembers(data.familyMembers);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro ao buscar convite.";

      setPinError(message);
    } finally {
      setLoadingInvite(false);
    }
  }

  function handleToggleMember(memberId: string, status: AttendanceStatus) {
    setPinError("");

    setFamilyMembers((current) =>
      current.map((member) =>
        member.id === memberId ? { ...member, status } : member
      )
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!canSubmit) {
      setPinError("Confirme se cada pessoa vai ou não vai comparecer.");
      return;
    }

    setLoadingSubmit(true);
    setPinError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pin,
          familyMembers,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Não foi possível enviar a confirmação.");
      }

      setConfirmationCompleted(true);

      resetTimerRef.current = setTimeout(() => {
        resetRsvpForm();
      }, 5000);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro ao enviar confirmação.";

      setPinError(message);
    } finally {
      setLoadingSubmit(false);
    }
  }

  return (
    <section id="confirmacao" className="confirmation-section">
      <div className="section-container">
        <div className="confirmation-wrapper">
          <div className="section-heading">
            <span className="badge-gold">Confirmação de Presença</span>
            <h2 className="section-title">Confirme sua presença</h2>
          </div>

          <div className="confirmation-card glass-card">
            {confirmationCompleted ? (
              <div className="confirmation-completed">
                <div className="confirmation-completed-icon">✓</div>

                <h3 className="confirmation-completed-title">
                  Confirmação enviada!
                </h3>

                <p className="confirmation-completed-text">
                  Obrigado por confirmar a presença.
                </p>

                <div className="confirmation-completed-summary">
                  <p>
                    Pessoas confirmadas: <strong>{attendingCount}</strong>
                  </p>

                  <p>
                    Não comparecerão: <strong>{notAttendingCount}</strong>
                  </p>
                </div>

                <p className="confirmation-completed-return">
                  A tela será reiniciada em alguns segundos.
                </p>
              </div>
            ) : (
              <>
                <PinForm
                  pin={pin}
                  pinError={pinError}
                  loading={loadingInvite}
                  onPinChange={setPin}
                  onValidate={handleValidatePin}
                />

                {pinValidated && (
                  <form onSubmit={handleSubmit} className="confirmation-form">
                    <FamilySelector
                      familyMembers={familyMembers}
                      attendingCount={attendingCount}
                      notAttendingCount={notAttendingCount}
                      pendingCount={pendingCount}
                      onToggle={handleToggleMember}
                    />

                    <div className="confirmation-footer">
                      <button
                        type="submit"
                        disabled={loadingSubmit || !canSubmit}
                        className="btn-primary confirmation-submit-button"
                      >
                        {loadingSubmit
                          ? "Enviando..."
                          : "Finalizar Confirmação"}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}