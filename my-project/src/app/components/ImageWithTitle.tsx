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
  size?: "h2" | "h3" | "h4";
}

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({
  title,
  imageUrl,
  alt = "Image",
  width = 400,
  height = 300,
  rotationDegrees = 0,
  size = "h3",
}) => {
  return (
    <div className="text-center space-y-4">
      {React.createElement(size, { className: "" }, title)}
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
          className="rounded-md shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default ImageWithTitle;
