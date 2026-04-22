import { HeroSection } from "@/components/sections/HeroSection";
import { MessageSection } from "@/components/sections/MessageSection";
import { DetailsSection } from "@/components/sections/DetailsSection";
import { DressCodeSection } from "@/components/sections/DressCodeSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { InfoSection } from "@/components/sections/InfoSection";
import { RsvpSection } from "@/components/sections/RsvpSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MessageSection />
      <DetailsSection />
      <DressCodeSection />
      <GallerySection />
      <InfoSection />
      <RsvpSection />
    </main>
  );
}