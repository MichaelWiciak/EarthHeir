// components/TextImageGallerySection.tsx
import React from "react";
import Image from "next/image";
import { Slide } from "../types/ui";

interface TextImageGallerySectionProps {
  overallTitle: string;
  paragraphTitle?: string;
  paragraphText: string;
  imageSrc: string;
  imageAlt?: string;
  galleryTitle: string;
  images: Slide[];
}

const TextImageGallerySection: React.FC<TextImageGallerySectionProps> = ({
  overallTitle,
  paragraphTitle,
  paragraphText,
  imageSrc,
  imageAlt,
  galleryTitle,
  images,
}) => {
  return (
    <section className="py-12 space-y-12">
      {/* Overall title */}
      <h2 className="text-3xl font-bold text-center md:text-left">
        {overallTitle}
      </h2>

      {/* Paragraph + Image section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Paragraph */}
        <div className=" md:text-left max-w-xl flex-1">
          {paragraphTitle && (
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {paragraphTitle}
            </h3>
          )}
          <p className="text-base text-gray-700">{paragraphText}</p>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[50%] max-w-xl">
          <div className="w-full h-[300px] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={imageSrc}
              alt={imageAlt || "Section image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Static Image Gallery */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center md:text-left">
          {galleryTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={img.imageUrl}
                alt={img.alt || `Image ${idx + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black/60 text-white p-3 w-full">
                <h4 className="text-lg font-bold">{img.heading}</h4>
                <p className="text-sm">{img.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextImageGallerySection;
