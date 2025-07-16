import React from "react";
import Image from "next/image";

interface CircleProps {
  imageSrc: string;
  alt: string;
}

const Circle: React.FC<CircleProps> = ({ imageSrc, alt }) => {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-300 flex items-center justify-center overflow-hidden shadow-md relative">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        sizes="(min-width: 768px) 8rem, 6rem"
      />
    </div>
  );
};

export default Circle;
