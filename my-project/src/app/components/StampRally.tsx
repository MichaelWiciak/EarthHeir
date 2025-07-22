// components/StampRally.tsx
"use client";

import React from "react";
import TextSection from "./TextSection";
import ImageWithTitle from "./ImageWithTitle";
import LogoTicker from "./LogoTicker";
import { Logo, TextSection as TextSectionData } from "../types/ui";

interface StampRallyProps {
  textSection: TextSectionData;
  imageWithTitle: {
    title: string;
    imageSrc: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    rotate?: number;
  };
  logos: Logo[];
}

const StampRally: React.FC<StampRallyProps> = ({
  textSection,
  imageWithTitle,
  logos,
}) => {
  return (
    <div className="w-full   flex flex-col gap-8">
      {/* Text + Image */}
      <div className="flex flex-col md:flex-row items-center  ">
        <div className="flex-1 py-6">
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
