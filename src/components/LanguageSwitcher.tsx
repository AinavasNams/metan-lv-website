import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
      <button 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'lv' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`}
        onClick={() => changeLanguage('lv')}
      >
        LV
      </button>
      <button 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
