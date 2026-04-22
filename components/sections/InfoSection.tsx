import { Phone } from "lucide-react";
import { eventData } from "@/data/event";

export function InfoSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container">
        <div className="glass-card" style={{ borderRadius: 32, padding: 32 }}>
          <div
            style={{
              display: "grid",
              gap: 32,
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <div>
              <span className="badge-gold">Informações Importantes</span>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 20 }}>
                Antes do grande dia
              </h2>

              <ul style={{ marginTop: 28, color: "#5f5651", lineHeight: 2 }}>
                {eventData.infoItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div
              className="soft-border"
              style={{ borderRadius: 28, background: "white", padding: 32 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Phone size={18} />
                <h3 style={{ fontSize: 28 }}>Contato</h3>
              </div>

              <p style={{ marginTop: 16, color: "#5f5651" }}>
                Para qualquer necessidade, fale com a organização do evento.
              </p>

              <p style={{ marginTop: 16, fontWeight: 600 }}>{eventData.contactPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}