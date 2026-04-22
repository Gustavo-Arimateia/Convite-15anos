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

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      />

      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 780, color: "white" }}
        >
          <span className="badge-gold">Convite Especial</span>

          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: 1.04,
              marginTop: 24,
            }}
          >
            {eventData.celebrantName}
            <span
              style={{
                display: "block",
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontStyle: "italic",
                fontWeight: 400,
                marginTop: 12,
              }}
            >
              {eventData.subtitle}
            </span>
          </h1>

          <p
            style={{
              marginTop: 24,
              maxWidth: 700,
              fontSize: 18,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            {eventData.message}
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
            <a href="#confirmacao" className="btn-primary">
              Confirmar Presença
            </a>
            <a href="#detalhes" className="btn-secondary">
              Ver Detalhes
            </a>
          </div>

          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginTop: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CalendarDays size={18} />
              <span>
                {eventData.dateText} • {eventData.timeText}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MapPin size={18} />
              <span>{eventData.venue}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}