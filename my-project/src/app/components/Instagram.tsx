"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    const scriptId = "snapwidget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://snapwidget.com/js/snapwidget.js";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <h2 className="mb-6 text-center">Sustain;ed Instagram Feed</h2>
      <iframe
        src="https://snapwidget.com/embed/1103273"
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
