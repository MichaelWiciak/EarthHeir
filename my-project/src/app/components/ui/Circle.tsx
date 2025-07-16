"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CircleProps {
  imageSrc?: string;
  alt?: string;
  text?: string;
}

const Circle: React.FC<CircleProps> = ({ imageSrc, alt = "", text }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [diameter, setDiameter] = useState(96); // default: 6rem = 96px

  useEffect(() => {
    if (text && textRef.current) {
      const { offsetWidth, offsetHeight } = textRef.current;
      const padding = 20; // Add some breathing room
      const maxDim = Math.max(offsetWidth, offsetHeight) + padding;
      setDiameter(maxDim);
    }
  }, [text]);

  return (
    <div
      className="rounded-full border-4 border-gray-300 flex items-center justify-center overflow-hidden shadow-md relative text-center box-border bg-white"
      style={{
        width: diameter,
        height: diameter,
        minWidth: 120,
        minHeight: 120,
      }}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width: 768px) 8rem, 6rem"
        />
      ) : (
        <span
          ref={textRef}
          className="z-10 font-medium text-[clamp(0.6rem,2.5vw,1rem)] leading-tight break-words p-2"
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Circle;
