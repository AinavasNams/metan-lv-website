import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './lib/i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import FatSeparatorsPage from './components/pages/FatSeparatorsPage';
import SewerCleaningPage from './components/pages/SewerCleaningPage';
import BiomethaneProductionPage from './components/pages/BiomethaneProductionPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import MunicipalitiesPage from './components/pages/MunicipalitiesPage';
import EnergyPage from './components/pages/EnergyPage';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  useEffect(() => {
    // Initialize any global scripts or tracking here
  }, []);

  return (
    <Router basename="/metan-lv-website">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fat-separators" element={<FatSeparatorsPage />} />
            <Route path="/sewer-cleaning" element={<SewerCleaningPage />} />
            <Route path="/biomethane-production" element={<BiomethaneProductionPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/municipalities" element={<MunicipalitiesPage />} />
            <Route path="/energy-companies" element={<EnergyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
