import { HeroVideoSection } from "@/components/sections/HeroVideoSection";
import { StoryGallerySection } from "@/components/sections/StoryGallerySection";
import { EventDetailsSection } from "@/components/sections/EventDetailsSection";
import { DressCodeSection } from "@/components/sections/DressCodeSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { HighlightSection } from "@/components/sections/HighlightSection";
import { InfoSection } from "@/components/sections/InfoSection";
import { RsvpSection } from "@/components/sections/RsvpSection";
import { ScrollTopButton } from "@/components/ui/ScrollTopButton";

export default function HomePage() {
  return (
    <main>
      <HeroVideoSection />
      <StoryGallerySection />
      <EventDetailsSection />
      <DressCodeSection />
      <LocationSection />
      <HighlightSection />
      <InfoSection />
      <RsvpSection />
      <ScrollTopButton />
    </main>
  );
}