// types/ui.ts or types/common.ts
export interface CircleItem {
  imageSrc?: string;
  alt?: string;
  text?: string;
  url?: string;
}

export interface TextSection {
  title: string;
  paragraphs: string[];
  tagline?: string;
}

export interface Slide {
  imageUrl: string;
  heading: string;
  paragraph: string;
  alt?: string;
}

export interface ExpandableItem {
  bulletTitle: string;
  content: {
    sectionTitle: string;
    sections: TextSection[];
    circles?: CircleItem[];
  };
}

export interface Creator {
  name: string;
  url?: string;
}

export interface Logo {
  imageSrc: string;
  alt?: string;
  url?: string;
}
