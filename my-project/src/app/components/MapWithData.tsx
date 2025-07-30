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
    <div className="flex flex-col md:flex-row gap-6 items-stretch">
      {/* Map */}
      <div className="h-64 md:h-auto md:w-1/2 rounded-xl overflow-hidden">
        {memoizedMap}
      </div>

      {/* Accordion Text Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
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
