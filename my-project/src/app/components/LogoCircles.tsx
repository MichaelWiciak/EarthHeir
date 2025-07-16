import React from "react";
import Circle from "./ui/Circles";

interface LogoCirclesProps {
  logos: { imageSrc: string; alt: string }[];
}

const LogoCircles: React.FC<LogoCirclesProps> = ({ logos }) => {
  return (
    <div className="flex flex-col md:flex-col justify-center items-center gap-4">
      {logos.map((logo, index) => (
        <Circle key={index} imageSrc={logo.imageSrc} alt={logo.alt} />
      ))}
    </div>
  );
};

export default LogoCircles;
