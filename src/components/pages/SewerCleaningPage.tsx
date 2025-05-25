import { useTranslation } from 'react-i18next';
import SEOOptimization from '../SEOOptimization';
import ContactForm from '../ContactForm';

const SewerCleaningPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOOptimization
        title={t('sewerCleaning.seo.title', 'Промывка канализации от жиров высоким давлением | CH₄ Future Platform')}
        description={t('sewerCleaning.seo.description', 'Эффективное удаление жировых отложений в трубах с использованием современного оборудования высокого давления. Устраняем засоры любой сложности без повреждения коммуникаций.')}
        keywords={t('sewerCleaning.seo.keywords', 'промывка канализации, очистка труб от жира, гидродинамическая промывка, удаление засоров, жировые отложения, высокое давление, Латвия')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('sewerCleaning.hero.title', 'Промывка канализации от жиров высоким давлением')}
              </h1>
              <p className="text-xl mb-8">
                {t('sewerCleaning.hero.subtitle', 'Эффективное удаление жировых отложений в трубах с использованием современного оборудования. Устраняем засоры любой сложности без повреждения коммуникаций.')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#emergency" className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center">
                  {t('sewerCleaning.hero.emergencyButton', 'Экстренный вызов')}
                </a>
                <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-700 transition-colors text-center">
                  {t('sewerCleaning.hero.orderButton', 'Заказать услугу')}
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/sewer-cleaning-hero.jpg" 
                alt={t('sewerCleaning.hero.imageAlt', 'Промывка канализации')} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Section */}
      <section id="emergency" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-red-600">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-red-600">
                  {t('sewerCleaning.emergency.title', 'Экстренная помощь при засорах')}
                </h2>
                <p className="text-xl mb-6">
                  {t('sewerCleaning.emergency.subtitle', 'Оперативный выезд специалистов в течение 1-2 часов в любое время суток, включая выходные и праздничные дни.')}
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t('sewerCleaning.emergency.feature1', 'Круглосуточная работа без выходных')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{t('sewerCleaning.emergency.feature2', 'Быстрое устранение аварийных ситуаций')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>{t('sewerCleaning.emergency.feature3', 'Гарантия на выполненные работы')}</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">+37120044461</div>
                <p className="text-gray-600 mb-4">{t('sewerCleaning.emergency.available', 'Круглосуточная аварийная служба')}</p>
                <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors w-full">
                  {t('sewerCleaning.emergency.callButton', 'Вызвать специалиста')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('sewerCleaning.contact.title', 'Заказать услугу промывки канализации')}
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default SewerCleaningPage;
