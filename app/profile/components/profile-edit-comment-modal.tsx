"use client";

import { useState } from "react";
import { useCommentsStore, useUserStore } from "@/store";
import { Dropdown } from "@/ui";

type ProfileEditCommentModalProps = {
  comment: { id: number; text: string; rating: number; position?: string };
  closeModal: () => void;
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

export function ProfileEditCommentModal({
  comment,
  closeModal,
}: ProfileEditCommentModalProps) {
  const { userId } = useUserStore();
  const { loading, fetchComments, updateComment } = useCommentsStore();

  const [editedText, setEditedText] = useState(comment.text);
  const [editedRating, setEditedRating] = useState(comment.rating);
  const [editedPosition, setEditedPosition] = useState(comment.position);
  const [validation, setValidation] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editedText.trim() || editedRating === 0 || !editedPosition) {
      setValidation("Пожалуйста, укажите текст отзыва, рейтинг и должность.");
      return;
    }

    await updateComment(comment.id, editedText, editedRating, editedPosition);

    closeModal();
    if (userId) {
      fetchComments(userId);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="text-2xl mb-4">Редактирование отзыва</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="position" className="block mb-2">
                Должность
              </label>
              <Dropdown
                text="Выберите должность"
                isFirstDisabled={true}
                options={positions}
                selectedValue={editedPosition}
                onSelect={setEditedPosition}
              />
            </div>

            <div className="mb-4">
              <textarea
                value={editedText}
                onChange={e => setEditedText(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                rows={5}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="rating" className="block mb-2">
                Рейтинг
              </label>
              <div className="rating flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index + 1}
                    className={`cursor-pointer mask mask-star-2 w-8 h-8 ${
                      editedRating >= index + 1
                        ? "bg-orange-400"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setEditedRating(index + 1)}
                  >
                    &nbsp;
                  </span>
                ))}
              </div>
            </div>

            {validation && <p className="text-red-500 mb-4">{validation}</p>}
            <div className="flex justify-between">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={closeModal}
              >
                Отмена
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={
                  loading ||
                  !editedText.trim() ||
                  editedRating === 0 ||
                  !editedPosition
                }
              >
                {loading ? "Обновление..." : "Обновить"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditCommentModal;
