// components/TitlePage.tsx
import React from "react";
import TitleSection from "./TitleSection";
import CircleGroup from "./CircleGroup";

interface TitlePageProps {
  title: string;
  creators: string[];
  motto: string;
  logos: { imageSrc: string; alt: string }[];
}

const TitlePage: React.FC<TitlePageProps> = ({
  title,
  creators,
  motto,
  logos,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-6">
      {/* Left logo (desktop only) */}
      <div className="hidden md:flex">
        <CircleGroup items={[logos[0]]} />
      </div>

      {/* Center title section */}
      <TitleSection title={title} creators={creators} motto={motto} />

      {/* Right logo (desktop only) */}
      <div className="hidden md:flex">
        <CircleGroup items={[logos[1]]} />
      </div>

      {/* Mobile view: show both logos below */}
      <div className="flex md:hidden mt-8 gap-4">
        <CircleGroup items={logos} direction="row" />
      </div>
    </div>
  );
};

export default TitlePage;
