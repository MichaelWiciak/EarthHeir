// components/ContentBlockGroupSection.tsx
import React from "react";
import TextSection from "./TextSection";
import ImageGallery from "./ImageGallery";
import ExpandableTextListSection from "./ExpandableBulletPointsSection";
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
  return (
    <div className="mt-12 mb-12">
      {/* Render the header text section ONCE */}
      <TextSection
        title={textSection.title}
        paragraphs={textSection.paragraphs}
        tagline={textSection.tagline}
      />

      {/* Loop through gallery + expandable item */}
      {items.map((item, index) => (
        <div key={index} className="">
          <ImageGallery title="" slides={item.gallery.slides} />
          <ExpandableTextListSection
            title={""}
            description=""
            items={[item.expandableItem]}
          />
        </div>
      ))}
    </div>
  );
};

export default ContentBlockGroupSection;
