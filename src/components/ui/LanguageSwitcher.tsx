import type { Locale } from '../../i18n';

export function LanguageSwitcher({ locale, onChange, label }: { locale: Locale; onChange: (locale: Locale) => void; label: string }) {
  return <div className="language-switcher" role="group" aria-label={label}>
    {(['de', 'en'] as Locale[]).map((item) => <button key={item} aria-pressed={locale === item} onClick={() => onChange(item)}>{item.toUpperCase()}</button>)}
  </div>;
}
