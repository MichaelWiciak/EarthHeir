// components/TextSection.tsx
import React from "react";

interface TextSectionProps {
  title: string;
  paragraphs: string[];
}

const TextSection: React.FC<TextSectionProps> = ({ title, paragraphs }) => {
  return (
    <div className="text-center md:text-left max-w-xl">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {paragraphs.map((text, index) => (
        <p key={index} className="text-base text-gray-700 mb-3">
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSection;
