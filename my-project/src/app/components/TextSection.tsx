// components/TextSection.tsx
import React from "react";
import { TextSection as TextSectionProps } from "../types/ui";

const TextSection: React.FC<TextSectionProps> = ({
  title,
  paragraphs,
  tagline,
  size = "h3",
}) => {
  return (
    <div className="">
      {title &&
        title.trim() !== "" &&
        React.createElement(size, { className: "text-center" }, title)}

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
