"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  logoSrc: string;
  logoAlt?: string;
  copyright: string;
  deployedOn: string;
  deployedOnLink: Record<string, string>;
  createdBy: string;
  createdByLink1: Record<string, string>;
  createdByLink2: Record<string, string>;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  logoAlt = "Logo",
  copyright,
  deployedOn,
  deployedOnLink,
  createdBy,
  createdByLink1,
  createdByLink2,
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

        {/* Information sections as bullet points */}
        <ul className="text-center md:text-left space-y-2 text-sm text-gray-600 list-disc list-inside">
          {/* Copyright */}
          <li>{copyright}</li>

          {/* Deployed on */}
          <li>
            {deployedOn}{" "}
            <Link
              href={Object.values(deployedOnLink)[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors hover:cursor-pointer"
            >
              {Object.keys(deployedOnLink)[0]}
            </Link>
          </li>

          {/* Created by */}
          <li>
            {createdBy}{" "}
            <Link
              href={Object.values(createdByLink1)[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors hover:cursor-pointer"
            >
              {Object.keys(createdByLink1)[0]}
            </Link>{" "}
            &{" "}
            <Link
              href={Object.values(createdByLink2)[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors hover:cursor-pointer"
            >
              {Object.keys(createdByLink2)[0]}
            </Link>{" "}
            in partnership with Sustain.ed
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
