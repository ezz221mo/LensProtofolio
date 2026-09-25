import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMemo, useState } from 'react';
import type * as React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { CTABanner } from '../components/ui/CTABanner';
import { Reveal } from '../components/ui/Reveal';
import { PORTFOLIO_ITEMS, WORK_CATEGORIES } from '@/data';
import type { PortfolioItem } from '@/types';
import styles from './WorksPage.module.css';

function WorkCard({
  item,
  onOpen,
  index,
}: {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
  index: number;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]));
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]));

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.45, delay: index * 0.03 }}
      className={styles.card}
      onClick={() => onOpen(item)}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ perspective: 1000 }}
      data-hover
    >
      <motion.div className={styles.cardInner} style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <img src={item.image} alt={item.alt} />
        <div className={styles.overlay}>
          <span className={styles.category}>
            {WORK_CATEGORIES.find((c) => c.id === item.category)?.label ?? item.category}
          </span>
          <h3 className={styles.title}>{item.title}</h3>
          <span className={styles.view}>
            <i className="fas fa-expand" /> عرض
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({ item, onClose }: { item: PortfolioItem | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className={styles.lightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={styles.lightboxInner}
            initial={{ scale: 0.85, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.85, y: 30 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={item.image} alt={item.alt} />
            <div className={styles.lightboxMeta}>
              <span className={styles.category}>
                {WORK_CATEGORIES.find((c) => c.id === item.category)?.label ?? item.category}
              </span>
              <h3>{item.title}</h3>
            </div>
            <button className={styles.close} onClick={onClose} aria-label="إغلاق">
              <i className="fas fa-times" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function WorksPage() {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(
    () =>
      active === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((item) => item.category === active),
    [active],
  );

  return (
    <div className={styles.page}>
      <PageHero
        crumb="أعمالي"
        subtitle="Portfolio"
        title="معرض الأعمال"
        description="مجموعة مختارة من أفضل جلسات تصوير الأزياء والإعلانات التي تنفّذها بشغف واهتمام بتفاصيل كل لقطة."
      />

      {/* Filter bar */}
      <Reveal>
        <div className={styles.filters}>
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${active === cat.id ? styles.activeFilter : ''}`}
              onClick={() => setActive(cat.id)}
              data-hover
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid — keyed container re-animates when the category changes */}
      <motion.div
        className={styles.grid}
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {filtered.map((item, index) => (
          <WorkCard key={`${active}-${item.id}`} item={item} onOpen={setSelected} index={index} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className={styles.empty}>
          <i className="fas fa-camera" />
          <p>لا توجد أعمال في هذا التصنيف حالياً.</p>
        </div>
      )}

      <CTABanner
        title="أعجبك ما رأيت؟"
        description="لننشئ معاً عملاً يليق بعلامتك. تواصل معنا لبدء مشروعك القادم."
        primaryText="ابدأ مشروعك"
        primaryTo="/contact"
        secondaryText="استعرض الخدمات"
        secondaryTo="/services"
      />

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
