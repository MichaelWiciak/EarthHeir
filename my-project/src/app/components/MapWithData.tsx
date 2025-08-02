import React, { useState, useMemo } from "react";
import OpenFreeMap from "./OpenFreeMap";
import SimpleAccordionItem from "./SimpleAccordionItem";

interface MapWithDetailsSectionProps {
  coordinates: [number, number]; // [latitude, longitude]
  title: string;
  bulletpoints: string[]; // The raw flat array passed in from the page
  zoom?: number;
}

const MapWithDetailsSection: React.FC<MapWithDetailsSectionProps> = ({
  coordinates,
  title,
  bulletpoints,
  zoom = 13,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Group bulletpoints into structured accordion items
  const locationAccordionItems = [
    {
      bulletTitle: "Where to Find Us",
      bulletpoints: bulletpoints.slice(0, 4),
    },
    {
      bulletTitle: "Opening Hours",
      bulletpoints: bulletpoints.slice(4, 5),
    },
    {
      bulletTitle: "Public Transport & Access",
      bulletpoints: bulletpoints.slice(5, 6),
    },
    {
      bulletTitle: "Parking Options",
      bulletpoints: bulletpoints.slice(6, 9),
    },
    {
      bulletTitle: "Facilities & Contact",
      bulletpoints: bulletpoints.slice(9, 12),
    },
  ];

  // ✅ Memoized map to avoid unnecessary re-renders
  const memoizedMap = useMemo(
    () => (
      <OpenFreeMap coordinates={[coordinates[1], coordinates[0]]} zoom={zoom} />
    ),
    [coordinates, zoom]
  );

  return (
    <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 gap-16">
      {/* Map */}
      <div className="h-full w-full grid place-items-center min-h-64">
        {memoizedMap}
      </div>

      {/* Accordion Text Content */}
      <div className="border-[#322D81] border-8 rounded-[4rem] pb-8 shadow-[4px_8px_0px_0px_#B467A2,-4px_8px_0px_0px_#B467A2] py-6 px-8">
        <h2 className="text-3xl font-bold uppercase mb-5 text-center">
          {title}
        </h2>
        <div className="space-y-4">
          {locationAccordionItems.map((item, index) => (
            <SimpleAccordionItem
              key={index}
              title={item.bulletTitle}
              bulletpoints={item.bulletpoints}
              isExpanded={activeIndex === index}
              onToggle={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapWithDetailsSection;
