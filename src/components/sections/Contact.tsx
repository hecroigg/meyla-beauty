import { business } from '../../data/content';
import type { Copy } from '../../i18n';
import { BookingCTA } from '../ui/BookingCTA';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Contact({ copy }: { copy: Copy }) {
  return <section className="contact section" id="contact"><Container>
    <p className="eyebrow">{copy.booking.eyebrow}</p>
    <h2><span>{copy.booking.titleA}</span><span>{copy.booking.titleB}</span></h2>
    <div className="contact-lower"><div><p className="contact-intro">{copy.booking.intro}</p><div className="contact-actions"><BookingCTA copy={copy} variant="light" /><Button href={business.mapsUrl} target="_blank" rel="noreferrer" variant="line">{copy.common.directions}</Button></div></div>
      <dl><div><dt>{copy.booking.addressLabel}</dt><dd>{business.name}<br />{business.street}<br />{business.postalCity}</dd></div><div><dt>{copy.booking.phoneLabel}</dt><dd><a href={business.phoneHref}>{business.phoneDisplay}</a></dd></div><div><dt>{copy.booking.hoursLabel}</dt><dd>{copy.booking.hours.map((line) => <span key={line}>{line}</span>)}</dd></div></dl>
    </div>
  </Container></section>;
}
