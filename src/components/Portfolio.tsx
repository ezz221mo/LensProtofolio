import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type * as React from 'react';
import { SectionHeader } from './SectionHeader';
import { Button } from './ui/Button';
import { PORTFOLIO_ITEMS } from '@/data';
import type { PortfolioItem } from '@/types';
import styles from './Portfolio.module.css';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 80, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      data-hover
    >
      <motion.div
        className={styles.imageInner}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        <img src={item.image} alt={item.alt} />
        <div className={styles.overlay}>
          <span className={styles.category}>{item.category}</span>
          <h3 className={styles.titleP}>{item.title}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <SectionHeader subtitle="Portfolio" title="معرض الأعمال" />

      <div className={styles.grid}>
        {PORTFOLIO_ITEMS.slice(0, 6).map((item, index) => (
          <PortfolioCard key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className={styles.more}>
        <Button to="/works">استعرض كل الأعمال</Button>
      </div>
    </section>
  );
}
