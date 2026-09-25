import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { CTABanner } from '../components/ui/CTABanner';
import { SectionHeader } from '../components/SectionHeader';
import { About } from '../components/About';
import { VALUES_ITEMS, TIMELINE_EVENTS, AWARDS } from '@/data';
import type { TimelineEvent, AwardItem, ValueItem } from '@/types';
import styles from './AboutPage.module.css';

function ValueCard({ value }: { value: ValueItem }) {
  return (
    <motion.div
      className={styles.valueCard}
      whileHover={{ y: -8 }}
      data-hover
    >
      <i className={`fas ${value.icon} ${styles.valueIcon}`} />
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </motion.div>
  );
}

function TimelineCard({ event }: { event: TimelineEvent }) {
  return (
    <motion.div
      className={styles.timelineItem}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      data-hover
    >
      <span className={styles.timelinePeriod}>{event.period}</span>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </motion.div>
  );
}

function AwardCard({ award }: { award: AwardItem }) {
  return (
    <motion.div
      className={styles.awardCard}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      data-hover
    >
      <i className="fas fa-trophy" />
      <span className={styles.awardYear}>{award.year}</span>
      <h3>{award.title}</h3>
      <p>{award.description}</p>
    </motion.div>
  );
}

export function AboutPage() {
  return (
    <div className={styles.page}>
      <PageHero
        crumb="من أنا"
        subtitle="About"
        title="أحمد لينس"
        description="مصور أزياء ومبدع بصري جمع بين الشغف بالضوء والتفاصيل والاحتراف في السرد البصري على مدى أكثر من عقد."
      />

      {/* Reuse the flagship about/story section */}
      <About />

      {/* Values */}
      <section className={styles.section}>
        <SectionHeader subtitle="Values" title="قيمي في العمل" />
        <div className={styles.valuesGrid}>
          {VALUES_ITEMS.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className={`${styles.section} ${styles.timelineSection}`}>
        <SectionHeader subtitle="Journey" title="مسيرتي المهنية" />
        <div className={styles.timeline}>
          {TIMELINE_EVENTS.map((event) => (
            <TimelineCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className={styles.section}>
        <SectionHeader subtitle="Recognition" title="جوائز وتكريمات" />
        <div className={styles.awardsGrid}>
          {AWARDS.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </section>

      <CTABanner
        title="لنخلق قصة تعكس هويتك"
        description="أنا هنا لأحوّل رؤيتك إلى صور تروي قصتك وتترك أثراً."
        primaryText="ابدأ الحديث"
        primaryTo="/contact"
        secondaryText="أعمالي"
        secondaryTo="/works"
      />
    </div>
  );
}
