export type WikiInfoboxRow = {
  label: string;
  value: string | readonly string[];
  href?: string;
};

export type WikiGalleryItem = {
  id: string;
  href: string;
  kind: "video" | "image";
  handle: string;
  author: string;
  text: string;
  date: string;
  caption: string;
  thumbnail: string;
  duration?: string;
  views?: string;
  /** Default: X embed when status ID is present */
  source?: "x" | "web";
};

export type WikiSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  list?: readonly string[];
  link?: {
    href: string;
    label: string;
  };
  gallery?: readonly WikiGalleryItem[];
  subsections?: readonly {
    id: string;
    title: string;
    paragraphs: readonly string[];
    image?: {
      src: string;
      alt: string;
      caption: string;
    };
  }[];
};

export type WikiReference = {
  id: number;
  title: string;
  href: string;
  publisher?: string;
  date?: string;
};

export type WikiArticleData = {
  title: string;
  description: string;
  curatedLabel?: string;
  lead: readonly string[];
  infobox: {
    title: string;
    image: {
      src: string;
      alt: string;
      caption: string;
      /** Default cover; use contain for landscape screenshots */
      fit?: "cover" | "contain";
    };
    rows: readonly WikiInfoboxRow[];
  };
  sections: readonly WikiSection[];
  /** Inline citations use {{1}}, {{2}}, … matching these ids */
  references?: readonly WikiReference[];
  footerNote: string;
};
