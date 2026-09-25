import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' as const },
  },
};

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.subtitle} variants={itemVariants}>
          Fashion Photographer
        </motion.p>

        <motion.h1 className={styles.title} variants={itemVariants}>
          ألتقط <span className={styles.highlight}>الأناقة</span>
          <br />
          في كل لقطة
        </motion.h1>

        <motion.p className={styles.description} variants={itemVariants}>
          مصور أزياء محترف متخصص في تصوير المجموعات الفاخرة، الموديلز،
          والإعلانات التجارية. أحول رؤيتك الإبداعية إلى صور تروي قصة وتترك
          أثراً لا يُنسى.
        </motion.p>

        <motion.div className={styles.buttons} variants={itemVariants}>
          <Button to="/works">
            <i className="fas fa-images" /> شاهد أعمالي
          </Button>
          <Button to="/contact" variant="outline">
            احجز جلسة
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>اسحب للأسفل</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
