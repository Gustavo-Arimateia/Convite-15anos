import { eventData } from "@/data/event";

export function IntroInfoSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container" style={{ textAlign: "center", maxWidth: 900 }}>
        <span className="badge-gold">Algumas Informações</span>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 20 }}>
          Um momento único e inesquecível
        </h2>
        <div className="gold-line" />
        <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.8, color: "#5f5651" }}>
          {eventData.message}
        </p>
      </div>
    </section>
  );
}