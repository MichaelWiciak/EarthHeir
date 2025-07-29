// components/ContentBlockGroupSection.tsx
import React from "react";
import TextSection from "./TextSection";
import ImageGallery from "./ImageGallery";
import ControlledAccordionItem from "./ControlledAccordionItem";
import { useState } from "react";
import {
  TextSection as TextSectionData,
  Slide,
  ExpandableItem,
} from "../types/ui";

interface ContentItem {
  gallery: {
    slides: Slide[];
  };
  expandableItem: ExpandableItem;
}

interface ContentBlockGroupSectionProps {
  textSection: TextSectionData;
  items: ContentItem[];
}

const ContentBlockGroupSection: React.FC<ContentBlockGroupSectionProps> = ({
  textSection,
  items,
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Controls both gallery and accordion

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Text Section */}
      <TextSection
        title={textSection.title}
        paragraphs={textSection.paragraphs}
        tagline={textSection.tagline}
        size="h2"
        imgSrc="/titleBackground.jpg"
      />

      {/* Gallery + Accordion Container */}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Gallery (Left) */}
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden">
            <ImageGallery slides={items[activeIndex].gallery.slides} />
          </div>
        </div>

        {/* Accordion (Right) */}
        <div className="w-full md:w-1/2">
          <div className="space-y-4">
            {items.map((item, index) => (
              <ControlledAccordionItem
                key={index}
                item={item.expandableItem}
                isExpanded={activeIndex === index}
                onToggle={() => setActiveIndex(index)} // Single click updates both gallery and expansion
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlockGroupSection;
