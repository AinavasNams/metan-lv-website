import { useTranslation } from 'react-i18next';
import SEOOptimization from '../SEOOptimization';
import ContactForm from '../ContactForm';

const NotFoundPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOOptimization 
        title={t('notFound.seo.title', '404 - Страница не найдена | CH₄ Future Platform')}
        description={t('notFound.seo.description', 'Запрашиваемая страница не найдена. Вернитесь на главную страницу CH₄ Future Platform.')}
        keywords={t('notFound.seo.keywords', 'биометан, очистка жироуловителей, промывка канализации')}
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">{t('notFound.hero.code', '404')}</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">{t('notFound.hero.title', 'Страница не найдена')}</h2>
          <p className="text-xl text-gray-600 mb-10">
            {t('notFound.hero.message', 'Извините, запрашиваемая страница не существует или была перемещена.')}
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              {t('notFound.hero.homeButton', 'Вернуться на главную')}
            </a>
            <a 
              href="/contact" 
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors"
            >
              {t('notFound.hero.contactButton', 'Связаться с нами')}
            </a>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">{t('notFound.suggestions.title', 'Возможно, вас заинтересует')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold mb-3">{t('notFound.suggestions.service1.title', 'Очистка жироуловителей')}</h4>
                <p className="text-gray-600 mb-4">
                  {t('notFound.suggestions.service1.description', 'Профессиональное обслуживание жироуловителей для ресторанов, кафе и пищевых производств.')}
                </p>
                <a href="/fat-separators" className="text-blue-600 font-medium hover:text-blue-800">{t('notFound.suggestions.readMore', 'Подробнее')} →</a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold mb-3">{t('notFound.suggestions.service2.title', 'Промывка канализации')}</h4>
                <p className="text-gray-600 mb-4">
                  {t('notFound.suggestions.service2.description', 'Эффективное удаление жировых отложений в трубах с использованием современного оборудования.')}
                </p>
                <a href="/sewer-cleaning" className="text-purple-600 font-medium hover:text-purple-800">{t('notFound.suggestions.readMore', 'Подробнее')} →</a>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold mb-3">{t('notFound.suggestions.service3.title', 'Производство биометана')}</h4>
                <p className="text-gray-600 mb-4">
                  {t('notFound.suggestions.service3.description', 'Замкнутый цикл переработки жиров и пищевых отходов в экологически чистую энергию.')}
                </p>
                <a href="/biomethane" className="text-green-600 font-medium hover:text-green-800">{t('notFound.suggestions.readMore', 'Подробнее')} →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-center mb-6">{t('notFound.contact.title', 'Остались вопросы?')}</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
