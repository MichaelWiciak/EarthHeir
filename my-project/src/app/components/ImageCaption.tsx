// components/ImageCaptionOverlay.tsx
import React from "react";

interface ImageCaptionOverlayProps {
  heading: string;
  paragraph: string;
}

const ImageCaptionOverlay: React.FC<ImageCaptionOverlayProps> = ({
  heading,
  paragraph,
}) => {
  return (
    <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white p-4 rounded-md max-w-xs">
      <h4 className="text-lg font-semibold">{heading}</h4>
      <p className="text-sm mt-1">{paragraph}</p>
    </div>
  );
};

export default ImageCaptionOverlay;
