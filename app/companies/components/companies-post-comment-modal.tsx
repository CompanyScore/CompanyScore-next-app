"use client";

import { useState } from "react";
import { Button, Dropdown, Modal, Textarea, Title, Toast } from "@/ui";
import { positions } from "@/shared";
import { useCompaniesStore, useUserStore } from "@/store";
import { useApi } from "@/hook";

type CompaniesPostCommentModalProps = {
  companyId?: number;
};

export function CompaniesPostCommentModal({
  companyId,
}: CompaniesPostCommentModalProps) {
  const { userId } = useUserStore();
  const { companies, getCompanies } = useCompaniesStore();

  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<string>("");
  const [toast, setToast] = useState<{ message: string; type?: string } | null>(
    null,
  );

  const closeModal = () => {
    const modal = document.getElementById(
      "companies_add_comment_modal",
    ) as HTMLInputElement;
    if (modal) {
      modal.checked = false; // Закрывает модалку в daisyUI
    }
  };

  const resetForm = () => {
    setComment("");
    setRating(0);
    setPosition("");
    closeModal();
  };

  const onSubmit = async () => {
    const sanitizedText = comment.replace(/\n/g, " ");

    const formData = {
      text: sanitizedText,
      position,
      rating,
      userId: userId && +userId,
      companyId,
    };

    if (!comment.trim() || rating === 0 || !position) {
      setError(
        "Пожалуйста, оставьте комментарий, выберите хотя бы одну звезду и укажите вашу должность.",
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await useApi.post(`/comments`, formData);

      setToast({ message: "Комментарий отправлен!" });
      resetForm();
      getCompanies({});
    } catch (error) {
      // console.error("Ошибка при отправке комментария:", error);
      if (error.response.data.errorCode === "comment_already_exists") {
        setToast({
          message: "Вы уже оставляли комментарий на эту компанию",
          type: "error",
        });
      } else {
        setToast({
          message:
            "Произошла ошибка при отправке комментария. Пожалуйста, попробуйте снова.",
          type: "error",
        });
      }
      resetForm();
    } finally {
      setLoading(false);
    }
  };

  const handleTextareaChange = (newSearchedValue: string) => {
    setComment(newSearchedValue);
  };

  return (
    <Modal id="companies_add_comment_modal">
      <Title size="3" position="center">
        Оставьте отзыв
      </Title>

      <div className="mb-4">
        <label htmlFor="position" className="block mb-2">
          Должность
        </label>
        <Dropdown
          width={"430px"}
          isFirstDisabled={true}
          options={positions}
          selectedValue={position}
          onSelect={setPosition}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2">
          Отзыв
        </label>
        <Textarea
          value={comment}
          placeholder={`Работал над интересным проектом около двух лет. Команда была хорошая – 20 человек, а ещё два четвероногих охранника и одна пушистая контролёр качества.

Плюсы: Отличная зарплата – кошелёк был счастлив! Атмосфера весёлая, коллеги с огоньком, а корпоративы такие, что потом ещё долго вспоминали. 😄

Минусы: Офисный формат – это, конечно, живое общение, но вот дорога туда-обратно на 2 часа превращалась в ежедневное испытание на терпение и стойкость.`}
          onChange={handleTextareaChange}
          rows={13}
        />
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
                rating >= index + 1 ? "bg-orange-400" : "bg-gray-300"
              }`}
              onClick={() => setRating(index + 1)}
            >
              <span className="absolute text-xs font-bold text-white">
                {index + 1}
              </span>
            </span>
          ))}
        </div>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <Button
        onClick={onSubmit}
        disabled={!comment.trim() || rating === 0 || !position}
      >
        Сохранить
      </Button>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </Modal>
  );
}
