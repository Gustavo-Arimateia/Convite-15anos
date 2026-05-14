import { CalendarDays, Church, Sparkles } from "lucide-react";
import { eventData } from "@/data/event";

export function EventDetailsSection() {
  return (
    <section id="detalhes-festa" className="detail-section">
      <div className="section-container">
        <div className="detail-card-v3">
          <div className="detail-heading-v3">
            <span className="badge-gold">Data e Hora</span>

            <h2 className="section-title">Quando será a celebração</h2>

            <p className="detail-intro-v3">
              Primeiro, um momento de fé e gratidão. Depois, uma noite especial
              para celebrar os 15 anos da Geovana.
            </p>
          </div>

          <div className="event-schedule-grid">
            <article className="event-schedule-card">
              <div className="event-schedule-icon">
                <Church size={22} />
              </div>

              <div>
                <span className="event-schedule-label">Missa</span>
                <h3 className="event-schedule-title">
                  {eventData.mass.title}
                </h3>

                <div className="event-schedule-info">
                  <p>{eventData.mass.dateText}</p>
                  <p>Início às {eventData.mass.timeText}</p>
                  <p>{eventData.mass.venue}</p>
                </div>
              </div>
            </article>

            <article className="event-schedule-card is-featured">
              <div className="event-schedule-icon">
                <Sparkles size={22} />
              </div>

              <div>
                <span className="event-schedule-label">Festa</span>
                <h3 className="event-schedule-title">
                  {eventData.party.title}
                </h3>

                <div className="event-schedule-info">
                  <p>{eventData.party.dateText}</p>
                  <p>Início às {eventData.party.timeText}</p>
                  <p>{eventData.party.venue}</p>
                </div>
              </div>
            </article>
          </div>

          <div className="detail-footer-v3">
            <CalendarDays size={18} />
            <span>Prepare-se para viver uma noite inesquecível.</span>
          </div>
        </div>
      </div>
    </section>
  );
}