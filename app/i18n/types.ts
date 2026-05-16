export type Locale = "en" | "vi";

export interface Dictionary {
  navigation: {
    brand: string;
    links: Record<string, string>;
    cta: string;
    langToggle: string;
  };
  hero: {
    role: string;
    nameLine1: string;
    nameLine2: string;
    manifesto: string;
    cta: string;
  };
  metrics: {
    label: string;
    items: { value: string; label: string; desc: string }[];
  };
  bio: {
    label: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  timeline: {
    label: string;
    events: { year: string; role: string; company: string; desc: string }[];
  };
  products: {
    label: string;
    title: string;
    items: { name: string; tagline: string; desc: string }[];
  };
  values: {
    label: string;
    items: { title: string; desc: string }[];
  };
  press: {
    label: string;
    pubs: string[];
    quotes: { source: string; date: string; text: string }[];
  };
  contact: {
    label: string;
    title: string;
    desc: string;
    emailLabel: string;
    phoneLabel: string;
  };
  insights: {
    label: string;
    title: string;
    subtitle: string;
    readMore: string;
    backToList: string;
    posts: {
      slug: string;
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
      content: string[];
    }[];
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
}
