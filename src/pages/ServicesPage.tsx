import { motion } from 'framer-motion';
import { PageHero } from '../components/ui/PageHero';
import { CTABanner } from '../components/ui/CTABanner';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { Button } from '../components/ui/Button';
import { SERVICES, PRICING_PLANS } from '@/data';
import type { ServiceItem, PricingPlan } from '@/types';
import styles from './ServicesPage.module.css';

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <motion.article
      className={styles.serviceCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
      data-hover
    >
      <i className={`fas ${service.icon} ${styles.serviceIcon}`} />
      <h3>{service.title}</h3>
      <p className={styles.serviceDesc}>{service.description}</p>
      <ul className={styles.features}>
        {service.features?.map((f) => (
          <li key={f}>
            <i className="fas fa-check" /> {f}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  return (
    <motion.div
      className={`${styles.plan} ${plan.featured ? styles.featuredPlan : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      data-hover
    >
      {plan.featured && <span className={styles.ribbon}>الأكثر طلباً</span>}
      <h3 className={styles.planName}>{plan.name}</h3>
      <div className={styles.price}>
        <span className={styles.amount}>{plan.price}</span>
        <span className={styles.period}>{plan.period}</span>
      </div>
      <p className={styles.planDesc}>{plan.description}</p>
      <ul className={styles.planFeatures}>
        {plan.features.map((f) => (
          <li key={f}>
            <i className="fas fa-check" /> {f}
          </li>
        ))}
      </ul>
      <Button to="/contact" variant={plan.featured ? 'primary' : 'outline'} className={styles.planBtn}>
        اطلب الآن
      </Button>
    </motion.div>
  );
}

export function ServicesPage() {
  return (
    <div className={styles.page}>
      <PageHero
        crumb="خدماتي"
        subtitle="Services"
        title="خدمات تصوير فاخرة"
        description="باقات شاملة تغطي كل احتياجاتك البصرية — من جلسات الأزياء الفردية إلى الحملات الإعلانية المتكاملة، بنفس المعايير الاحترافية."
      />

      {/* Services grid */}
      <section className={styles.section}>
        <SectionHeader subtitle="What I Offer" title="ماذا أقدّم" />
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.section}>
        <SectionHeader subtitle="How We Work" title="رحلتك معنا" />
        <Reveal>
          <ProcessTimeline />
        </Reveal>
      </section>

      {/* Pricing */}
      <section className={styles.section}>
        <SectionHeader subtitle="Pricing" title="باقات وأسعار" />
        <div className={styles.pricingGrid}>
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </section>

      <CTABanner
        title="جاهز لبدء مشروعك؟"
        description="تواصل معنا اليوم وحصل على استشارة مجانية وعرض سعر مخصص يناسب احتياجك."
        primaryText="تواصل معنا"
        primaryTo="/contact"
        secondaryText="شاهد أعمالي"
        secondaryTo="/works"
      />
    </div>
  );
}
