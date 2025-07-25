// components/CircleGroup.tsx
import React from "react";
import Circle from "./ui/Circle";
import { CircleItem } from "../types/ui";

interface CircleGroupProps {
  items: CircleItem[];
  direction?: "row" | "col";
  circleDiameter?: number;
}

const CircleGroup: React.FC<CircleGroupProps> = ({
  items,
  direction = "col",
  circleDiameter,
}) => {
  const layoutClass =
    direction === "row"
      ? "flex flex-wrap justify-center gap-4"
      : "flex flex-col items-center space-y-4";

  return (
    <div className={`${layoutClass} gap-4 items-center justify-center`}>
      {items.map((item, index) => (
        <Circle key={index} {...item} circleDiameter={circleDiameter} />
      ))}
    </div>
  );
};

export default CircleGroup;
