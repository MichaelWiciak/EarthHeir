// components/ContentBlockGroupSection.tsx
import React from "react";
import TextSection from "./TextSection";
import ImageGallery from "./ImageGallery";
import ExpandableTextListSection from "./ExpandableBulletPointsSection";

interface TextSectionData {
  title: string;
  paragraphs: string[];
  tagline?: string;
}

interface SlideData {
  imageUrl: string;
  heading: string;
  paragraph: string;
  alt?: string;
}

interface CircleData {
  imageSrc?: string;
  alt?: string;
  text?: string;
}

interface ExpandableItem {
  bulletTitle: string;
  content: {
    sectionTitle: string;
    sections: TextSectionData[];
    circles?: CircleData[];
  };
}

interface ContentItem {
  gallery: {
    slides: SlideData[];
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
    <div className="space-y-24">
      {/* Render the header text section ONCE */}
      <TextSection
        title={textSection.title}
        paragraphs={textSection.paragraphs}
        tagline={textSection.tagline}
      />

      {/* Loop through gallery + expandable item */}
      {items.map((item, index) => (
        <div key={index} className="space-y-12">
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
