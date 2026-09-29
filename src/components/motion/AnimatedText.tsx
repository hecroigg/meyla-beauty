import type { PropsWithChildren } from 'react';
import { useReveal } from '../../lib/useReveal';

export function AnimatedText({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return <div ref={ref} className={`reveal-text ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}
