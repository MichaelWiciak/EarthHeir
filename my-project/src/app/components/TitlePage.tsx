// components/TitlePage.tsx
import React from "react";
import TitleSection from "./TitleSection";
import LogoCircles from "./LogoCircles";

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
      {/* Left logo (hidden on mobile) */}
      <div className="hidden md:flex">
        <LogoCircles logos={[logos[0]]} />
      </div>

      {/* Center text */}
      <TitleSection title={title} creators={creators} motto={motto} />

      {/* Right logo (hidden on mobile) */}
      <div className="hidden md:flex">
        <LogoCircles logos={[logos[1]]} />
      </div>

      {/* Mobile view: both logos at bottom */}
      <div className="flex md:hidden mt-8 gap-4">
        <LogoCircles logos={logos} />
      </div>
    </div>
  );
};

export default TitlePage;
