import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Metan.lv" className="h-10" />
            <span className="ml-2 text-xl font-bold text-blue-900">Metan.lv</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link to="/fat-separators" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('common.menu.fatSeparators')}
              </Link>
              <Link to="/sewer-cleaning" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('common.menu.sewerCleaning')}
              </Link>
              <Link to="/biomethane-production" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('common.menu.biomethane')}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('common.menu.about')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                {t('common.menu.contact')}
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                {t('common.menu.getQuote')}
              </a>
            </div>
          </div>
          
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/fat-separators" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.menu.fatSeparators')}
              </Link>
              <Link 
                to="/sewer-cleaning" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.menu.sewerCleaning')}
              </Link>
              <Link 
                to="/biomethane-production" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.menu.biomethane')}
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.menu.about')}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.menu.contact')}
              </Link>
            </nav>
            
            <div className="mt-6 flex flex-col space-y-4">
              <LanguageSwitcher />
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.menu.getQuote')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
