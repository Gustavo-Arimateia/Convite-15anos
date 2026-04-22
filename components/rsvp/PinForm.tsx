type PinFormProps = {
  pin: string;
  pinError: string;
  onPinChange: (value: string) => void;
  onValidate: () => void;
};

export function PinForm({ pin, pinError, onPinChange, onValidate }: PinFormProps) {
  return (
    <div className="soft-border" style={{ borderRadius: 24, background: "white", padding: 24 }}>
      <h3 style={{ fontSize: 28 }}>Identificação do convite</h3>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "1fr auto",
        }}
      >
        <input
          className="input-elegant"
          placeholder="Digite o PIN da família"
          value={pin}
          onChange={(e) => onPinChange(e.target.value)}
        />

        <button type="button" onClick={onValidate} className="btn-primary" style={{ minWidth: 170 }}>
          Buscar Convite
        </button>
      </div>

      {pinError && <p style={{ marginTop: 16, fontSize: 14, color: "#dc2626" }}>{pinError}</p>}
    </div>
  );
}