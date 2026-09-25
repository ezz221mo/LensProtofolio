import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const QUICK_LINKS = [
  { id: 1, label: 'الرئيسية', href: '/' },
  { id: 2, label: 'أعمالي', href: '/works' },
  { id: 3, label: 'خدماتي', href: '/services' },
  { id: 4, label: 'من أنا', href: '/about' },
];

const SERVICES_LINKS = [
  { id: 1, label: 'تصوير الأزياء', href: '/services' },
  { id: 2, label: 'إعلانات تجارية', href: '/services' },
  { id: 3, label: 'ريتوش احترافي', href: '/services' },
  { id: 4, label: 'محتوى سوشال', href: '/services' },
];

const CONTACT_INFO = [
  { id: 1, label: 'hello@ahmedlens.com', href: 'mailto:hello@ahmedlens.com' },
  { id: 2, label: '+966 50 123 4567', href: 'tel:+966501234567' },
  { id: 3, label: 'الرياض، السعودية', href: '/contact' },
];

const SOCIALS = [
  { id: 1, icon: 'fa-instagram', href: '#' },
  { id: 2, icon: 'fa-behance', href: '#' },
  { id: 3, icon: 'fa-pinterest', href: '#' },
  { id: 4, icon: 'fa-linkedin-in', href: '#' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <h2>
            AHMED <span>LENS</span>
          </h2>
          <p>
            مصور أزياء محترف يسعى لإبراز الجمال والأناقة في كل لقطة. دعنا
            نصنع معاً صوراً تروي قصتك.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((social) => (
              <a key={social.id} href={social.href} className={styles.social} data-hover>
                <i className={`fab ${social.icon}`} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h4>روابط سريعة</h4>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4>الخدمات</h4>
          <ul>
            {SERVICES_LINKS.map((link) => (
              <li key={link.id}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h4>تواصل</h4>
          <ul>
            {CONTACT_INFO.map((info) => (
              <li key={info.id}>
                <a href={info.href}>{info.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Ahmed Lens. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
