import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './PageHero.module.css';

interface PageHeroProps {
  subtitle: string;
  title: string;
  description?: string;
  crumb?: string;
}

/** Consistent banner for interior pages, styled like the hero without full-screen. */
export function PageHero({ subtitle, title, description, crumb }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.p
          className={styles.crumb}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">الرئيسية</Link>
          {crumb && (
            <>
              <span className={styles.sep}>/</span>
              <span>{crumb}</span>
            </>
          )}
        </motion.p>

        <div className={styles.center}>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              {description}
            </motion.p>
          )}

          <motion.div
            className={styles.line}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}
