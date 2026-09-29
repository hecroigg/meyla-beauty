import { useReveal } from '../../lib/useReveal';

export function ImageReveal({ src, alt, className = '', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const { ref, visible } = useReveal<HTMLElement>();
  return <figure ref={ref} className={`image-reveal ${visible ? 'is-visible' : ''} ${className}`}>
    <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
  </figure>;
}
