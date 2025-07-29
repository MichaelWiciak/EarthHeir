"use client";

import { useEffect, useState } from "react";

export default function InstagramFeed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const scriptId = "snapwidget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://snapwidget.com/js/snapwidget.js";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  const iframeSrc = isMobile
    ? "https://snapwidget.com/embed/1103716"
    : "https://snapwidget.com/embed/1103273";

  return (
    <section className="w-full max-w-4xl mx-auto">
      <h2 className="mb-6 text-center">Sustain;ed Instagram Feed</h2>
      <p className="text-center mb-4">
        Follow us on Instagram for the latest updates and community stories.
      </p>
      <iframe
        src={iframeSrc}
        className="snapwidget-widget"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
        }}
        aria-label="Instagram Feed"
        title="Posts from Instagram"
      ></iframe>
    </section>
  );
}
