import { motion } from 'framer-motion';
import { Button } from './Button';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  title: string;
  description?: string;
  primaryText: string;
  primaryTo: string;
  secondaryText?: string;
  secondaryTo?: string;
}

/** Reusable call-to-action band used at the bottom of pages. */
export function CTABanner({
  title,
  description,
  primaryText,
  primaryTo,
  secondaryText,
  secondaryTo = '/contact',
}: CTABannerProps) {
  return (
    <motion.section
      className={styles.banner}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        <div className={styles.actions}>
          <Button to={primaryTo}>{primaryText}</Button>
          {secondaryText && <Button to={secondaryTo} variant="outline">{secondaryText}</Button>}
        </div>
      </div>
    </motion.section>
  );
}
