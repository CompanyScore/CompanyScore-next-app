import axios from "axios";
import React, { useState } from "react";

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyId: number;
  userId: number;
}

const CommentModal: React.FC<CommentModalProps> = ({
  isOpen,
  onClose,
  companyId,
  userId,
}) => {
  const [comment, setComment] = useState<string>("");
  const [rating, setRating] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim() || rating === null) {
      setError("Пожалуйста, оставьте комментарий и выберите оценку.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Отправляем данные в формате CreateCommentDto
      await axios.post("http://localhost:8080/api/comments", {
        text: comment,
        rating,
        userId,
        companyId,
      });

      setComment("");
      setRating(null);
      onClose();
    } catch (err) {
      console.error("Ошибка при отправке комментария:", err);
      setError(
        "Произошла ошибка при отправке комментария. Пожалуйста, попробуйте снова.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-2xl mb-4">Оставить комментарий</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ваш комментарий..."
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            rows={4}
          />
          <div className="mb-4">
            <label htmlFor="rating" className="block mb-2">
              Оценка (от 0 до 10):
            </label>
            <select
              id="rating"
              value={rating ?? ""}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Выберите оценку</option>
              {[...Array(11)].map((_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
              disabled={loading}
            >
              Закрыть
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading || !comment.trim() || rating === null}
            >
              {loading ? "Отправка..." : "Отправить"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
