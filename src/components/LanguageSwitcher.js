import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("button", { className: `text-sm px-2 py-1 rounded ${i18n.language === 'ru' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`, onClick: () => changeLanguage('ru'), children: "RU" }), _jsx("button", { className: `text-sm px-2 py-1 rounded ${i18n.language === 'lv' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`, onClick: () => changeLanguage('lv'), children: "LV" }), _jsx("button", { className: `text-sm px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`, onClick: () => changeLanguage('en'), children: "EN" })] }));
};
export default LanguageSwitcher;
