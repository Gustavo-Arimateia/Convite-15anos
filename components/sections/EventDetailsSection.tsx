import { CalendarDays } from "lucide-react";
import { eventData } from "@/data/event";

export function EventDetailsSection() {
  return (
    <section id="detalhes-festa" className="detail-section">
      <div className="section-container">
        <div className="detail-card-v2">
          <div className="detail-icon-v2">
            <CalendarDays size={22} />
          </div>

          <div className="detail-content-v2">
            <span className="badge-gold">Data e Hora</span>
            <h2 className="section-title">Quando será a celebração</h2>
            <p className="detail-text-v2">
              {eventData.dateText}
              <br />
              Início às {eventData.timeText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}