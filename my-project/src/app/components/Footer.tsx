"use client";

import React from "react";
import Image from "next/image";

interface FooterProps {
  logoSrc: string;
  logoAlt?: string;
  bullets: string[];
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  logoAlt = "Logo",
  bullets,
}) => {
  return (
    <footer className="w-full bg-gray-100 py-8 px-6 border-t border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={250}
            height={250}
            style={{ height: "auto", width: "auto" }}
          />
        </div>

        {/* Bullet points */}
        <ul className="text-center md:text-left space-y-1">
          {bullets.map((point, index) => (
            <li key={index} className="text-gray-700 list-disc list-inside">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
