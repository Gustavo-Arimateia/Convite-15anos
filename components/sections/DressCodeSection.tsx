import Image from "next/image";
import { eventData } from "@/data/event";

export function DressCodeSection() {
  return (
    <section className="dress-section">
      <div className="section-container">
        <div className="dress-grid-v2">
          <div className="dress-content-v2">
            <span className="badge-gold">Dress Code</span>
            <h2 className="section-title">Elegância, delicadeza e brilho</h2>
            <p className="dress-text-v2">{eventData.dressCodeText}</p>

            <div className="dress-examples-v2">
              <span className="dress-chip">Vestidos fluidos</span>
              <span className="dress-chip">Tons suaves</span>
              <span className="dress-chip">Social elegante</span>
              <span className="dress-chip">Looks sofisticados</span>
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