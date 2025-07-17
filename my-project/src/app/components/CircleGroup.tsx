// components/CircleGroup.tsx
import React from "react";
import Circle from "./ui/Circle";

interface CircleData {
  imageSrc?: string;
  alt?: string;
  text?: string;
  url?: string;
}

interface CircleGroupProps {
  items: CircleData[];
  direction?: "row" | "col"; // Optional layout control
}

const CircleGroup: React.FC<CircleGroupProps> = ({
  items,
  direction = "col",
}) => {
  const layoutClass = direction === "row" ? "flex-row" : "flex-col";

  return (
    <div className={`flex ${layoutClass} gap-4 items-center justify-center`}>
      {items.map((item, index) => (
        <Circle
          key={index}
          imageSrc={item.imageSrc}
          alt={item.alt}
          text={item.text}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default CircleGroup;
