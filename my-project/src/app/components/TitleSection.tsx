import React from "react";
import { Creator } from "../types/ui";

interface TitleSectionProps {
  title: string;
  creators: Creator[];
  motto: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, motto }) => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-[clamp(5rem,20vw,20rem)] font-extrabold md:font-black text-white mb-10 leading-[1.1] tracking-[-0.02em] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        Championing Sustainability &amp; <br />
        <span
          style={{
            color: "#E82A93",
            fontFamily: "'Covered By Your Grace', cursive",
          }}
        >
          Social Impact
        </span>
        &nbsp;for Systematic Change
      </h1>
      <p className="font-bold text-lg text-white ">{motto}</p>
    </div>
  );
};

export default TitleSection;
