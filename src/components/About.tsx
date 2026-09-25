import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type * as React from 'react';
import { SectionHeader } from './SectionHeader';
import { STATS } from '@/data';
import { useCounter } from '@/hooks/useCounter';
import styles from './About.module.css';

interface CounterStatProps {
  target: number;
  label: string;
}

function CounterStat({ target, label }: CounterStatProps) {
  const { ref, value } = useCounter<HTMLSpanElement>(target);

  return (
    <div className={styles.statItem} data-hover>
      <span className={styles.statNumber} ref={ref}>
        {value}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]));
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]));

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
    <section className={styles.section}>
      <SectionHeader subtitle="About Me" title="من أنا" />

      <div className={styles.grid}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h3 className={styles.heading}>
            أحمد لينس
            <br />
            مصور أزياء ومبدع بصري
          </h3>
          <p>
            أعمل في مجال تصوير الأزياء منذ أكثر من 10 سنوات، وقد تعاونت مع
            أبرز الماركات العالمية والمجلات المتخصصة في عالم الموضة والجمال.
          </p>
          <p>
            أؤمن بأن كل صورة يجب أن تحمل روحاً وقصة، لذلك أركز على التفاصيل
            الدقيقة، الإضاءة، والتكوين لإخراج أعمال فنية تبرز جمال المنتج
            والشخصية في آن واحد.
          </p>

          <div className={styles.stats}>
            {STATS.map((stat) => (
              <CounterStat key={stat.id} target={stat.count} label={stat.label} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrap}
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className={styles.imageInner}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          >
            <img
              src="https://images.unsplash.com/photo-1559582800-b7f6bf426431?w=800&q=80&fit=crop"
              alt="Male photographer portrait"
            />
            <div className={styles.frame} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
