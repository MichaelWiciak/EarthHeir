// components/SimpleAccordionItem.tsx
import React from "react";
import { motion } from "framer-motion";

interface SimpleAccordionItemProps {
  title: string;
  bulletpoints: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const SimpleAccordionItem: React.FC<SimpleAccordionItemProps> = ({
  title,
  bulletpoints,
  isExpanded,
  onToggle,
}) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className={`w-full flex justify-between items-center p-4 text-left ${
        isExpanded ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-gray-50"
      } transition-colors duration-500`}
    >
      <span className="font-medium">{title}</span>
      <span
        className={`transform transition-transform duration-200 ${
          isExpanded ? "rotate-180" : ""
        }`}
      >
        ▼
      </span>
    </button>
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: isExpanded ? "auto" : 0 }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white"
    >
      {isExpanded && (
        <ul className="p-4 list-disc list-inside space-y-2">
          {bulletpoints.map((point, idx) =>
            point === "Watch our directions video" ? (
              <li key={idx}>
                <a
                  href="https://www.instagram.com/reel/CwRhxBKJ55z/?igsh=MWsxbXhwMGg2cXprbg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Watch our directions video
                </a>
              </li>
            ) : (
              <li key={idx}>{point}</li>
            )
          )}
        </ul>
      )}
    </motion.div>
  </div>
);

export default SimpleAccordionItem;
