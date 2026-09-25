import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { useInView } from 'framer-motion';

interface CounterResult<T extends HTMLElement> {
  ref: RefObject<T>;
  value: number;
}

/**
 * Animates a number from 0 to `target` when the element scrolls into view.
 * Returns a ref to attach to the element and the current animated value.
 * Generic over the element type (span, div, ...).
 */
export function useCounter<T extends HTMLElement>(
  target: number,
  duration = 2000,
): CounterResult<T> {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return { ref, value };
}
