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
    <div className="w-full py-12">
      <h2 className="text-center py-4">{title}</h2>

      {sections.map((section, idx) => (
        <ImageParagraphSection key={idx} {...section} />
      ))}

      {taglineItems && (
        <ul className="mt-3 list-disc list-inside text-gray-600 text-base text-center">
          {taglineItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageParagraphGroup;
