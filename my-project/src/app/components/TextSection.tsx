// components/TextSection.tsx
import React from "react";
import { TextSection as TextSectionProps } from "../types/ui";

const TextSection: React.FC<TextSectionProps> = ({
  title,
  paragraphs,
  tagline,
}) => {
  return (
    <div className="">
      {title && title.trim() !== "" && <h3 className="">{title}</h3>}

      {paragraphs.map((text, index) => (
        <p key={index} className="">
          {text}
        </p>
      ))}

      {tagline && <p className="mt-6 text-gray-500 italic">{tagline}</p>}
    </div>
  );
};

export default TextSection;
