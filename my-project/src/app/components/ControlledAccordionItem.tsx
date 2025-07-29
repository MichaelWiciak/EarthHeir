// components/ControlledAccordionItem.tsx
import React from "react";
import { motion } from "framer-motion";
import MultiTextCircleSection from "./MultiText+Circles";
import { ExpandableItem } from "../types/ui";

interface ControlledAccordionItemProps {
  item: ExpandableItem;
  isExpanded: boolean;
  onToggle: () => void;
}

const ControlledAccordionItem: React.FC<ControlledAccordionItemProps> = ({
  item,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className={`w-full flex justify-between items-center p-4 text-left ${
          isExpanded ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-gray-50"
        } transition-colors duration-500`}
        aria-expanded={isExpanded}
      >
        <span className="font-medium">{item.bulletTitle}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {/* Expanded Content (Animated) */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: isExpanded ? "auto" : 0 }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white"
      >
        {isExpanded && (
          <div className="p-4 border-t border-gray-100">
            <MultiTextCircleSection {...item.content} circleDirection="row" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ControlledAccordionItem;
