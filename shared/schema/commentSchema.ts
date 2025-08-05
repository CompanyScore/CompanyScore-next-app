import * as yup from 'yup';

export const commentSchema = yup.object().shape({
  comment: yup.string().required('Отзыв обязателен'),
  position: yup.string().required('Укажите должность'),
  rating: yup
    .number()
    .min(1, 'Поставьте оценку')
    .required('Оценка обязательна'),
});
