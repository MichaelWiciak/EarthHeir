// components/MultiTextCircleSection.tsx
import React from "react";
import TextSection from "./TextSection";
import CircleGroup from "./CircleGroup";

interface TextSectionData {
  title: string;
  paragraphs: string[];
  tagline?: string;
}

interface CircleData {
  imageSrc?: string;
  alt?: string;
  text?: string;
}

interface MultiTextCircleSectionProps {
  sectionTitle?: string;
  sections: TextSectionData[];
  circles?: CircleData[]; // Optional now
}

const MultiTextCircleSection: React.FC<MultiTextCircleSectionProps> = ({
  sectionTitle,
  sections,
  circles,
}) => {
  const hasCircles = circles && circles.length > 0;

  return (
    <div className="p-6 md:p-12 space-y-8">
      {/* Overall title */}
      {sectionTitle && (
        <h2 className="text-3xl font-bold text-center md:text-left">
          {sectionTitle}
        </h2>
      )}

      {/* Layout: Text sections + Circles */}
      <div className="flex flex-col xl:flex-row justify-between gap-8">
        {/* Left: Multiple text sections */}
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          {sections.map((section, index) => (
            <TextSection
              key={index}
              title={section.title}
              paragraphs={section.paragraphs}
              tagline={section.tagline}
            />
          ))}
        </div>

        {/* Right: Circles on desktop */}
        {hasCircles && (
          <div className="hidden xl:flex items-center justify-center md:ml-6">
            <CircleGroup items={circles} direction="col" />
          </div>
        )}
      </div>

      {/* Mobile: Circles go below all text sections */}
      {hasCircles && (
        <div className="flex xl:hidden justify-center">
          <CircleGroup items={circles} direction="row" />
        </div>
      )}
    </div>
  );
};

export default MultiTextCircleSection;
