// components/MultiTextCircleSection.tsx
import React from "react";
import CircleGroup from "./CircleGroup";
import { TextSection as TextSectionData, CircleItem } from "../types/ui";
import TextSection from "./TextSection";

interface MultiTextCircleSectionProps {
  sectionTitle?: string;
  sections: TextSectionData[];
  circles?: CircleItem[];
  circleDirection?: "row" | "col";
  size?: "h2" | "h3" | "h4";
}

const MultiTextCircleSection: React.FC<MultiTextCircleSectionProps> = ({
  sectionTitle,
  sections,
  circles,
  circleDirection,
  size = "h3",
}) => {
  const hasCircles = circles && circles.length > 0;

  return (
    <div className="">
      {/* Overall title */}
      {sectionTitle &&
        React.createElement(
          size,
          { className: "text-center p-4" },
          sectionTitle
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
            <CircleGroup items={circles} direction={circleDirection || "col"} />
          </div>
        )}
      </div>

      {/* Mobile: Circles go below all text sections */}
      {hasCircles && (
        <div className="xl:hidden flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 max-w-full px-4">
            <CircleGroup items={circles} direction={circleDirection || "row"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiTextCircleSection;
