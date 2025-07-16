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
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-6">
      {/* Left: Text */}
      <TextSection title={title} paragraphs={paragraphs} />

      {/* Desktop view: Circles in column */}
      <div className="hidden md:flex">
        <CircleGroup items={circles} direction="col" />
      </div>

      {/* Mobile view: Circles in row */}
      <div className="flex md:hidden w-full justify-center mt-8 gap-4">
        <CircleGroup items={circles} direction="row" />
      </div>
    </div>
  );
};

export default InfoSection;
