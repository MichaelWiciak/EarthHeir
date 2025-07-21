// components/CircleGroup.tsx
import React from "react";
import Circle from "./ui/Circle";
import { CircleItem } from "../types/ui";

interface CircleGroupProps {
  items: CircleItem[];
  direction?: "row" | "col";
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
