import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { eventData } from "@/data/event";

export function DetailsSection() {
  return (
    <section id="detalhes" style={{ padding: "0 0 80px" }}>
      <div className="section-container">
        <div className="details-grid">
          <div className="glass-card detail-card">
            <CalendarDays style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 30 }}>Data e Hora</h3>
            <p style={{ marginTop: 12, color: "#5f5651", lineHeight: 1.8 }}>
              {eventData.dateText}
              <br />
              Recepção às {eventData.timeText}
            </p>
          </div>

          <div className="glass-card detail-card">
            <MapPin style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 30 }}>Local</h3>

            <p style={{ marginTop: 12, color: "#5f5651", lineHeight: 1.8 }}>
              {eventData.venue}
              <br />
              {eventData.address}
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
              <a
                href={eventData.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Abrir no Google Maps
              </a>

              <a
                href={eventData.wazeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Abrir no Waze
              </a>
            </div>
          </div>

          <div className="glass-card detail-card">
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