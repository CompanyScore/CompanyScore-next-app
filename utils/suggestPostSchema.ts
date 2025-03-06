import * as yup from "yup";

export const suggestPostSchema = yup.object().shape({
  name: yup.string().required("Отзыв обязателен"),
  description: yup.string().required("Укажите должность"),
});
