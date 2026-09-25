import { Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { ThreeBackground } from './components/three/ThreeBackground';
import { SiteLayout } from './components/layout/SiteLayout';
import { HomePage } from './pages/HomePage';
import { WorksPage } from './pages/WorksPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <>
      <Loader />
      <Cursor />
      <ThreeBackground />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
