import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { eventData } from "@/data/event";

export function DetailsSection() {
  return (
    <section id="detalhes" style={{ padding: "0 0 80px" }}>
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <div className="glass-card" style={{ borderRadius: 28, padding: 32 }}>
            <CalendarDays style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 30 }}>Data e Hora</h3>
            <p style={{ marginTop: 12, color: "#5f5651", lineHeight: 1.8 }}>
              {eventData.dateText}
              <br />
              Recepção às {eventData.timeText}
            </p>
          </div>

          <div className="glass-card" style={{ borderRadius: 28, padding: 32 }}>
            <MapPin style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 30 }}>Local</h3>
            <p style={{ marginTop: 12, color: "#5f5651", lineHeight: 1.8 }}>
              {eventData.venue}
              <br />
              {eventData.address}
            </p>
          </div>

          <div className="glass-card" style={{ borderRadius: 28, padding: 32 }}>
            <Sparkles style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 30 }}>Dress Code</h3>
            <p style={{ marginTop: 12, color: "#5f5651", lineHeight: 1.8 }}>
              Esporte fino / social elegante
              <br />
              Tons suaves, sofisticados e festivos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}