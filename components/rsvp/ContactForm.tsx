type ContactFormProps = {
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  notes: string;
  onChangeName: (value: string) => void;
  onChangePhone: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangeNotes: (value: string) => void;
};

export function ContactForm({
  contactName,
  contactPhone,
  contactEmail,
  notes,
  onChangeName,
  onChangePhone,
  onChangeEmail,
  onChangeNotes,
}: ContactFormProps) {
  return (
    <div className="soft-border" style={{ borderRadius: 24, background: "white", padding: 24 }}>
      <h3 style={{ fontSize: 28 }}>Contato</h3>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <input
          className="input-elegant"
          placeholder="Nome do responsável"
          value={contactName}
          onChange={(e) => onChangeName(e.target.value)}
        />

        <input
          className="input-elegant"
          placeholder="Telefone"
          value={contactPhone}
          onChange={(e) => onChangePhone(e.target.value)}
        />

        <input
          className="input-elegant"
          placeholder="E-mail (opcional)"
          value={contactEmail}
          onChange={(e) => onChangeEmail(e.target.value)}
        />

        <textarea
          className="input-elegant"
          placeholder="Observações (opcional)"
          value={notes}
          onChange={(e) => onChangeNotes(e.target.value)}
          style={{ minHeight: 120, resize: "none" }}
        />
      </div>
    </div>
  );
}