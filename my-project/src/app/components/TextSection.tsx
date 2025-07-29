// components/TextSection.tsx
import React from "react";
import { TextSection as TextSectionProps } from "../types/ui";
import Image from "next/image";

const TextSection: React.FC<TextSectionProps> = ({
  title,
  paragraphs,
  tagline,
  size = "h3",
  type = "default",
  imgSrc,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-4">
      {/* Text Content */}
      <div className="flex-1">
        {title &&
          title.trim() !== "" &&
          React.createElement(
            size,
            { className: "text-center md:text-left" },
            title
          )}

        {paragraphs.map((text, index) => (
          <p key={index} className="mt-2">
            {text}
          </p>
        ))}

        {tagline &&
          (type === "highlighted" ? (
            <p
              className="mt-6 text-2xl font-extrabold text-center md:text-left px-4 py-3 rounded-lg shadow-lg animate-pulse"
              style={{ color: "#0000ff", backgroundColor: "#ff43ff53" }}
            >
              {tagline}
            </p>
          ) : (
            <p className="mt-6 text-gray-500 italic">{tagline}</p>
          ))}
      </div>

      {/* Image (Hidden on mobile, centered vertically in container) */}
      {imgSrc && (
        <div className="hidden md:flex md:w-1/3 lg:w-1/4 items-center justify-center">
          <Image
            src={imgSrc}
            alt="SomeImage"
            className="w-full h-auto object-cover rounded-xl shadow"
            // make it fit to the container
            width={400}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default TextSection;
