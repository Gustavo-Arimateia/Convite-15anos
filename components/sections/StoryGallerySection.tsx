import Image from "next/image";

const galleryImages = [
  "/foto-1.jpeg",
  "/foto-2.jpeg",
  "/foto-3.jpeg",
  "/foto-4.jpeg",
];

export function StoryGallerySection() {
  return (
    <section className="story-gallery-section">
      <div className="section-container">
        <div className="story-gallery-header">
          <span className="badge-gold">Mensagem</span>
          <h2 className="section-title">Um momento único, cheio de memórias</h2>
          <p className="story-gallery-text">
            Completar 15 anos é viver uma fase cheia de sonhos, descobertas e
            gratidão. Este convite foi preparado com muito carinho para reunir
            pessoas especiais em uma noite encantadora e inesquecível.
          </p>
        </div>

        <div className="story-gallery-grid">
          {galleryImages.map((src, index) => (
            <div key={src} className={`story-gallery-item story-gallery-item-${index + 1}`}>
              <Image
                src={src}
                alt={`Foto ${index + 1}`}
                fill
                className="story-gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}