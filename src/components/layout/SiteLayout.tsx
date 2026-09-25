import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { ScrollToTop } from './ScrollToTop';

/**
 * Persistent chrome (navbar + footer) with animated page transitions.
 * The navbar/footer mount once; only the routed page content transitions
 * between routes, which keeps navigation stable and polished.
 */
export function SiteLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
