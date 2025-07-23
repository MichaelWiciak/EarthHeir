import React from "react";
import Image from "next/image";
import { Creator } from "../types/ui";
import titleLogo from "../../../public/Logo_PACK-01.png";

interface TitleSectionProps {
  title: string;
  creators: Creator[];
  motto: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  creators,
  motto,
}) => {
  return (
    <div className="text-center md:text-left py-16">
      {/* <Image
        src={titleLogo}
        alt={title}
        className="mb-4 mx-auto md:mx-0"
        priority={true}
        placeholder="blur"
        width={120}
        height={120}
      /> */}

      {/* <p className="text-lg mb-2 text-center">
      By{" "}
      {creators.map((creator, index) => (
        <span key={index}>
        {creator.url ? (
          <a
          href={creator.url}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          >
          {creator.name}
          </a>
        ) : (
          creator.name
        )}
        {index < creators.length - 1 && ", "}
        </span>
      ))}
      </p> */}

      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 drop-shadow-lg, text-center">
        {motto}
      </h1>
    </div>
  );
};

export default TitleSection;
