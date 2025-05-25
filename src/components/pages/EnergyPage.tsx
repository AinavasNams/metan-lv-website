import { useTranslation } from 'react-i18next';
import SEOOptimization from '../SEOOptimization';
import ContactForm from '../ContactForm';

const EnergyPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOOptimization 
        title={t('energy.seo.title', 'Биометан для энергетических компаний | CH₄ Future Platform')}
        description={t('energy.seo.description', 'Поставки биометана для энергетических компаний. Экологически чистое топливо с низким углеродным следом для устойчивого развития.')}
        keywords={t('energy.seo.keywords', 'биометан, энергетические компании, возобновляемая энергия, экологически чистое топливо, низкий углеродный след')}
      />
      
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              {t('energy.hero.title', 'Биометан для энергетических компаний')}
            </h1>
            <p className="text-xl mb-8">
              {t('energy.hero.subtitle', 'Экологически чистое топливо с низким углеродным следом для устойчивого развития')}
            </p>
            <a href="#contact" className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block">
              {t('energy.hero.cta', 'Запросить предложение')}
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">
                {t('energy.about.title', 'Преимущества биометана для энергетического сектора')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('energy.about.paragraph1', 'Биометан — это возобновляемый аналог природного газа, который производится из органических отходов и может быть интегрирован в существующую газовую инфраструктуру без дополнительных модификаций.')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('energy.about.paragraph2', 'Для энергетических компаний биометан представляет собой стратегически важный ресурс, позволяющий диверсифицировать источники энергии и снизить зависимость от ископаемого топлива.')}
              </p>
              <p className="text-gray-700">
                {t('energy.about.paragraph3', 'Использование биометана помогает энергетическим компаниям соответствовать экологическим нормам и требованиям по снижению выбросов парниковых газов, а также улучшает их имидж как социально ответственных предприятий.')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/energy-about.jpg" 
                alt={t('energy.about.imageAlt', 'Биометан для энергетических компаний')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('energy.benefits.title', 'Почему энергетические компании выбирают биометан')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('energy.benefits.benefit1.title', 'Соответствие экологическим нормам')}
              </h3>
              <p className="text-gray-600">
                {t('energy.benefits.benefit1.description', 'Биометан помогает соответствовать строгим экологическим требованиям и нормам по снижению выбросов парниковых газов, установленным на национальном и международном уровнях.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('energy.benefits.benefit2.title', 'Диверсификация источников энергии')}
              </h3>
              <p className="text-gray-600">
                {t('energy.benefits.benefit2.description', 'Включение биометана в энергетический портфель позволяет снизить зависимость от традиционных источников энергии и повысить энергетическую безопасность.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('energy.benefits.benefit3.title', 'Экономические стимулы')}
              </h3>
              <p className="text-gray-600">
                {t('energy.benefits.benefit3.description', 'Использование биометана открывает доступ к субсидиям, налоговым льготам и CO₂-кредитам, что повышает экономическую эффективность энергетических проектов.')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">
                {t('energy.specs.title', 'Технические характеристики нашего биометана')}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('energy.specs.spec1', 'Содержание метана: 95-98%')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('energy.specs.spec2', 'Энергетическая ценность: 9,5-10,5 кВт·ч/м³')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('energy.specs.spec3', 'Объем производства: 550 м³/ч')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('energy.specs.spec4', 'Соответствие стандарту EN 16723-1 (биометан для закачки в газовые сети)')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('energy.specs.spec5', 'Возможность поставки в сжатом (CNG) или сжиженном (LNG) виде')}
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/energy-specs.jpg" 
                alt={t('energy.specs.imageAlt', 'Технические характеристики биометана')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('energy.solutions.title', 'Наши решения для энергетических компаний')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/energy-solution1.jpg" 
                alt={t('energy.solutions.solution1.imageAlt', 'Поставки биометана')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t('energy.solutions.solution1.title', 'Поставки биометана')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('energy.solutions.solution1.description', 'Регулярные поставки биометана для энергетических компаний с гарантированным качеством и объемом. Возможность заключения долгосрочных контрактов с фиксированной ценой.')}
                </p>
                <a href="#contact" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  {t('energy.solutions.learnMore', 'Узнать больше')} →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/energy-solution2.jpg" 
                alt={t('energy.solutions.solution2.imageAlt', 'Интеграция в газовые сети')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t('energy.solutions.solution2.title', 'Интеграция в газовые сети')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('energy.solutions.solution2.description', 'Техническая поддержка по интеграции биометана в существующие газовые сети. Консультации по нормативным требованиям и техническим аспектам.')}
                </p>
                <a href="#contact" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  {t('energy.solutions.learnMore', 'Узнать больше')} →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/energy-solution3.jpg" 
                alt={t('energy.solutions.solution3.imageAlt', 'Сертификаты происхождения')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t('energy.solutions.solution3.title', 'Сертификаты происхождения')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('energy.solutions.solution3.description', 'Предоставление европейских сертификатов происхождения биометана, подтверждающих его экологические характеристики и соответствие стандартам.')}
                </p>
                <a href="#contact" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  {t('energy.solutions.learnMore', 'Узнать больше')} →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/images/energy-solution4.jpg" 
                alt={t('energy.solutions.solution4.imageAlt', 'Консалтинг по CO₂-кредитам')} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t('energy.solutions.solution4.title', 'Консалтинг по CO₂-кредитам')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('energy.solutions.solution4.description', 'Консультации по получению и использованию углеродных кредитов при использовании биометана. Помощь в монетизации экологических преимуществ.')}
                </p>
                <a href="#contact" className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  {t('energy.solutions.learnMore', 'Узнать больше')} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('energy.cases.title', 'Примеры успешного сотрудничества')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img 
                  src="/images/energy-case1.jpg" 
                  alt={t('energy.cases.case1.imageAlt', 'Пример сотрудничества 1')} 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('energy.cases.case1.title', 'Latvijas Gāze')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('energy.cases.case1.description', 'Поставка биометана для крупнейшей газовой компании Латвии с интеграцией в национальную газовую сеть.')}
              </p>
              <div className="text-sm text-gray-500">
                {t('energy.cases.case1.result', 'Результат: снижение углеродного следа на 15% и соответствие экологическим нормам ЕС.')}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img 
                  src="/images/energy-case2.jpg" 
                  alt={t('energy.cases.case2.imageAlt', 'Пример сотрудничества 2')} 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('energy.cases.case2.title', 'Eesti Energia')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('energy.cases.case2.description', 'Долгосрочный контракт на поставку биометана для диверсификации энергетического портфеля эстонской компании.')}
              </p>
              <div className="text-sm text-gray-500">
                {t('energy.cases.case2.result', 'Результат: увеличение доли возобновляемых источников энергии на 8% и получение дополнительных CO₂-кредитов.')}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <img 
                  src="/images/energy-case3.jpg" 
                  alt={t('energy.cases.case3.imageAlt', 'Пример сотрудничества 3')} 
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('energy.cases.case3.title', 'Fortum')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('energy.cases.case3.description', 'Поставка биометана для финской энергетической компании с использованием в когенерационных установках.')}
              </p>
              <div className="text-sm text-gray-500">
                {t('energy.cases.case3.result', 'Результат: повышение эффективности производства энергии и улучшение экологических показателей.')}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('energy.contact.title', 'Заинтересованы в поставках биометана?')}
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t('energy.contact.subtitle', 'Свяжитесь с нами, чтобы обсудить возможности сотрудничества и получить индивидуальное предложение')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default EnergyPage;
