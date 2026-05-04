type PinFormProps = {
  pin: string;
  pinError: string;
  loading?: boolean;
  onPinChange: (value: string) => void;
  onValidate: () => void;
};

export function PinForm({
  pin,
  pinError,
  loading = false,
  onPinChange,
  onValidate,
}: PinFormProps) {
  return (
    <div className="soft-border pin-form-card">
      <h3 className="pin-form-title">Identificação do convite</h3>

      <div className="pin-form-grid">
        <input
          className="input-elegant"
          placeholder="Digite o PIN do convite"
          value={pin}
          inputMode="numeric"
          maxLength={4}
          autoComplete="one-time-code"
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, "");
            onPinChange(onlyNumbers);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onValidate();
            }
          }}
        />

        <button
          type="button"
          onClick={onValidate}
          disabled={loading || pin.trim().length === 0}
          className="btn-primary pin-form-button"
        >
          {loading ? "Buscando..." : "Buscar Convite"}
        </button>
      </div>

      {pinError && <p className="pin-form-error">{pinError}</p>}
    </div>
  );
}