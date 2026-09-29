export type Locale = 'de' | 'en';

export interface Copy {
  languageName: string;
  skip: string;
  nav: { main: string; services: string; looks: string; studio: string; reviews: string; contact: string; menu: string; close: string };
  common: { book: string; explore: string; directions: string; call: string; external: string; next: string; previous: string };
  hero: { eyebrow: string; titleA: string; titleB: string; titleC: string; intro: string; sculptureAlt: string; scroll: string };
  services: { eyebrow: string; title: string; intro: string; items: { title: string; text: string }[] };
  looks: { eyebrow: string; titleA: string; titleB: string; intro: string; labels: string[]; alts: string[] };
  studio: { eyebrow: string; title: string; text: string; images: string[]; demoNote: string };
  reviews: { eyebrow: string; title: string; source: string; count: string; verified: string; stars: string };
  booking: { eyebrow: string; titleA: string; titleB: string; intro: string; addressLabel: string; phoneLabel: string; hoursLabel: string; hours: string[] };
  footer: { tagline: string; legalNote: string; copyright: string };
  sticky: string;
}
