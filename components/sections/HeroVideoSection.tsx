"use client";

import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { eventData } from "@/data/event";

export function HeroVideoSection() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      className={`hero-video-section ${videoReady ? "is-video-ready" : ""}`}
    >
      <div className="hero-video-placeholder" />

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="section-container hero-content-wrapper">
        <div className="hero-content">
          <span className="hero-badge">Convite Especial</span>

          <h1 className="hero-title">
            {eventData.celebrantName}
            <span className="hero-subtitle">{eventData.subtitle}</span>
          </h1>

          <p className="hero-description">{eventData.message}</p>

          <div className="hero-actions">
            <a href="#confirmacao" className="btn-primary">
              Confirmar Presença
            </a>

            <a href="#detalhes-festa" className="btn-secondary">
              Ver Detalhes
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <CalendarDays size={18} />
              <span>
                {eventData.party.dateText} • {eventData.party.timeText}
              </span>
            </div>

            <div className="hero-meta-item">
              <MapPin size={18} />
              <span>{eventData.party.venue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}