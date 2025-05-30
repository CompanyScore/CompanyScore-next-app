import { StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddTask = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Оцените техническое задание
      </Title>
      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <StarRating
          value={form.task.rating}
          onChange={val => updateForm({ task: { ...form.task, rating: val } })}
        />
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Расскажите о вашем опыте выполнения задания"
          value={form.task.text}
          onChange={e =>
            updateForm({ task: { ...form.task, text: e.target.value } })
          }
        />
      </div>
    </div>
  );
};
