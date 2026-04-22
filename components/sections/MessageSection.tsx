export function MessageSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container" style={{ textAlign: "center", maxWidth: 850 }}>
        <span className="badge-gold">Mensagem</span>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 20 }}>
          Um momento único
        </h2>
        <div className="gold-line" />
        <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.8, color: "#5f5651" }}>
          Completar 15 anos é viver uma fase cheia de sonhos, descobertas e
          gratidão. Este convite foi preparado com muito carinho para reunir
          pessoas especiais em uma noite encantadora e inesquecível.
        </p>
      </div>
    </section>
  );
}