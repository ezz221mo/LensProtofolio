import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { Contact } from '../components/Contact';
import { FAQ_ITEMS } from '@/data';
import type { FaqItem } from '@/types';
import styles from './ContactPage.module.css';

function FaqItemRow({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button className={styles.faqQuestion} onClick={() => setOpen((o) => !o)} data-hover>
        <span>{item.question}</span>
        <i className={`fas ${open ? 'fa-minus' : 'fa-plus'} ${styles.faqIcon}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ContactPage() {
  return (
    <div className={styles.page}>
      <PageHero
        crumb="تواصل"
        subtitle="Contact"
        title="لنبدأ الحديث"
        description="أخبرني عن مشروعك، أسئلتك، أو أفكارك — وأنا هنا لمساعدتك في تحويلها إلى واقع بصري مميز."
      />

      {/* Reuse the flagship contact section (info + form) */}
      <Contact />

      {/* FAQ */}
      <section className={styles.section}>
        <SectionHeader subtitle="FAQ" title="الأسئلة الشائعة" />
        <Reveal>
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, index) => (
              <FaqItemRow key={item.id} item={item} index={index} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Booking strip */}
      <Reveal>
        <div className={styles.booking}>
          <div className={styles.bookingIcon}>
            <i className="fas fa-calendar-check" />
          </div>
          <div className={styles.bookingText}>
            <h3>جاهز لحجز جلسة تصوير؟</h3>
            <p>
              احجز موعدك الآن وتأخذ أولوية في جدولنا، وسنؤكد لك التفاصيل خلال
              يوم عمل واحد.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
