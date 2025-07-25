"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CircleItem } from "../../types/ui";

const Circle: React.FC<CircleItem> = ({
  imageSrc,
  alt = "",
  text,
  url,
  circleDiameter,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [diameter, setDiameter] = useState(96);

  useEffect(() => {
    if (text && textRef.current) {
      const { offsetWidth, offsetHeight } = textRef.current;
      const padding = 20;
      const maxDim = Math.max(offsetWidth, offsetHeight) + padding;
      setDiameter(maxDim);
    }
  }, [text]);

  const content = (
    <div
      className="rounded-full border-4 border-gray-300 flex items-center justify-center overflow-hidden shadow-md relative text-center box-border bg-white transition-transform hover:scale-105"
      style={{
        width: typeof circleDiameter === "number" ? circleDiameter : diameter,
        height: typeof circleDiameter === "number" ? circleDiameter : diameter,
      }}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          width={typeof circleDiameter === "number" ? circleDiameter : diameter}
          height={
            typeof circleDiameter === "number" ? circleDiameter : diameter
          }
          style={{ objectFit: "cover" }}
          sizes="(min-width: 768px) 8rem, 6rem"
        />
      ) : (
        <span
          ref={textRef}
          className="z-10 font-medium text-[clamp(1.0rem,3.0vw,1.5rem)] leading-tight break-words p-2"
        >
          {text}
        </span>
      )}
    </div>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default Circle;
