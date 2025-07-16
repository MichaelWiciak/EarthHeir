import React from "react";

interface TitleSectionProps {
  title: string;
  creators: string[];
  motto: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  creators,
  motto,
}) => {
  return (
    <div className="text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-2">By: {creators.join(", ")}</p>
      <p className="text-md italic text-gray-600">{motto}</p>
    </div>
  );
};

export default TitleSection;
