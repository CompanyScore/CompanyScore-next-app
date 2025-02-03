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
  { label: "Developer", value: "developer" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Full-stack", value: "fullstack" },
  { label: "QA Engineer", value: "qa" },
  { label: "Designer", value: "designer" },
  { label: "Project Manager", value: "project-manager" },
  { label: "DevOps Engineer", value: "devops" },
  { label: "System Administrator", value: "system-administrator" },
  { label: "Data Scientist", value: "data-scientist" },
  { label: "Product Manager", value: "product-manager" },
  { label: "Business Analyst", value: "business-analyst" },
  { label: "UX Designer", value: "ux" },
];

export function CompaniesAddCommentModal({
  companyId,
  userId,
  closeModal,
  refetch,
}: CompaniesAddCommentModalProps) {
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim() || rating === 0 || !position) {
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
          placeholder={`Работал над интересным проектом около двух лет. Команда была хорошая – 20 человек, а ещё два четвероногих охранника и одна пушистая контролёр качества.

Плюсы: Отличная зарплата – кошелёк был счастлив! Атмосфера весёлая, коллеги с огоньком, а корпоративы такие, что потом ещё долго вспоминали. 😄

Минусы: Офисный формат – это, конечно, живое общение, но вот дорога туда-обратно на 2 часа превращалась в ежедневное испытание на терпение и стойкость.`}
          onChange={handleTextareaChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4 placeholder:whitespace-pre-wrap"
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
