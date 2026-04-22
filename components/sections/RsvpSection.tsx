"use client";

import { FormEvent, useMemo, useState } from "react";
import { demoFamily, demoPin } from "@/data/event";
import { FamilyMember } from "@/types/rsvp";
import { PinForm } from "@/components/rsvp/PinForm";
import { FamilySelector } from "@/components/rsvp/FamilySelector";
import { ContactForm } from "@/components/rsvp/ContactForm";

export function RsvpSection() {
  const [pin, setPin] = useState("");
  const [pinValidated, setPinValidated] = useState(false);
  const [pinError, setPinError] = useState("");
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [notes, setNotes] = useState("");
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
          contactName,
          contactPhone,
          contactEmail,
          notes,
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
      setContactName("");
      setContactPhone("");
      setContactEmail("");
      setNotes("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro ao enviar confirmação.";
      setPinError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="confirmacao" style={{ paddingBottom: 96 }}>
      <div className="section-container">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <span className="badge-gold">Confirmação de Presença</span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 20 }}>
              Confirme sua presença
            </h2>
          </div>

          <div className="glass-card" style={{ marginTop: 40, borderRadius: 32, padding: 24 }}>
            <PinForm
              pin={pin}
              pinError={pinError}
              onPinChange={setPin}
              onValidate={handleValidatePin}
            />

            {pinValidated && (
              <form onSubmit={handleSubmit} style={{ marginTop: 32, display: "grid", gap: 32 }}>
                <FamilySelector
                  familyMembers={familyMembers}
                  attendingCount={attendingCount}
                  onToggle={handleToggleMember}
                />

                <ContactForm
                  contactName={contactName}
                  contactPhone={contactPhone}
                  contactEmail={contactEmail}
                  notes={notes}
                  onChangeName={setContactName}
                  onChangePhone={setContactPhone}
                  onChangeEmail={setContactEmail}
                  onChangeNotes={setNotes}
                />

                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: 14, color: "#5f5651" }}>
                    Após confirmar, sua resposta será registrada.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{ minWidth: 220, opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Enviando..." : "Finalizar Confirmação"}
                  </button>
                </div>

                {successMessage && (
                  <div
                    style={{
                      borderRadius: 16,
                      border: "1px solid #bbf7d0",
                      background: "#ecfdf5",
                      color: "#047857",
                      padding: "12px 16px",
                    }}
                  >
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