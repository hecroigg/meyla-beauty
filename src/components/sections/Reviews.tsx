import { business } from '../../data/content';
import { reviews } from '../../data/reviews';
import type { Copy, Locale } from '../../i18n';
import { Container } from '../ui/Container';

export function Reviews({ copy, locale }: { copy: Copy; locale: Locale }) {
  return <section className="reviews section" id="reviews"><Container>
    <div className="reviews-score"><p className="eyebrow">{copy.reviews.eyebrow}</p><strong>{business.googleRating}</strong><div aria-label={copy.reviews.stars}>★★★★<span>★</span></div><p>{copy.reviews.count}<br /><small>{copy.reviews.source}</small></p></div>
    <div className="review-content"><h2>{copy.reviews.title}</h2><div className="review-grid">{reviews.map((review) => <blockquote key={review.author}><div aria-hidden="true">★★★★★</div><p>{review[locale]}</p><cite>{review.author} · Google</cite></blockquote>)}</div><p className="review-source">{copy.reviews.verified}</p></div>
  </Container></section>;
}
