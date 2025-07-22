// components/CompositeShowcase.tsx
import React from "react";
import TextSection from "./TextSection";
import LogoTicker from "./LogoTicker";
import ImageGallery from "./ImageGallery";
import { Logo } from "../types/ui";

interface CompositeShowcaseProps {
  textSection: {
    title: string;
    paragraphs: string[];
    tagline?: string;
  };
  logos: Logo[];
  gallery: {
    title: string;
    slides: {
      imageUrl: string;
      heading: string;
      paragraph: string;
      alt?: string;
    }[];
  };
}

const CompositeShowcase: React.FC<CompositeShowcaseProps> = ({
  textSection,
  logos,
  gallery,
}) => {
  return (
    <div className="space-y-12 px-4 py-8">
      {/* TextSection */}
      <div className="flex justify-center">
        <TextSection
          title={textSection.title}
          paragraphs={textSection.paragraphs}
          tagline={textSection.tagline}
        />
      </div>

      {/* LogoTicker */}
      <LogoTicker logos={logos} />

      {/* ImageGallery */}
      <ImageGallery title={gallery.title} slides={gallery.slides} />
    </div>
  );
};

export default CompositeShowcase;
