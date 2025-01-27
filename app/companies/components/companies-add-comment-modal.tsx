"use client";

import { useState } from "react";
import axios from "axios";
import { Dropdown } from "@/ui";

type CompaniesAddCommentModalProps = {
  companyId: number;
  userId: number;
  closeModal: () => void;
  refetch: () => void;
};

const positions = [
  "Разработчик",
  "Фронтенд-разработчик",
  "Бэкенд-разработчик",
  "Фулл-стек разработчик",
  "QA-инженер",
  "Дизайнер",
  "Менеджер проектов",
  "DevOps-инженер",
  "Системный администратор",
  "Data Scientist",
  "Продуктовый менеджер",
  "Бизнес-аналитик",
  "UX-дизайнер",
];

export function CompaniesAddCommentModal({
  companyId,
  userId,
  closeModal,
  refetch,
}: CompaniesAddCommentModalProps) {
  const [comment, setComment] = useState<string>("Отзыв: \nПлюсы: \nМинусы: ");
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !comment.trim() ||
      comment === "Отзыв:\nПлюсы:\nМинусы:" ||
      rating === 0 ||
      !position
    ) {
      setError(
        "Пожалуйста, оставьте комментарий, выберите хотя бы одну звезду и укажите вашу должность.",
      );
      return;
    }

    const sanitizedText = comment.replace(/\n/g, " ");

    setLoading(true);
    setError(null);

    try {
      await axios.post("http://localhost:8080/comments", {
        text: sanitizedText,
        rating,
        position,
        userId,
        companyId,
      });

      setComment("");
      setRating(0);
      setPosition("");
      refetch();
      closeModal();
    } catch (error) {
      // console.error("Ошибка при отправке комментария:", error);
      if (error.response.data.errorCode === "comment_already_exists") {
        setError("Вы уже оставляли комментарий на эту компанию");
      } else {
        setError(
          "Произошла ошибка при отправке комментария. Пожалуйста, попробуйте снова.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4">Оставьте отзыв</h2>

      <div className="mb-4">
        <label htmlFor="position" className="block mb-2">
          Должность
        </label>
        <Dropdown
          label="Выберите должность"
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
        <textarea
          value={comment}
          onChange={handleTextareaChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          rows={5}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block mb-2">
          Оценка
        </label>
        <div className="rating flex gap-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index + 1}
              className={`cursor-pointer mask mask-star-2 w-8 h-8 ${
                rating >= index + 1 ? "bg-orange-400" : "bg-gray-300"
              }`}
              onClick={() => setRating(index + 1)}
            >
              &nbsp;
            </span>
          ))}
        </div>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="flex justify-between">
        <button type="button" className="btn btn-ghost" onClick={closeModal}>
          Отмена
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading || !comment.trim() || rating === 0 || !position}
        >
          {loading ? "Отправка..." : "Отправить"}
        </button>
      </div>
    </form>
  );
}

export default CompaniesAddCommentModal;
