import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Cursor.module.css';

/** Custom animated cursor (only on fine-pointer devices) */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const ringX = useTransform(mouseX, (v) => v);
  const ringY = useTransform(mouseY, (v) => v);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!supportsFinePointer) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [data-hover]',
      ) !== null;
      setHovered(isInteractive);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={`${styles.cursor} ${hovered ? styles.hover : ''}`}
        style={{ x: ringX, y: ringY }}
      />
      <motion.div
        className={styles.follower}
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
