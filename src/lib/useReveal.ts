import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const showIfVisible = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * .94 && rect.bottom > 0) setVisible(true);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    observer.observe(node);
    window.addEventListener('scroll', showIfVisible, { passive: true });
    window.addEventListener('resize', showIfVisible);
    const frame = window.requestAnimationFrame(showIfVisible);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', showIfVisible);
      window.removeEventListener('resize', showIfVisible);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, visible };
}
