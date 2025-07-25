// components/ExpandableTextListSection.tsx
import React, { useState } from "react";
import MultiTextCircleSection from "./MultiText+Circles";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandableItem } from "../types/ui";

interface ExpandableTextListSectionProps {
  title: string;
  description: string;
  items: ExpandableItem[];
}

const ExpandableTextListSection: React.FC<ExpandableTextListSectionProps> = ({
  title,
  description,
  items,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {title && (
        <div className="md:text-left">
          <h2 className="text-4xl font-bold text-center">{title}</h2>
          <p className="text-gray-700 max-w-3xl mx-auto md:mx-0">
            {description}
          </p>
        </div>
      )}

      <ul className="space-y-4">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <li key={index}>
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-center items-center w-full text-lg font-medium text-blue-700 hover:underline cursor-pointer"
                aria-expanded={isExpanded}
                aria-label={
                  isExpanded
                    ? `Collapse details for ${item.bulletTitle}`
                    : `Expand details for ${item.bulletTitle}`
                }
              >
                <span className="mr-2">
                  {isExpanded ? (
                    <span aria-hidden="true">−</span>
                  ) : (
                    <span aria-hidden="true">+</span>
                  )}
                </span>
                {item.bulletTitle}
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="mt-4 border-l-2 border-blue-300 pl-4">
                      <MultiTextCircleSection
                        {...item.content}
                        circleDirection="row"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpandableTextListSection;
