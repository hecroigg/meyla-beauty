import { media } from '../../data/content';
import type { Copy } from '../../i18n';
import { ImageReveal } from '../motion/ImageReveal';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function Looks({ copy }: { copy: Copy }) {
  const images = [media.cherry, media.french, media.manicure];
  return <section className="looks section" id="looks"><Container>
    <div className="looks-heading"><SectionTitle eyebrow={copy.looks.eyebrow}><span>{copy.looks.titleA}</span><span>{copy.looks.titleB}</span></SectionTitle><p>{copy.looks.intro}</p></div>
    <div className="looks-track">{images.map((src, index) => <article key={src}><ImageReveal src={src} alt={copy.looks.alts[index]} /><span>{copy.looks.labels[index]}</span><b>0{index + 1}</b></article>)}</div>
  </Container></section>;
}
