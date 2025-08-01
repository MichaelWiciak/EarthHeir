import React from "react";
import { Creator } from "../types/ui";

interface TitleSectionProps {
  title: string;
  creators: Creator[];
  motto: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, motto }) => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", " ");
    }
  };

  return (
    <div className="text-center md:text-left">
      <h1 className="text-[clamp(5rem,20vw,20rem)] font-extrabold md:font-black text-white mb-10 leading-[1.1] tracking-[-0.02em] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        Championing Sustainability &amp; <br />
        <span
          style={{ color: "oklch(0.6088 0.2007 351.16)" }}
          className="font-playful"
        >
          Social Impact
        </span>
        &nbsp;for Systematic Change
      </h1>
      <p className="font-bold text-lg text-white">{motto}</p>
      <button
        onClick={scrollToContact}
        className="bg-[oklch(0.7625_0.0803_204.83)] text-[oklch(0.985_0_0)] shadow-xs hover:bg-[oklch(0.7625_0.0803_204.83)/80] px-6 py-3 rounded-md font-semibold transition-colors mt-4"
      >
        Contact Us
      </button>
    </div>
  );
};

export default TitleSection;
