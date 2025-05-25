import { useTranslation } from 'react-i18next';
import SEOOptimization from '../SEOOptimization';
import ContactForm from '../ContactForm';

const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOOptimization 
        title={t('about.seo.title', 'О компании CH₄ Future Platform | Переработка отходов в биометан')}
        description={t('about.seo.description', 'CH₄ Future Platform - инновационная компания, специализирующаяся на переработке органических отходов в биометан, очистке жироуловителей и промывке канализации.')}
        keywords={t('about.seo.keywords', 'CH4 Future Platform, биометан, переработка отходов, очистка жироуловителей, промывка канализации, экологичные решения')}
      />
      
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              {t('about.hero.title', 'О компании CH₄ Future Platform')}
            </h1>
            <p className="text-xl mb-8">
              {t('about.hero.subtitle', 'Инновационные решения для переработки органических отходов в биометан')}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">
                {t('about.mission.title', 'Наша миссия')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('about.mission.paragraph1', 'CH₄ Future Platform стремится к созданию экологически устойчивого будущего через инновационные решения по переработке органических отходов в возобновляемую энергию.')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('about.mission.paragraph2', 'Мы разрабатываем и внедряем комплексные решения, которые не только решают проблему утилизации отходов, но и создают ценный ресурс — биометан, который может использоваться как экологически чистое топливо.')}
              </p>
              <p className="text-gray-700">
                {t('about.mission.paragraph3', 'Наша цель — сделать процесс переработки отходов максимально эффективным, экономически выгодным и доступным для широкого круга клиентов.')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/about-mission.jpg" 
                alt={t('about.mission.imageAlt', 'Миссия CH₄ Future Platform')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('about.values.title', 'Наши ценности')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('about.values.value1.title', 'Экологическая ответственность')}
              </h3>
              <p className="text-gray-600">
                {t('about.values.value1.description', 'Мы стремимся минимизировать негативное воздействие на окружающую среду и способствовать устойчивому развитию.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('about.values.value2.title', 'Инновации')}
              </h3>
              <p className="text-gray-600">
                {t('about.values.value2.description', 'Мы постоянно ищем новые технологические решения для повышения эффективности переработки отходов и производства биометана.')}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('about.values.value3.title', 'Клиентоориентированность')}
              </h3>
              <p className="text-gray-600">
                {t('about.values.value3.description', 'Мы создаем решения, которые отвечают потребностям наших клиентов, обеспечивая высокий уровень сервиса и поддержки.')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('about.team.title', 'Наша команда')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img src="/images/team-1.jpg" alt="CEO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">
                {t('about.team.member1.name', 'Александр Иванов')}
              </h3>
              <p className="text-blue-600 mb-2">
                {t('about.team.member1.position', 'Генеральный директор')}
              </p>
              <p className="text-gray-600">
                {t('about.team.member1.description', '15+ лет опыта в энергетическом секторе и управлении экологическими проектами.')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img src="/images/team-2.jpg" alt="CTO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">
                {t('about.team.member2.name', 'Мария Петрова')}
              </h3>
              <p className="text-blue-600 mb-2">
                {t('about.team.member2.position', 'Технический директор')}
              </p>
              <p className="text-gray-600">
                {t('about.team.member2.description', 'Эксперт в области биогазовых технологий с опытом реализации проектов в Европе и СНГ.')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img src="/images/team-3.jpg" alt="COO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1">
                {t('about.team.member3.name', 'Андрей Смирнов')}
              </h3>
              <p className="text-blue-600 mb-2">
                {t('about.team.member3.position', 'Операционный директор')}
              </p>
              <p className="text-gray-600">
                {t('about.team.member3.description', 'Специалист по оптимизации бизнес-процессов и логистике с 10-летним опытом работы.')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('about.achievements.title', 'Наши достижения')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-700">
                {t('about.achievements.achievement1', 'Лет опыта в отрасли')}
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-700">
                {t('about.achievements.achievement2', 'Довольных клиентов')}
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2 МВт</div>
              <p className="text-gray-700">
                {t('about.achievements.achievement3', 'Производственная мощность')}
              </p>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-gray-700">
                {t('about.achievements.achievement4', 'Страны присутствия')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('about.contact.title', 'Свяжитесь с нами')}
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              {t('about.contact.subtitle', 'Готовы обсудить ваш проект или ответить на любые вопросы о наших услугах')}
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

export default AboutPage;
