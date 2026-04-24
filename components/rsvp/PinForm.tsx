type PinFormProps = {
  pin: string;
  pinError: string;
  onPinChange: (value: string) => void;
  onValidate: () => void;
};

export function PinForm({ pin, pinError, onPinChange, onValidate }: PinFormProps) {
  return (
    <div className="soft-border pin-form-card">
      <h3 className="pin-form-title">Identificação do convite</h3>

      <div className="pin-form-grid">
        <input
          className="input-elegant"
          placeholder="Digite o PIN da família"
          value={pin}
          onChange={(e) => onPinChange(e.target.value)}
        />

        <button type="button" onClick={onValidate} className="btn-primary pin-form-button">
          Buscar Convite
        </button>
      </div>

      {pinError && <p className="pin-form-error">{pinError}</p>}
    </div>
  );
}