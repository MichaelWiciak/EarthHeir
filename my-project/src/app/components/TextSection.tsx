// components/TextSection.tsx
import React from "react";
import { TextSection as TextSectionProps } from "../types/ui";

const TextSection: React.FC<TextSectionProps> = ({
  title,
  paragraphs,
  tagline,
}) => {
  return (
    <div className="max-w-none md:max-w-2xl lg:max-w-4xl w-full">
      {title && title.trim() !== "" && (
        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          {title}
        </h3>
      )}

      {paragraphs.map((text, index) => (
        <p
          key={index}
          className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700 mb-3 leading-relaxed"
        >
          {text}
        </p>
      ))}

      {tagline && (
        <p className="text-xs sm:text-sm lg:text-base text-gray-500 italic mt-4 pb-4">
          {tagline}
        </p>
      )}
    </div>
  );
};

export default TextSection;
