import { useEffect, useState } from 'react';
import { business } from './data/content';
import { dictionaries, type Locale } from './i18n';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Looks } from './components/sections/Looks';
import { Studio } from './components/sections/Studio';
import { Reviews } from './components/sections/Reviews';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [locale, setLocale] = useState<Locale>('de');
  const copy = dictionaries[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = locale === 'de' ? 'Meyla Beauty Mannheim — Nails & Beauty' : 'Meyla Beauty Mannheim — Nails & Beauty Studio';
  }, [locale]);

  return <>
    <a className="skip-link" href="#main">{copy.skip}</a>
    <Header copy={copy} locale={locale} onLocale={setLocale} />
    <main id="main"><Hero copy={copy} /><Services copy={copy} /><Looks copy={copy} /><Studio copy={copy} /><Reviews copy={copy} locale={locale} /><Contact copy={copy} /></main>
    <Footer copy={copy} />
    <a className="mobile-book" href={business.bookingUrl} target="_blank" rel="noreferrer"><span>{copy.sticky}</span><i aria-hidden="true">↗</i></a>
  </>;
}
