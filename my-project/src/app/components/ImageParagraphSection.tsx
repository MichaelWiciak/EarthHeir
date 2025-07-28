// components/ImageParagraphSection.tsx
import React from "react";
import Image from "next/image";

interface ImageParagraphSectionProps {
  imageSrc: string;
  imageAlt?: string;
  sectionTitle: string;
  paragraphs: readonly string[]; // now an array
  imageOn: "left" | "right";
}

const ImageParagraphSection: React.FC<ImageParagraphSectionProps> = ({
  imageSrc,
  imageAlt = "Section image",
  paragraphs,
  sectionTitle,
  imageOn,
}) => {
  const isImageLeft = imageOn === "left";

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div
        className={`w-full  md:w-1/2 ${
          isImageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="p-8">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="opacity-80 hover:opacity-100 transition-opacity duration-300 border rounded-4xl"
          />
        </div>
      </div>

      <div
        className={`w-full p-4 md:w-1/2 ${
          isImageLeft ? "md:order-2" : "md:order-1"
        } text-center md:text-left`}
      >
        <h3 className="text-center">{sectionTitle}</h3>
        {paragraphs.map((para, idx) => (
          <div key={idx} className="mb-2">
            {para}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageParagraphSection;
