import { Phone } from "lucide-react";
import { eventData } from "@/data/event";

export function InfoSection() {
  return (
    <section className="info-section">
      <div className="section-container">
        <div className="info-card">
          <div>
            <span className="badge-gold">Informações Importantes</span>
            <h2 className="section-title" style={{ marginTop: 20 }}>
              Antes do grande dia
            </h2>

            <ul className="info-list">
              {eventData.infoItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-contact-card">
            <div className="info-contact-header">
              <Phone size={18} />
              <h3>Contato</h3>
            </div>

            <p className="info-contact-text">
              Para qualquer necessidade, fale com a organização do evento.
            </p>

            <p className="info-contact-phone">{eventData.contactPhone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}