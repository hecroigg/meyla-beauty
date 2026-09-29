import { media } from '../../data/content';
import type { Copy } from '../../i18n';
import { ImageReveal } from '../motion/ImageReveal';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function Studio({ copy }: { copy: Copy }) {
  return <section className="studio section" id="studio"><Container>
    <div className="studio-copy"><SectionTitle eyebrow={copy.studio.eyebrow}>{copy.studio.title}</SectionTitle><p>{copy.studio.text}</p></div>
    <div className="studio-collage"><ImageReveal src={media.studio} alt={copy.studio.images[0]} className="studio-wide" /><ImageReveal src={media.manicure} alt={copy.studio.images[1]} className="studio-detail" /><ImageReveal src={media.cherry} alt={copy.studio.images[2]} className="studio-portrait" /></div>
    <p className="asset-note">{copy.studio.demoNote}</p>
  </Container></section>;
}
