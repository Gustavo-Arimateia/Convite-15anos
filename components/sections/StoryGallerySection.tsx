"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const galleryImages = [
  "/foto-1.jpeg",
  "/foto-2.jpeg",
  "/foto-3.jpeg",
  "/foto-4.jpeg",
];

export function StoryGallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.22,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="message-gallery-section">
      <div className="section-container">
        <div className="message-gallery-heading">
          <span className="section-badge reveal-on-scroll">Mensagem</span>

          <h2 className="message-gallery-title reveal-on-scroll">
            Um momento único,
            <span> cheio de memórias</span>
          </h2>

          <p className="message-gallery-text reveal-on-scroll">
            Completar 15 anos é viver uma fase cheia de sonhos, descobertas e
            gratidão. Este convite foi preparado com muito carinho para reunir
            pessoas especiais em uma noite encantadora e inesquecível.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className={`gallery-card gallery-card-${index + 1} reveal-on-scroll`}
              style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
            >
              <Image
                src={src}
                alt={`Foto da Geovana ${index + 1}`}
                fill
                sizes="(max-width: 768px) 85vw, 25vw"
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}