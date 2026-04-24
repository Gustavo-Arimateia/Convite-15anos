"use client";

import { FormEvent, useMemo, useState } from "react";
import { demoFamily, demoPin } from "@/data/event";
import { FamilyMember } from "@/types/rsvp";
import { PinForm } from "@/components/rsvp/PinForm";
import { FamilySelector } from "@/components/rsvp/FamilySelector";

export function RsvpSection() {
  const [pin, setPin] = useState("");
  const [pinValidated, setPinValidated] = useState(false);
  const [pinError, setPinError] = useState("");
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const attendingCount = useMemo(
    () => familyMembers.filter((member) => member.attending).length,
    [familyMembers]
  );

  function handleValidatePin() {
    setSuccessMessage("");
    setPinError("");

    if (pin.trim() === demoPin) {
      setPinValidated(true);
      setFamilyMembers(demoFamily);
      return;
    }

    setPinValidated(false);
    setFamilyMembers([]);
    setPinError("Convite não encontrado. Verifique o PIN informado.");
  }

  function handleToggleMember(index: number, attending: boolean) {
    setFamilyMembers((current) =>
      current.map((member, i) => (i === index ? { ...member, attending } : member))
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setPinError("");
    setSuccessMessage("");

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

      setSuccessMessage("Confirmação enviada com sucesso.");
      setPin("");
      setPinValidated(false);
      setFamilyMembers([]);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro ao enviar confirmação.";
      setPinError(message);
    } finally {
      setLoading(false);
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
            <PinForm
              pin={pin}
              pinError={pinError}
              onPinChange={setPin}
              onValidate={handleValidatePin}
            />

            {pinValidated && (
              <form onSubmit={handleSubmit} className="confirmation-form">
                <FamilySelector
                  familyMembers={familyMembers}
                  attendingCount={attendingCount}
                  onToggle={handleToggleMember}
                />

                <div className="confirmation-footer">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary confirmation-submit-button"
                  >
                    {loading ? "Enviando..." : "Finalizar Confirmação"}
                  </button>
                </div>

                {successMessage && (
                  <div className="confirmation-success">
                    {successMessage}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}