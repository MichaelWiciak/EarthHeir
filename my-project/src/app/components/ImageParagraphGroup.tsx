// components/ImageParagraphGroup.tsx
import React from "react";
import ImageParagraphSection from "./ImageParagraphSection";

export interface SectionData {
  imageSrc: string;
  imageAlt: string;
  sectionTitle: string;
  paragraphs: readonly string[];
  imageOn: "left" | "right";
}

interface ImageParagraphGroupProps {
  title: string;
  sections: readonly SectionData[];
  taglineItems?: string[];
}

const ImageParagraphGroup: React.FC<ImageParagraphGroupProps> = ({
  title,
  sections,
  taglineItems,
}) => {
  return (
    <div className="w-full px-4 py-12 space-y-10">
      <h2 className="text-3xl font-bold text-center">{title}</h2>

      {sections.map((section, idx) => (
        <ImageParagraphSection key={idx} {...section} />
      ))}

      {taglineItems && (
        <ul className="mt-6 list-disc list-inside text-gray-600 text-base">
          {taglineItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageParagraphGroup;
