'use client';

import { useEffect } from 'react';
import { useCommentsStore } from '@/store';
import { Button, Dropdown, Modal, Textarea, Title, useToast } from '@/ui';
import { positions } from '@/constants';
import { useCommentForm } from '@/hook';

type ProfileEditCommentModalProps = {
  comment?: { id: string; text: string; rating: number; position?: string };
};

type CommentFormData = {
  comment: string;
  rating: number;
  position: string;
};

export function ProfileEditCommentModal({
  comment,
}: ProfileEditCommentModalProps) {
  const { getComments, updateComment } = useCommentsStore();

  const toast = useToast();

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useCommentForm();

  useEffect(() => {
    if (comment) {
      setValue('comment', comment.text || '');
      setValue('rating', comment.rating || 0);
      setValue('position', comment.position || '');
    }
  }, [comment, setValue]);

  const onSubmit = async (data: CommentFormData) => {
    try {
      await updateComment(
        comment!.id,
        data.comment,
        data.rating,
        data.position,
      );
      getComments({});
      toast.success('Отзыв обновлен');
    } catch {
      const error = useCommentsStore.getState().error;
      toast.error(error || 'Ошибка');
    }
  };

  return (
    <Modal id="profile-edit-comment-modal">
      <Title size="3" position="center">
        Редактирование отзыва
      </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="position" className="block mb-2">
            Должность
          </label>
          <Dropdown
            width="450px"
            isFirstDisabled={true}
            options={positions}
            selectedValue={watch('position')}
            onSelect={value => setValue('position', value)}
          />
          <p className="text-error">{errors.position?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block mb-2">
            Отзыв
          </label>
          <Textarea
            value={watch('comment')}
            placeholder={`Работал над интересным проектом около двух лет. Команда была хорошая – 20 человек, а ещё два четвероногих охранника и одна пушистая контролёр качества.

Плюсы: Отличная зарплата – кошелёк был счастлив! Атмосфера весёлая, коллеги с огоньком, а корпоративы такие, что потом ещё долго вспоминали. 😄
            
Минусы: Офисный формат – это, конечно, живое общение, но вот дорога туда-обратно на 2 часа превращалась в ежедневное испытание на терпение и стойкость.`}
            onChange={value => setValue('comment', value)}
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
                  watch('rating') >= index + 1 ? 'bg-orange-400' : 'bg-gray-300'
                }`}
                onClick={() => setValue('rating', index + 1)}
              >
                <span className="absolute text-xs font-bold text-white">
                  {index + 1}
                </span>
              </span>
            ))}
          </div>
          <p className="text-error">{errors.rating?.message}</p>
        </div>
        <Button className="btn-primary w-full">Обновить</Button>
      </form>
    </Modal>
  );
}

export default ProfileEditCommentModal;
