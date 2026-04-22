import Image from "next/image";
import { eventData } from "@/data/event";

export function DressCodeSection() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="section-container">
        <div
          style={{
            display: "grid",
            gap: 40,
            alignItems: "center",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <div>
            <span className="badge-gold">Dress Code</span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginTop: 20 }}>
              {eventData.dressCodeTitle}
            </h2>
            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.8, color: "#5f5651" }}>
              {eventData.dressCodeText}
            </p>
          </div>

          <div style={{ position: "relative", height: 420, overflow: "hidden", borderRadius: 32 }}>
            <Image
              src="/foto-5.jpeg"
              alt="Imagem de destaque"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}