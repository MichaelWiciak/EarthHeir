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
    <div className="flex flex-col md:flex-row items-center gap-6 py-8 px-4">
      <div
        className={`w-full md:w-1/2 ${
          isImageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      <div
        className={`w-full md:w-1/2 ${
          isImageLeft ? "md:order-2" : "md:order-1"
        } text-center md:text-left`}
      >
        <h3 className="text-2xl font-semibold mb-2">{sectionTitle}</h3>
        {paragraphs.map((para, idx) => (
          <p key={idx} className="text-lg text-gray-700 mb-3">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ImageParagraphSection;
