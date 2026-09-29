import { AnimatedText } from '../motion/AnimatedText';

export function SectionTitle({ eyebrow, children, className = '' }: { eyebrow: string; children: React.ReactNode; className?: string }) {
  return <div className={`section-title ${className}`}><p className="eyebrow">{eyebrow}</p><AnimatedText><h2>{children}</h2></AnimatedText></div>;
}
