import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '@/data';
import styles from './Navbar.module.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  useEffect(() => {
    const update = scrollY.on('change', (y) => setScrolled(y > 60));
    return () => update();
  }, [scrollY]);

  // Close the menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Link to="/" className={styles.logo}>
        <i className={`fas fa-camera-retro ${styles.logoIcon}`} />
        AHMED <span>LENS</span>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        {NAV_LINKS.map((link) => (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + NAV_LINKS.indexOf(link) * 0.1 }}
          >
            <NavLink
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              {link.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      <button
        className={styles.toggle}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.open : ''} />
        <span className={menuOpen ? styles.open : ''} />
        <span className={menuOpen ? styles.open : ''} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
