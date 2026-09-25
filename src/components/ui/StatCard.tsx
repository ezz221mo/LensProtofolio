import { useCounter } from '@/hooks/useCounter';
import styles from './StatCard.module.css';

interface StatCardProps {
  target: number;
  suffix?: string;
  label: string;
}

/** Animated statistic card (counts up when scrolled into view). */
export function StatCard({ target, suffix = '', label }: StatCardProps) {
  const { ref, value } = useCounter<HTMLDivElement>(target);

  return (
    <div className={styles.card} data-hover ref={ref}>
      <span className={styles.number}>
        {value}
        {suffix}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
