import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Укажите корректную почту')
    .required('Почта обязательна'),
  password: yup
    .string()
    .min(8, 'Пароль должен быть минимум 8 символов')
    .required('Пароль обязателен'),
});
