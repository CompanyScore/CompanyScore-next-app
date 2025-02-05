"use client";

import { useState } from "react";
import axios from "axios";
import { Button, Dropdown, Modal, Textarea, Title } from "@/ui";
import { positions } from "@/shared";
import { useUserStore } from "@/store";

type CompaniespostCommentModalProps = {
  companyId?: number;
  refetch: () => void;
};

export function CompaniespostCommentModal({
  companyId,
  refetch,
}: CompaniespostCommentModalProps) {
  const { userId } = useUserStore();

  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
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
          width={"450px"}
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
        onClick={() => handleSubmit}
        disabled={loading || !comment.trim() || rating === 0 || !position}
      >
        <label htmlFor="companies_add_comment_modal">
          {loading ? "Отправка..." : "Отправить"}
        </label>
      </Button>
    </Modal>
  );
}

export default CompaniespostCommentModal;
