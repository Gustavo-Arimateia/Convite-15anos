import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { eventData } from "@/data/event";

export function PartyInfoSection() {
  return (
    <section className="party-info-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="badge-gold">Informações da Festa</span>
          <h2 className="section-title">Tudo o que você precisa saber</h2>
        </div>

        <div className="party-info-grid">
          <article className="party-info-card">
            <div className="party-info-icon">
              <CalendarDays size={20} />
            </div>

            <div>
              <h3 className="party-info-title">Data e hora</h3>
              <p className="party-info-text">
                {eventData.dateText}
                <br />
                Início às {eventData.timeText}
              </p>
            </div>
          </article>

          <article className="party-info-card">
            <div className="party-info-icon">
              <Sparkles size={20} />
            </div>

            <div>
              <h3 className="party-info-title">Dress code</h3>
              <p className="party-info-text">
                Esporte fino / social elegante
                <br />
                Looks sofisticados, delicados e festivos
              </p>
            </div>
          </article>

          <article className="party-info-card">
            <div className="party-info-icon">
              <MapPin size={20} />
            </div>

            <div>
              <h3 className="party-info-title">Localização</h3>
              <p className="party-info-text">
                <strong>{eventData.venue}</strong>
                <br />
                {eventData.address}
              </p>

              <div className="party-info-actions">
                <a
                  href={eventData.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Google Maps
                </a>

                <a
                  href={eventData.wazeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Waze
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}