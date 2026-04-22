"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { eventData } from "@/data/event";

export function HeroSection() {
  return (
    <section className="hero-section">
      <Image
        src="/hero.jpeg"
        alt="Foto principal do convite"
        fill
        priority
        className="hero-image"
      />

      <div className="hero-overlay" />

      <div className="section-container hero-content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="badge-gold">Convite Especial</span>

          <h1 className="hero-title">
            {eventData.celebrantName}
            <span className="hero-subtitle">{eventData.subtitle}</span>
          </h1>

          <p className="hero-description">{eventData.message}</p>

          <div className="hero-actions">
            <a href="#confirmacao" className="btn-primary">
              Confirmar Presença
            </a>
            <a href="#detalhes" className="btn-secondary">
              Ver Detalhes
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <CalendarDays size={18} />
              <span>
                {eventData.dateText} • {eventData.timeText}
              </span>
            </div>

            <div className="hero-meta-item">
              <MapPin size={18} />
              <span>{eventData.venue}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}