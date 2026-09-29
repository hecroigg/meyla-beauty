import type { Copy } from '../../i18n';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function Services({ copy }: { copy: Copy }) {
  return <section className="services section" id="services"><Container>
    <div className="services-head"><SectionTitle eyebrow={copy.services.eyebrow}>{copy.services.title}</SectionTitle><p>{copy.services.intro}</p></div>
    <div className="service-list">{copy.services.items.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><i aria-hidden="true">↗</i></article>)}</div>
  </Container></section>;
}
