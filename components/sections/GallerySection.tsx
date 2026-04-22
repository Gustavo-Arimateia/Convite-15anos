import Image from "next/image";

const galleryImages = ["/foto-1.jpeg", "/foto-2.jpeg", "/foto-3.jpeg", "/foto-4.jpeg"];

export function GallerySection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container">
        <div style={{ textAlign: "center" }}>
          <span className="badge-gold">Galeria</span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 20 }}>
            Memórias e encanto
          </h2>
        </div>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {galleryImages.map((src, index) => (
            <div
              key={src}
              style={{
                position: "relative",
                height: index % 2 === 0 ? 420 : 320,
                overflow: "hidden",
                borderRadius: 30,
              }}
            >
              <Image src={src} alt={`Foto ${index + 1}`} fill style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}