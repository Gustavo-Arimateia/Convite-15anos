import { MessageCircle, Phone } from "lucide-react";
import { eventData } from "@/data/event";

export function InfoSection() {
  const whatsappMessage = encodeURIComponent(
    "Sou convidada da Geovana Alexandre de Arimatéia, estou com uma duvida sobre a festa"
  );

  const whatsappUrl = `https://wa.me/${eventData.contactWhatsapp}?text=${whatsappMessage}`;

  return (
    <section className="info-section">
      <div className="section-container">
        <div className="info-card">
          <div className="info-content">
            <span className="badge-gold">Informações Importantes</span>

            <h2 className="section-title">
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

            <div className="info-contact-main">
              <p className="info-contact-phone">{eventData.contactPhone}</p>

              <p className="info-contact-name">
                Responsável: <strong>{eventData.contactName}</strong>
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="info-whatsapp-button"
              >
                <MessageCircle size={18} />
                Mandar mensagem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}