"use client";

import { Button, Input, Modal, Textarea, Title, Toast, useToast } from "@/ui";
import { useSuggestCompanyStore } from "@/store";
import { useSuggestPostForm } from "@/hook";

export function SuggestPostCompanyModal() {
  const { postSuggestCompany } = useSuggestCompanyStore();

  const showToast = useToast((state) => state.showToast);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useSuggestPostForm();

  const closeModal = () => {
    const modal = document.getElementById(
      "suggest_post_company_modal",
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
      await postSuggestCompany({
        name: data.name,
        description: data.description,
      });
      showToast("Предложение отправлено!", "success");
      resetForm();
    } catch {
      const error = useSuggestCompanyStore.getState().error;
      showToast(error || "Ошибка", "error");
      resetForm();
    }
  };

  return (
    <Modal id="suggest_post_company_modal">
      <Title size="3" position="center">
        Предложите компанию
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="position" className="block mb-2">
            Название компании
          </label>
          <Input
            value={watch("name")}
            onChange={(value) => setValue("name", value)}
          />
          <p className="text-error">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2">
            Описание компании
          </label>
          <Textarea
            value={watch("description") || ""}
            onChange={(value) => setValue("description", value)}
            placeholder={`Работал над интересным проектом около двух лет. Команда была хорошая – 20 человек, а ещё два четвероногих охранника и одна пушистая контролёр качества.
  
Плюсы: Отличная зарплата – кошелёк был счастлив! Атмосфера весёлая, коллеги с огоньком, а корпоративы такие, что потом ещё долго вспоминали. 😄
  
Минусы: Офисный формат – это, конечно, живое общение, но вот дорога туда-обратно на 2 часа превращалась в ежедневное испытание на терпение и стойкость.`}
            rows={13}
          />
          <p className="text-error">{errors.description?.message}</p>
        </div>

        <Button className="btn-primary w-full">Отправить</Button>
      </form>

      <Toast />
    </Modal>
  );
}
