import { MapPin, Navigation } from "lucide-react";
import { eventData } from "@/data/event";

export function LocationSection() {
  const embedAddress = encodeURIComponent(eventData.party.address);

  return (
    <section className="location-section">
      <div className="section-container">
        <div className="location-grid-v2">
          <div className="location-content-v2">
            <span className="badge-gold">Localização</span>
            <h2 className="section-title">Como chegar ao evento</h2>

            <div className="location-info-box-v2">
              <div className="location-info-row-v2">
                <MapPin size={18} />
                <div>
                  <strong>{eventData.party.venue}</strong>
                  <p>{eventData.party.address}</p>
                </div>
              </div>
            </div>

            <div className="location-actions-v2">
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

          <div className="location-map-card-v2">
            <iframe
              title="Mapa do local do evento"
              src={`https://www.google.com/maps?q=${embedAddress}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="location-map-iframe-v2"
            />
            <div className="location-map-footer-v2">
              <Navigation size={16} />
              <span>Abra sua rota no aplicativo de navegação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}