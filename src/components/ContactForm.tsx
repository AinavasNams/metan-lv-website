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

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { t } = useTranslation();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here would be API call to send form data
    alert(t('contactForm.successMessage', 'Спасибо за заявку! Мы свяжемся с вами в ближайшее время.'));
    reset();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            {t('contactForm.name', 'Имя')} *
          </label>
          <input 
            type="text" 
            id="name"
            {...register('name')}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
            {t('contactForm.company', 'Компания')}
          </label>
          <input 
            type="text" 
            id="company"
            {...register('company')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            {t('contactForm.email', 'Email')} *
          </label>
          <input 
            type="email" 
            id="email"
            {...register('email')}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            {t('contactForm.phone', 'Телефон')} *
          </label>
          <input 
            type="tel" 
            id="phone"
            {...register('phone')}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
          {t('contactForm.service', 'Интересующая услуга')} *
        </label>
        <select 
          id="service"
          {...register('service')}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">{t('contactForm.selectService', 'Выберите услугу')}</option>
          <option value="fat-separators">{t('contactForm.fatSeparators', 'Очистка жироуловителей')}</option>
          <option value="sewer-cleaning">{t('contactForm.sewerCleaning', 'Промывка канализации')}</option>
          <option value="biomethane">{t('contactForm.biomethane', 'Производство биометана')}</option>
          <option value="other">{t('contactForm.other', 'Другое')}</option>
        </select>
        {errors.service && (
          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          {t('contactForm.message', 'Сообщение')}
        </label>
        <textarea 
          id="message"
          {...register('message')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        ></textarea>
      </div>
      
      <div className="text-center">
        <button 
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          {t('contactForm.submit', 'Отправить заявку')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
