import React from "react";
import { Creator } from "../types/ui";

interface TitleSectionProps {
  title: string;
  creators: Creator[];
  motto: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ motto }) => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-[clamp(5rem,20vw,20rem)] font-extrabold md:font-black text-gray-900 mb-10 leading-[1.1] tracking-[-0.02em] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        {motto}
      </h1>
    </div>
  );
};

export default TitleSection;
