import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    const scriptId = "lightwidget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Sustain;ed Instagram Feed
      </h2>
      <iframe
        src="//lightwidget.com/widgets/e9cf9ddfc3555734a0f88a24cb8387b1.html"
        className="w-full border-0 overflow-hidden lightwidget-widget"
        style={{ height: "100%", minHeight: "500px" }}
        title="Instagram Feed"
      ></iframe>
    </section>
  );
}
