import * as yup from "yup";

export const profileEditSchema = yup.object().shape({
  name: yup.string(),
  position: yup.string(),
  description: yup.string(),
  avatar: yup
    .mixed()
    .test("fileType", "Допустимые форматы: JPG, PNG", (value) => {
      return (
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png"].includes(value.type))
      );
    }),
});
