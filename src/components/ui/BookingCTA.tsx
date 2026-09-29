import { business } from '../../data/content';
import type { Copy } from '../../i18n';
import { Button } from './Button';

export function BookingCTA({ copy, variant = 'dark' }: { copy: Copy; variant?: 'dark' | 'light' }) {
  return <Button href={business.bookingUrl} target="_blank" rel="noreferrer" variant={variant} aria-label={`${copy.common.book}. ${copy.common.external}`}>{copy.common.book}</Button>;
}
