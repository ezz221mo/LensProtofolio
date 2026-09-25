import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return next;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className={styles.loader}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AHMED LENS
          </motion.div>
          <div className={styles.bar}>
            <motion.div
              className={styles.progress}
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
