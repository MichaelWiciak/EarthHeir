// components/TextSection.tsx
import React from "react";
import { TextSection as TextSectionProps } from "../types/ui";

const TextSection: React.FC<TextSectionProps> = ({
  title,
  paragraphs,
  tagline,
  size = "h3",
  type = "default",
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

      {tagline &&
        (type === "highlighted" ? (
          <p
            className="mt-6 text-2xl font-extrabold text-center px-4 py-3 rounded-lg shadow-lg animate-pulse"
            style={{ color: "#0000ff", backgroundColor: "##ff43ff" }}
          >
            {tagline}
          </p>
        ) : (
          <p className="mt-6 text-gray-500 italic">{tagline}</p>
        ))}
    </div>
  );
};

export default TextSection;
