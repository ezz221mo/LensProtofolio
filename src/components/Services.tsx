import { motion } from 'framer-motion';
import { useRef } from 'react';
import type * as React from 'react';
import { SectionHeader } from './SectionHeader';
import { SERVICES } from '@/data';
import type { ServiceItem } from '@/types';
import styles from './Services.module.css';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      data-hover
    >
      <i className={`fas ${service.icon} ${styles.icon}`} />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className={styles.section} id="services">
      <SectionHeader subtitle="Services" title="خدماتي" />

      <div className={styles.grid}>
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
