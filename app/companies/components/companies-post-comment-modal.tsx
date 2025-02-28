import {
  Button,
  Dropdown,
  Modal,
  Textarea,
  Title,
  Toast,
  useToast,
} from "@/ui";
import { positions } from "@/shared";
import { useCommentsStore, useCompaniesStore, useUserIdStore } from "@/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type CompaniesPostCommentModalProps = {
  companyId: string;
};

const scheme = yup.object().shape({
  comment: yup.string().required("Отзыв обязателен"),
  rating: yup
    .number()
    .min(1, "Поставьте оценку")
    .required("Оценка обязательна"),
  position: yup.string().required("Укажите должность"),
});

export function CompaniesPostCommentModal({
  companyId,
}: CompaniesPostCommentModalProps) {
  const { userId } = useUserIdStore();
  const { getCompanies } = useCompaniesStore();
  const { getComments, postComment } = useCommentsStore();
  const showToast = useToast((state) => state.showToast);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(scheme),
    defaultValues: {
      comment: "",
      rating: 0,
      position: "",
    },
  });

  const closeModal = () => {
    const modal = document.getElementById(
      "companies_add_comment_modal",
    ) as HTMLInputElement;
    if (modal) {
      modal.checked = false; // Закрывает модалку в daisyUI
    }
  };

  const resetForm = () => {
    reset();
    closeModal();
  };

  const onSubmit = async (data: any) => {
    try {
      await postComment({
        text: data.comment,
        position: data.position,
        rating: data.rating,
        userId,
        companyId,
      });
      await getCompanies({});
      await getComments({ companyId });
      showToast("Комментарий отправлен!", "success");
      resetForm();
    } catch {
      const error = useCommentsStore.getState().error;
      showToast(error || "Ошибка", "error");
      resetForm();
    }
  };

  return (
    <Modal id="companies_add_comment_modal">
      <Title size="3" position="center">
        Оставьте отзыв
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="position" className="block mb-2">
            Должность
          </label>
          <Dropdown
            width="430px"
            text="Должность"
            isFirstDisabled={true}
            options={positions}
            selectedValue={watch("position")}
            onSelect={(value) => setValue("position", value)}
          />
          <p className="text-error">{errors.position?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2">
            Отзыв
          </label>
          <Textarea
            value={watch("comment") || ""}
            onChange={(value) => setValue("comment", value)}
            placeholder={`Работал над интересным проектом около двух лет. Команда была хорошая – 20 человек, а ещё два четвероногих охранника и одна пушистая контролёр качества.
  
  Плюсы: Отличная зарплата – кошелёк был счастлив! Атмосфера весёлая, коллеги с огоньком, а корпоративы такие, что потом ещё долго вспоминали. 😄
  
  Минусы: Офисный формат – это, конечно, живое общение, но вот дорога туда-обратно на 2 часа превращалась в ежедневное испытание на терпение и стойкость.`}
            rows={13}
          />
          <p className="text-error">{errors.comment?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block mb-2">
            Оценка
          </label>
          <div className="rating flex gap-2">
            {[...Array(10)].map((_, index) => (
              <span
                key={index + 1}
                className={`relative cursor-pointer mask mask-star-2 w-10 h-10 flex items-center justify-center ${
                  watch("rating") >= index + 1 ? "bg-orange-400" : "bg-gray-300"
                }`}
                onClick={() => setValue("rating", index + 1)}
              >
                <span className="absolute text-xs font-bold text-white">
                  {index + 1}
                </span>
              </span>
            ))}
          </div>
          <p className="text-error">{errors.rating?.message}</p>
        </div>

        <Button className="btn-primary w-full">Сохранить</Button>
      </form>

      <Toast />
    </Modal>
  );
}
