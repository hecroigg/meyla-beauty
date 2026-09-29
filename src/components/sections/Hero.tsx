import { business, media } from '../../data/content';
import type { Copy } from '../../i18n';
import { BookingCTA } from '../ui/BookingCTA';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero({ copy }: { copy: Copy }) {
  return <section className="hero" id="top">
    <Container className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">{copy.hero.eyebrow}</p>
        <h1><span>{copy.hero.titleA}</span><span>{copy.hero.titleB}</span><em>{copy.hero.titleC}</em></h1>
        <p className="hero-intro">{copy.hero.intro}</p>
        <div className="hero-actions"><BookingCTA copy={copy} /><Button href="#services" variant="line">{copy.common.explore}</Button></div>
      </div>
      <div className="hero-art" aria-label={copy.hero.sculptureAlt}>
        <div className="hero-orbit" aria-hidden="true" />
        <img src={media.sculpture} alt={copy.hero.sculptureAlt} fetchPriority="high" />
        <p aria-hidden="true">MEYLA · MANNHEIM · BEAUTY ·</p>
      </div>
      <a className="scroll-cue" href="#services"><span />{copy.hero.scroll}</a>
      <p className="hero-location">{business.street}<br />{business.postalCity}</p>
    </Container>
  </section>;
}
