import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' as const },
  }),
};

export function SectionHeader({ subtitle, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <motion.p
        className={styles.subtitle}
        custom={0}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        className={styles.title}
        custom={1}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={styles.line}
        custom={2}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      />
    </div>
  );
}
