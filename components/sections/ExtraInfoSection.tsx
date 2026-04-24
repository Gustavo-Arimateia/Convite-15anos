import { eventData } from "@/data/event";

export function ExtraInfoSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container">
        <div className="glass-card" style={{ borderRadius: 32, padding: 32 }}>
          <span className="badge-gold">Informações</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 20 }}>
            Antes do grande dia
          </h2>

          <ul style={{ marginTop: 28, color: "#5f5651", lineHeight: 2 }}>
            {eventData.infoItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}