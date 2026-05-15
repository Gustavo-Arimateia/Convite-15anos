import Image from "next/image";
import { eventData } from "@/data/event";

export function DressCodeSection() {
  return (
    <section className="dress-section">
      <div className="section-container">
        <div className="dress-heading-v3">
          <span className="badge-gold">Dress Code</span>

          <h2 className="section-title">
            Elegância,
            <span>delicadeza e brilho</span>
          </h2>
        </div>

        <div className="dress-grid-v2">
          <div className="dress-content-v2">
            <div className="dress-text-v2">
              {eventData.dressCodeParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="dress-image-box-v2">
            <Image
              src="/foto-5.jpeg"
              alt="Inspiração de dress code"
              fill
              className="dress-image-v2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}