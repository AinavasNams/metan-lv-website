import { useTranslation } from 'react-i18next';
import SEOOptimization from '../SEOOptimization';
import ContactForm from '../ContactForm';

const FatSeparatorsPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOOptimization 
        title={t('fatSeparators.seo.title', 'Очистка жироуловителей | CH₄ Future Platform')}
        description={t('fatSeparators.seo.description', 'Профессиональная очистка жироуловителей для ресторанов, кафе и предприятий общественного питания. Соответствие всем экологическим нормам.')}
        keywords={t('fatSeparators.seo.keywords', 'очистка жироуловителей, обслуживание жироуловителей, утилизация жиров, жироуловители для ресторанов, промывка жироуловителей')}
      />
      
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              {t('fatSeparators.hero.title', 'Профессиональная очистка жироуловителей')}
            </h1>
            <p className="text-xl mb-8">
              {t('fatSeparators.hero.subtitle', 'Регулярное обслуживание жироуловителей для ресторанов, кафе и предприятий общественного питания')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#calculator" className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                {t('fatSeparators.hero.button1', 'Рассчитать стоимость')}
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-800 transition-colors">
                {t('fatSeparators.hero.button2', 'Заказать услугу')}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-20" style={{ backgroundImage: "url('/images/fat-separator.png')" }}></div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('fatSeparators.benefits.title', 'Преимущества нашей услуги')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('fatSeparators.benefits.benefit1.title', 'Оперативность')}
              </h3>
              <p className="text-gray-600">
                {t('fatSeparators.benefits.benefit1.description', 'Выезд специалистов в течение 24 часов после заявки. Быстрое и качественное выполнение работ.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('fatSeparators.benefits.benefit2.title', 'Экологичность')}
              </h3>
              <p className="text-gray-600">
                {t('fatSeparators.benefits.benefit2.description', 'Утилизация жиров и отходов с соблюдением всех экологических норм. Переработка в биометан.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('fatSeparators.benefits.benefit3.title', 'Выгодные тарифы')}
              </h3>
              <p className="text-gray-600">
                {t('fatSeparators.benefits.benefit3.description', 'Прозрачное ценообразование. Скидки при заключении долгосрочных контрактов на регулярное обслуживание.')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('fatSeparators.process.title', 'Как мы работаем')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">
                {t('fatSeparators.process.step1.title', 'Заявка')}
              </h3>
              <p className="text-gray-600">
                {t('fatSeparators.process.step1.description', 'Оставьте заявку на сайте или позвоните нам. Наш менеджер свяжется с вами для уточнения деталей.')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">
                {t('fatSeparators.process.step2.title', 'Диагностика')}
              </h3>
              <p className="text-gray-600">
                {t('fatSeparators.process.step2.description', 'Наши специалисты проведут диагностику жироуловителя и определят объем необходимых работ.')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">
                {t('fatSeparators.process.step3.title', 'Очистка')}
              </h3>
              <p className="text-gray-600">
                {t('fatSeparators.process.step3.description', 'Выполняем очистку жироуловителя с использованием специального оборудования и экологичных средств.')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">
                {t('fatSeparators.process.step4.title', 'Утилизация')}
              </h3>
              <p className="text-gray-600">
                {t('fatSeparators.process.step4.description', 'Вывозим и утилизируем отходы с соблюдением всех экологических норм, перерабатываем их в биометан.')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">
                {t('fatSeparators.why.title', 'Почему регулярная очистка жироуловителей необходима?')}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('fatSeparators.why.reason1', 'Предотвращение засоров канализационной системы и аварийных ситуаций')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('fatSeparators.why.reason2', 'Соблюдение санитарных норм и требований контролирующих органов')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('fatSeparators.why.reason3', 'Устранение неприятных запахов и антисанитарных условий')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('fatSeparators.why.reason4', 'Продление срока службы оборудования и канализационной системы')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('fatSeparators.why.reason5', 'Экологическая ответственность и забота об окружающей среде')}
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  {t('fatSeparators.why.button', 'Заказать очистку')}
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/fat-separator-cleaning.jpg" 
                alt={t('fatSeparators.why.imageAlt', 'Очистка жироуловителя')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('fatSeparators.calculator.title', 'Рассчитайте стоимость очистки жироуловителя')}
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="volume" className="block text-gray-700 font-medium mb-2">
                  {t('fatSeparators.calculator.volume', 'Объем жироуловителя')}
                </label>
                <select id="volume" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <option value="small">{t('fatSeparators.calculator.volumeSmall', 'До 100 литров')}</option>
                  <option value="medium">{t('fatSeparators.calculator.volumeMedium', '100-500 литров')}</option>
                  <option value="large">{t('fatSeparators.calculator.volumeLarge', '500-1000 литров')}</option>
                  <option value="xlarge">{t('fatSeparators.calculator.volumeXLarge', 'Более 1000 литров')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="frequency" className="block text-gray-700 font-medium mb-2">
                  {t('fatSeparators.calculator.frequency', 'Частота обслуживания')}
                </label>
                <select id="frequency" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200">
                  <option value="once">{t('fatSeparators.calculator.frequencyOnce', 'Разовая очистка')}</option>
                  <option value="monthly">{t('fatSeparators.calculator.frequencyMonthly', 'Ежемесячно')}</option>
                  <option value="quarterly">{t('fatSeparators.calculator.frequencyQuarterly', 'Ежеквартально')}</option>
                  <option value="biannually">{t('fatSeparators.calculator.frequencyBiannually', 'Раз в полгода')}</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                {t('fatSeparators.calculator.location', 'Местоположение')}
              </label>
              <input 
                type="text" 
                id="location" 
                placeholder={t('fatSeparators.calculator.locationPlaceholder', 'Введите город или район')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
            
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                {t('fatSeparators.calculator.button', 'Рассчитать стоимость')}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('fatSeparators.clients.title', 'Наши клиенты')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
              <img src="/images/client-1.png" alt="Client 1" className="max-h-16" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
              <img src="/images/client-2.png" alt="Client 2" className="max-h-16" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
              <img src="/images/client-3.png" alt="Client 3" className="max-h-16" />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
              <img src="/images/client-4.png" alt="Client 4" className="max-h-16" />
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('fatSeparators.contact.title', 'Заказать очистку жироуловителя')}
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t('fatSeparators.contact.subtitle', 'Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для обсуждения деталей')}
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

export default FatSeparatorsPage;
