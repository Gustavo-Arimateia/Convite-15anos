"use client";

import { useMemo, useState } from "react";
import { Church, MapPin, Navigation, PartyPopper } from "lucide-react";
import { eventData } from "@/data/event";

type LocationOption = "mass" | "party";

export function LocationSection() {
  const [selectedLocation, setSelectedLocation] =
    useState<LocationOption>("party");

  const locations = useMemo(
    () => ({
      mass: {
        id: "mass" as const,
        label: "Missa",
        title: eventData.mass.title,
        venue: eventData.mass.venue,
        address: eventData.mass.address,
        dateText: eventData.mass.dateText,
        timeText: eventData.mass.timeText,
        Icon: Church,
      },
      party: {
        id: "party" as const,
        label: "Festa",
        title: eventData.party.title,
        venue: eventData.party.venue,
        address: eventData.party.address,
        dateText: eventData.party.dateText,
        timeText: eventData.party.timeText,
        Icon: PartyPopper,
      },
    }),
    []
  );

  const activeLocation = locations[selectedLocation];
  const ActiveIcon = activeLocation.Icon;

  const embedAddress = encodeURIComponent(activeLocation.address);

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    activeLocation.address
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    activeLocation.address
  )}&navigate=yes`;

  return (
    <section className="event-location-section">
      <div className="section-container">
        <div className="event-location-heading">
          <span className="event-location-badge">Localização</span>

          <h2>
            Como chegar
            <span>ao evento</span>
          </h2>

          <p>
            Selecione a missa ou a festa para visualizar o endereço correto e
            abrir a rota no aplicativo de navegação.
          </p>
        </div>

        <div className="event-location-layout">
          <div className="event-location-info">
            <div className="event-location-selector">
              <button
                type="button"
                className={`event-location-circle ${
                  selectedLocation === "mass" ? "is-active" : ""
                }`}
                onClick={() => setSelectedLocation("mass")}
                aria-label="Ver localização da missa"
              >
                <Church size={22} />
                <span>Missa</span>
              </button>

              <button
                type="button"
                className={`event-location-circle ${
                  selectedLocation === "party" ? "is-active" : ""
                }`}
                onClick={() => setSelectedLocation("party")}
                aria-label="Ver localização da festa"
              >
                <PartyPopper size={22} />
                <span>Festa</span>
              </button>
            </div>

            <div className="event-location-card">
              <div className="event-location-card-icon">
                <ActiveIcon size={22} />
              </div>

              <div>
                <span className="event-location-label">
                  {activeLocation.label}
                </span>

                <h3>{activeLocation.venue}</h3>

                <p className="event-location-date">
                  {activeLocation.dateText} • {activeLocation.timeText}
                </p>

                <div className="event-location-address">
                  <MapPin size={18} />
                  <p>{activeLocation.address}</p>
                </div>
              </div>
            </div>

            <div className="event-location-actions">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Google Maps
              </a>

              <a
                href={wazeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Waze
              </a>
            </div>
          </div>

          <div className="event-location-map-card">
            <iframe
              key={activeLocation.address}
              title={`Mapa - ${activeLocation.venue}`}
              src={`https://www.google.com/maps?q=${embedAddress}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="event-location-map"
            />

            <div className="event-location-map-footer">
              <Navigation size={16} />
              <span>
                Mostrando rota para <strong>{activeLocation.label}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}