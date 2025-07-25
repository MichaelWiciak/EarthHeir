// components/TitlePage.tsx
import React from "react";
import TitleSection from "./TitleSection";
import CircleGroup from "./CircleGroup";
import { Creator, Logo } from "../types/ui";
import titleBackground from "../../../public/titleBackground.jpg";

interface TitlePageProps {
  title: string;
  creators: Creator[];
  motto: string;
  logos: Logo[];
}

const TitlePage: React.FC<TitlePageProps> = ({
  title,
  creators,
  motto,
  logos,
}) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 py-24">
      {/* Content above background */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-6">
        {/* Left logo (desktop only) */}
        <div className="hidden md:flex">
          <CircleGroup items={[logos[0]]} circleDiameter={200} />
        </div>

        {/* Center title section */}
        <TitleSection title={title} creators={creators} motto={motto} />

        {/* Right logo (desktop only) */}
        <div className="hidden md:flex">
          <CircleGroup items={[logos[1]]} circleDiameter={200} />
        </div>

        {/* Mobile view: show both logos below */}
        <div className="flex md:hidden mt-8 gap-4">
          <CircleGroup items={logos} direction="row" circleDiameter={120} />
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
