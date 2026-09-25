import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
  {
    id: 1,
    text: 'أحمد يملك عيناً فنية رائعة. النتائج كانت أجمل مما تصورنا، والتعاون معه كان سلساً وممتعاً.',
    author: 'سارة الخالدية',
    role: 'مديرة التسويق - دار أزياء فاخرة',
  },
  {
    id: 2,
    text: 'احترافية عالية وإبداع لا يتوقف. صور حملتنا الإعلانية تجاوزت كل التوقعات وأبهرت عملاءنا.',
    author: 'خالد المنصور',
    role: 'مدير علامة تجارية للأزياء',
  },
  {
    id: 3,
    text: 'أفضل مصور تعاملت معه. يفهم رؤيتك ويضيف لمساته الخاصة لجعل كل لقطة فنية.',
    author: 'نورة العتيبي',
    role: 'مصممة أزياء',
  },
];

const AUTO_INTERVAL = 6000;

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const item = TESTIMONIALS[current];

  const goTo = (index: number) => setCurrent(index);

  return (
    <section className={styles.section}>
      <SectionHeader subtitle="Testimonials" title="آراء العملاء" />

      <div className={styles.slider}>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            className={styles.item}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.text}>{item.text}</p>
            <p className={styles.author}>{item.author}</p>
            <p className={styles.role}>{item.role}</p>
          </motion.div>
        </AnimatePresence>

        <div className={styles.dots}>
          {TESTIMONIALS.map((t, index) => (
            <button
              key={t.id}
              className={`${styles.dot} ${
                index === current ? styles.activeDot : ''
              }`}
              onClick={() => goTo(index)}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
