// components/ImageWithTitle.tsx
import React from "react";
import Image from "next/image";

interface ImageWithTitleProps {
  title: string;
  imageUrl: string;
  alt?: string;
  width?: number; // in pixels
  height?: number; // in pixels
  rotationDegrees?: number; // e.g. 15
}

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({
  title,
  imageUrl,
  alt = "Image",
  width = 400,
  height = 300,
  rotationDegrees = 0,
}) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div
        className="inline-block transition-transform"
        style={{
          transform: `rotate(${rotationDegrees}deg)`,
        }}
      >
        <Image
          src={imageUrl}
          alt={alt}
          width={width}
          height={height}
          className="rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default ImageWithTitle;
