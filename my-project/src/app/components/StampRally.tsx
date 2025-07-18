// components/StampRally.tsx
"use client";

import React from "react";
import TextSection from "./TextSection";
import ImageWithTitle from "./ImageWithTitle";
import LogoTicker from "./LogoTicker";

interface StampRallyProps {
  textSection: {
    title: string;
    paragraphs: string[];
    tagline?: string;
  };
  imageWithTitle: {
    title: string;
    imageSrc: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    rotate?: number;
  };
  logos: { src: string; alt?: string }[];
}

const StampRally: React.FC<StampRallyProps> = ({
  textSection,
  imageWithTitle,
  logos,
}) => {
  return (
    <div className="w-full px-4 py-8 flex flex-col gap-8">
      {/* Text + Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1">
          <TextSection
            title={textSection.title}
            paragraphs={textSection.paragraphs}
            tagline={textSection.tagline}
          />
        </div>

        <div className="flex-1">
          <ImageWithTitle
            title={imageWithTitle.title}
            imageUrl={imageWithTitle.imageSrc}
            alt={imageWithTitle.imageAlt}
            width={imageWithTitle.imageWidth}
            height={imageWithTitle.imageHeight}
            rotationDegrees={imageWithTitle.rotate}
          />
        </div>
      </div>

      {/* Logos */}
      <LogoTicker logos={logos} />
    </div>
  );
};

export default StampRally;
