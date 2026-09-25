import { BRANDS } from '@/data';
import styles from './Brands.module.css';

/** Animated infinite marquee of client / brand names. */
export function Brands() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className={styles.section} aria-label="أبرز عملائنا">
      <div className={styles.hint}>نسعد بالتعاون مع أبرز العلامات</div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {doubled.map((brand, i) => (
            <span key={`${brand.id}-${i}`} className={styles.brand}>
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
