// components/InfoSection.tsx
import React from "react";
import TextSection from "./TextSection";
import CircleGroup from "./CircleGroup";

interface InfoSectionProps {
  title: string;
  paragraphs: string[];
  circles: {
    imageSrc?: string;
    alt?: string;
    text?: string;
  }[];
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  paragraphs,
  circles,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
      {/* Left: Text */}
      <div className="w-full md:flex-1">
        <TextSection title={title} paragraphs={paragraphs} size="h2" />
      </div>

      {/* Right: Circles */}
      {/* Desktop view: Circles in column */}
      <div className="hidden md:flex md:flex-shrink-0">
        <CircleGroup items={circles} direction="col" />
      </div>

      {/* Mobile view: Circles in row */}
      <div className="flex md:hidden w-full justify-center mt-8">
        <CircleGroup items={circles} direction="row" />
      </div>
    </div>
  );
};

export default InfoSection;
