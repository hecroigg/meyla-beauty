import { business } from '../../data/content';
import type { Copy } from '../../i18n';
import { Container } from '../ui/Container';

export function Footer({ copy }: { copy: Copy }) {
  return <footer><Container className="footer-grid">
    <a className="wordmark wordmark--footer" href="#top"><b>MEYLA</b><span>BEAUTY</span></a>
    <p>{copy.footer.tagline}</p>
    <p className="footer-legal">{copy.footer.legalNote}</p>
    <p>© {new Date().getFullYear()} {copy.footer.copyright}</p>
    <a href={business.referenceUrl} target="_blank" rel="noreferrer">Mannheim · DE ↗</a>
  </Container></footer>;
}
