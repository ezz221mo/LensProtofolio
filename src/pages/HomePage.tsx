import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Brands } from '../components/Brands';
import styles from './HomePage.module.css';

/**
 * Home = the flagship landing page. Composes the hero and the core sections
 * so it stays the recognizable showcase, with a client strip for extra polish.
 */
export function HomePage() {
  return (
    <div className={styles.home}>
      <Hero />
      <Brands />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
