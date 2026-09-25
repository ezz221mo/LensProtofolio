import { motion } from 'framer-motion';
import { useState } from 'react';
import type * as React from 'react';
import { SectionHeader } from './SectionHeader';
import styles from './Contact.module.css';

const CONTACT_DETAILS = [
  {
    id: 1,
    icon: 'fa-envelope',
    label: 'البريد الإلكتروني',
    value: 'hello@ahmedlens.com',
    href: 'mailto:hello@ahmedlens.com',
  },
  {
    id: 2,
    icon: 'fa-phone',
    label: 'الهاتف',
    value: '+966 50 123 4567',
    href: 'tel:+966501234567',
  },
  {
    id: 3,
    icon: 'fa-map-marker-alt',
    label: 'الموقع',
    value: 'الرياض، المملكة العربية السعودية',
    href: '#',
  },
];

const SOCIALS = [
  { id: 1, icon: 'fa-instagram', href: '#' },
  { id: 2, icon: 'fa-behance', href: '#' },
  { id: 3, icon: 'fa-pinterest', href: '#' },
  { id: 4, icon: 'fa-linkedin-in', href: '#' },
];

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('success');
    e.currentTarget.reset();
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section className={styles.section} id="contact">
      <SectionHeader subtitle="Contact" title="تواصل معي" />

      <div className={styles.grid}>
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h3>لنبدأ مشروعاً فنياً مميزاً</h3>
          <p>
            هل لديك فكرة أو مشروع تصويري؟ أنا هنا لتحويل رؤيتك إلى واقع.
            تواصل معي الآن للحصول على استشارة مجانية وعرض سعر مخصص.
          </p>

          <div className={styles.details}>
            {CONTACT_DETAILS.map((detail) => (
              <a
                key={detail.id}
                className={styles.detail}
                href={detail.href}
                data-hover
              >
                <i className={`fas ${detail.icon}`} />
                <div>
                  <strong>{detail.label}</strong>
                  <p>{detail.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.socials}>
            {SOCIALS.map((social) => (
              <a key={social.id} href={social.href} className={styles.social} data-hover>
                <i className={`fab ${social.icon}`} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name">الاسم الكامل</label>
            <input id="name" type="text" placeholder="أدخل اسمك" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">البريد الإلكتروني</label>
            <input id="email" type="email" placeholder="أدخل بريدك" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="service">نوع الخدمة</label>
            <select id="service" required defaultValue="">
              <option value="" disabled>
                اختر الخدمة
              </option>
              <option value="fashion">تصوير أزياء</option>
              <option value="commercial">إعلان تجاري</option>
              <option value="editorial">تحريري</option>
              <option value="other">أخرى</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">تفاصيل المشروع</label>
            <textarea
              id="message"
              placeholder="أخبرني أكثر عن مشروعك..."
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            {status === 'success' ? 'تم إرسال الطلب بنجاح!' : 'إرسال الطلب'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
