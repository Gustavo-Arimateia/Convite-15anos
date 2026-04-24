import Image from "next/image";

const galleryImages = [
  "/foto-1.jpeg",
  "/foto-2.jpeg",
  "/foto-3.jpeg",
  "/foto-4.jpeg",
];

export function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="badge-gold">Galeria</span>
          <h2 className="section-title">Memórias e encanto</h2>
        </div>

        <div className="gallery-grid-v2">
          {galleryImages.map((src, index) => (
            <div key={src} className={`gallery-item gallery-item-${index + 1}`}>
              <Image
                src={src}
                alt={`Foto ${index + 1}`}
                fill
                className="gallery-image-v2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}