import { useTranslation } from 'react-i18next';
import SEOOptimization from '../SEOOptimization';
import ContactForm from '../ContactForm';

const BiomethaneProductionPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOOptimization 
        title={t('biomethane.seo.title', 'Производство биометана из отходов | CH₄ Future Platform')}
        description={t('biomethane.seo.description', 'Инновационные решения для производства биометана из органических отходов. Экологически чистая энергия для устойчивого будущего.')}
        keywords={t('biomethane.seo.keywords', 'биометан, производство биометана, переработка отходов, биогаз, возобновляемая энергия, экологически чистое топливо')}
      />
      
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              {t('biomethane.hero.title', 'Производство биометана из органических отходов')}
            </h1>
            <p className="text-xl mb-8">
              {t('biomethane.hero.subtitle', 'Инновационные решения для устойчивого энергетического будущего')}
            </p>
            <a href="#contact" className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block">
              {t('biomethane.hero.cta', 'Узнать больше')}
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">
                {t('biomethane.about.title', 'Что такое биометан?')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('biomethane.about.paragraph1', 'Биометан — это очищенный биогаз, который по своим свойствам аналогичен природному газу, но производится из возобновляемых источников, таких как органические отходы.')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('biomethane.about.paragraph2', 'В отличие от ископаемого топлива, биометан является углеродно-нейтральным, так как при его сжигании выделяется только то количество CO₂, которое было поглощено растениями в процессе их роста.')}
              </p>
              <p className="text-gray-700">
                {t('biomethane.about.paragraph3', 'Биометан может использоваться в качестве топлива для транспорта, для производства электроэнергии и тепла, а также как сырье для химической промышленности.')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/biomethane-about.jpg" 
                alt={t('biomethane.about.imageAlt', 'Биометан - экологически чистое топливо')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('biomethane.process.title', 'Процесс производства биометана')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('biomethane.process.step1.title', 'Сбор сырья')}
              </h3>
              <p className="text-gray-600">
                {t('biomethane.process.step1.description', 'Сбор пищевых отходов, масел, жиров и остатков из жироуловителей ресторанов и предприятий общественного питания.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('biomethane.process.step2.title', 'Переработка')}
              </h3>
              <p className="text-gray-600">
                {t('biomethane.process.step2.description', 'Использование декантера для сепарации и выделения органической массы, подходящей для производства биогаза.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('biomethane.process.step3.title', 'Анаэробное сбраживание')}
              </h3>
              <p className="text-gray-600">
                {t('biomethane.process.step3.description', 'Производство биогаза путем анаэробного сбраживания органической массы в специальных реакторах.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('biomethane.process.step4.title', 'Очистка биогаза')}
              </h3>
              <p className="text-gray-600">
                {t('biomethane.process.step4.description', 'Удаление CO₂, H₂S и других примесей для получения чистого биометана с содержанием метана более 95%.')}
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
                {t('biomethane.benefits.title', 'Преимущества биометана')}
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('biomethane.benefits.benefit1', 'Углеродная нейтральность — снижение выбросов парниковых газов')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('biomethane.benefits.benefit2', 'Возобновляемый источник энергии — не истощает природные ресурсы')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('biomethane.benefits.benefit3', 'Решение проблемы утилизации органических отходов')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('biomethane.benefits.benefit4', 'Совместимость с существующей газовой инфраструктурой')}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">
                    {t('biomethane.benefits.benefit5', 'Экономические выгоды — субсидии, CO₂-кредиты и стабильный доход')}
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/biomethane-benefits.jpg" 
                alt={t('biomethane.benefits.imageAlt', 'Преимущества биометана')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('biomethane.applications.title', 'Применение биометана')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('biomethane.applications.app1.title', 'Энергетика')}
              </h3>
              <p className="text-gray-600">
                {t('biomethane.applications.app1.description', 'Производство электроэнергии и тепла для промышленных и бытовых нужд с минимальным воздействием на окружающую среду.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('biomethane.applications.app2.title', 'Транспорт')}
              </h3>
              <p className="text-gray-600">
                {t('biomethane.applications.app2.description', 'Экологически чистое топливо для автомобилей, автобусов и грузовиков, снижающее выбросы CO₂ и других вредных веществ.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('biomethane.applications.app3.title', 'Промышленность')}
              </h3>
              <p className="text-gray-600">
                {t('biomethane.applications.app3.description', 'Сырье для химической промышленности и производства различных материалов, заменяющее ископаемые источники.')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('biomethane.specs.title', 'Технические характеристики')}
          </h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">{t('biomethane.specs.parameter', 'Параметр')}</th>
                  <th className="py-3 px-4 text-left">{t('biomethane.specs.value', 'Значение')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">{t('biomethane.specs.param1', 'Производственная мощность')}</td>
                  <td className="py-3 px-4">2 МВт</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">{t('biomethane.specs.param2', 'Содержание метана')}</td>
                  <td className="py-3 px-4">95-98%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">{t('biomethane.specs.param3', 'Объем производства')}</td>
                  <td className="py-3 px-4">550 м³/ч</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">{t('biomethane.specs.param4', 'Энергетическая ценность')}</td>
                  <td className="py-3 px-4">9,5-10,5 кВт·ч/м³</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">{t('biomethane.specs.param5', 'Снижение выбросов CO₂')}</td>
                  <td className="py-3 px-4">до 90% по сравнению с ископаемым топливом</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('biomethane.contact.title', 'Заинтересованы в производстве биометана?')}
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t('biomethane.contact.subtitle', 'Свяжитесь с нами, чтобы узнать больше о возможностях сотрудничества и получить индивидуальное предложение')}
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

export default BiomethaneProductionPage;
