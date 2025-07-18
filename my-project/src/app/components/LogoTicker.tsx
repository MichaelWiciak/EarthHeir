// components/LogoTicker.tsx
"use client";

import React from "react";
import Image from "next/image";

interface LogoTickerProps {
  logos: { src: string; alt?: string }[];
}

const LogoTicker: React.FC<LogoTickerProps> = ({ logos }) => {
  // Repeat the logo set multiple times for smooth animation
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="overflow-hidden py-4">
      {/* Desktop: static row of logos */}
      <div className="hidden md:flex justify-center items-center gap-6 flex-wrap">
        {logos.map((logo, idx) => (
          <Image
            key={idx}
            src={logo.src}
            alt={logo.alt || `Logo ${idx + 1}`}
            width={200}
            height={100}
            className="h-auto w-auto max-h-10 object-contain"
          />
        ))}
      </div>

      {/* Mobile: smooth infinite scroll */}
      <div className="md:hidden relative w-full overflow-hidden">
        <div className="flex gap-8 animate-logo-scroll min-w-fit">
          {repeatedLogos.map((logo, idx) => (
            <Image
              key={idx}
              src={logo.src}
              alt={logo.alt || `Logo ${idx + 1}`}
              width={60}
              height={30}
              className="h-auto w-auto max-h-10 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
