import { useState } from 'react';
import type { Copy, Locale } from '../../i18n';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { BookingCTA } from '../ui/BookingCTA';

export function Header({ copy, locale, onLocale }: { copy: Copy; locale: Locale; onLocale: (value: Locale) => void }) {
  const [open, setOpen] = useState(false);
  const links = [['services', copy.nav.services], ['looks', copy.nav.looks], ['studio', copy.nav.studio], ['reviews', copy.nav.reviews], ['contact', copy.nav.contact]];
  return <header className="site-header">
    <a className="wordmark" href="#top" aria-label="Meyla Beauty Mannheim"><b>MEYLA</b><span>BEAUTY</span></a>
    <nav className={open ? 'is-open' : ''} aria-label={copy.nav.main}>
      {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <BookingCTA copy={copy} />
    </nav>
    <div className="header-tools">
      <LanguageSwitcher locale={locale} onChange={onLocale} label={copy.languageName} />
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? copy.nav.close : copy.nav.menu}><span /><span /></button>
    </div>
  </header>;
}
