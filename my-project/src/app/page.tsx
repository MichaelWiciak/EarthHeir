"use client";

import TitlePage from "@/app/components/TitlePage";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <TitlePage
        title="sustain;ed"
        creators={["The Sea Monkey Project", "Earth Heir"]}
        motto="Champtioning Sustainability & Social Impact for Systematic Change"
        logos={[
          { imageSrc: "/seamonkeylogo.png", alt: "Logo 1" },
          { imageSrc: "/earthheirlogo.png", alt: "Logo 2" },
        ]}
      />
    </main>
  );
}
