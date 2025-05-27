import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
const schema = z.object({
    name: z.string().min(2, { message: 'Имя должно содержать минимум 2 символа' }),
    company: z.string().optional(),
    email: z.string().email({ message: 'Введите корректный email' }),
    phone: z.string().min(6, { message: 'Введите корректный номер телефона' }),
    service: z.string().min(1, { message: 'Выберите услугу' }),
    message: z.string().optional(),
});
const ContactForm = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
        // Here would be API call to send form data
        alert(t('contactForm.successMessage', 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.'));
        reset();
    };
    return (_jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "text-gray-700", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsxs("label", { htmlFor: "name", className: "block text-gray-700 font-medium mb-2", children: [t('contactForm.name', 'Имя'), " *"] }), _jsx("input", Object.assign({ type: "text", id: "name" }, register('name'), { className: `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.name ? 'border-red-500' : 'border-gray-300'}` })), errors.name && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.name.message }))] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "company", className: "block text-gray-700 font-medium mb-2", children: t('contactForm.company', 'Компания') }), _jsx("input", Object.assign({ type: "text", id: "company" }, register('company'), { className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" }))] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsxs("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2", children: [t('contactForm.email', 'Email'), " *"] }), _jsx("input", Object.assign({ type: "email", id: "email" }, register('email'), { className: `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.email ? 'border-red-500' : 'border-gray-300'}` })), errors.email && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email.message }))] }), _jsxs("div", { children: [_jsxs("label", { htmlFor: "phone", className: "block text-gray-700 font-medium mb-2", children: [t('contactForm.phone', 'Телефон'), " *"] }), _jsx("input", Object.assign({ type: "tel", id: "phone" }, register('phone'), { className: `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.phone ? 'border-red-500' : 'border-gray-300'}` })), errors.phone && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.phone.message }))] })] }), _jsxs("div", { className: "mb-6", children: [_jsxs("label", { htmlFor: "service", className: "block text-gray-700 font-medium mb-2", children: [t('contactForm.service', 'Интересующая услуга'), " *"] }), _jsxs("select", Object.assign({ id: "service" }, register('service'), { className: `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.service ? 'border-red-500' : 'border-gray-300'}`, children: [_jsx("option", { value: "", children: t('contactForm.selectService', 'Выберите услугу') }), _jsx("option", { value: "fat-separators", children: t('contactForm.fatSeparators', 'Очистка жироуловителей') }), _jsx("option", { value: "sewer-cleaning", children: t('contactForm.sewerCleaning', 'Промывка канализации') }), _jsx("option", { value: "biomethane", children: t('contactForm.biomethane', 'Производство биометана') }), _jsx("option", { value: "other", children: t('contactForm.other', 'Другое') })] })), errors.service && (_jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.service.message }))] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "message", className: "block text-gray-700 font-medium mb-2", children: t('contactForm.message', 'Сообщение') }), _jsx("textarea", Object.assign({ id: "message" }, register('message'), { rows: 4, className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200" }))] }), _jsx("div", { className: "text-center", children: _jsx("button", { type: "submit", className: "bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors", children: t('contactForm.submit', 'Отправить заявку') }) })] }));
};
export default ContactForm;
