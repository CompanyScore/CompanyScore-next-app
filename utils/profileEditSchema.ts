import * as yup from "yup";

export const profileEditSchema = yup.object().shape({
  name: yup.string().optional(),
  position: yup.string().optional(),
  description: yup.string().optional(),
  avatar: yup
    .mixed<File>()
    .optional()
    .test("fileType", "Допустимые форматы: JPG, PNG", (value) => {
      if (!value) return true; // Разрешаем undefined
      return (
        value instanceof File &&
        ["image/jpeg", "image/png"].includes(value.type)
      );
    }),
});
