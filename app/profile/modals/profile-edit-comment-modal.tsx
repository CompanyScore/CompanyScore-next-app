"use client";

import { useState, useEffect } from "react";
import { useCommentsStore, useUserStore } from "@/store";
import { Button, Dropdown, Modal, Textarea, Title } from "@/ui";
import { positions } from "@/shared";

type ProfileEditCommentModalProps = {
  comment?: { id: string; text: string; rating: number; position?: string };
};

export function ProfileEditCommentModal({
  comment,
}: ProfileEditCommentModalProps) {
  const { userId } = useUserStore();
  const { getComments, updateComment } = useCommentsStore();

  const [editedText, setEditedText] = useState("");
  const [editedRating, setEditedRating] = useState(0);
  const [editedPosition, setEditedPosition] = useState("");
  // const [setValidation] = useState<string | null>(null);
  // const [toast] = useState<{ message: string; type?: string } | undefined>(
  //   undefined,
  // );

  useEffect(() => {
    if (comment) {
      setEditedText(comment.text || "");
      setEditedRating(comment.rating || 0);
      setEditedPosition(comment.position || "");
    }
  }, [comment]);

  const onSubmit = async () => {
    if (!editedText.trim() || editedRating === 0 || !editedPosition) {
      // setValidation("Пожалуйста, укажите текст отзыва, рейтинг и должность.");
      return;
    }

    await updateComment(comment!.id, editedText, editedRating, editedPosition);
    if (userId) {
      getComments(userId);
    }
  };

  const handleTextareaChange = (newSearchedValue: string) => {
    setEditedText(newSearchedValue);
  };

  return (
    <Modal id="profile-edit-comment-modal">
      <Title size="3" position="center">
        Редактирование отзыва
      </Title>
      <div className="mb-4">
        <label htmlFor="position" className="block mb-2">
          Должность
        </label>
        <Dropdown
          width="450px"
          isFirstDisabled={true}
          options={positions}
          selectedValue={editedPosition}
          onSelect={setEditedPosition}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2">
          Отзыв
        </label>
        <Textarea
          value={editedText}
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
                editedRating >= index + 1 ? "bg-orange-400" : "bg-gray-300"
              }`}
              onClick={() => setEditedRating(index + 1)}
            >
              <span className="absolute text-xs font-bold text-white">
                {index + 1}
              </span>
            </span>
          ))}
        </div>
      </div>
      <Button
        onClick={onSubmit}
        disabled={!editedText.trim() || editedRating === 0 || !editedPosition}
      >
        Обновить
      </Button>
      {/* {toast && <Toast message={toast.message} type={toast.type || ""} />} */}
    </Modal>
  );
}

export default ProfileEditCommentModal;
