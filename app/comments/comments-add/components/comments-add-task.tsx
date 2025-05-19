import { Checkbox, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
import { useCommentFormStore } from '@/store';

export const CommentsAddTask = () => {
  const { form, updateForm } = useCommentFormStore();

  const handleCheckboxChange = () => {
    updateForm({ task: { ...form.task, isTask: !form.task.isTask } });
  };

  return (
    <div className="flex flex-col gap-6">
      <Title size="2" position="center">
        Вам предоставляли техническое задание?
      </Title>
      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <Checkbox
          label="Я выполнял техническое задание"
          value="task"
          selected={form.task.isTask}
          onChange={handleCheckboxChange}
        />

        {form.task.isTask && (
          <>
            <StarRating
              value={form.task.rating}
              onChange={val =>
                updateForm({ task: { ...form.task, rating: val } })
              }
            />
            <textarea
              className="textarea textarea-primary w-full"
              placeholder="Расскажите о вашем опыте выполнения задания"
              value={form.task.text}
              onChange={e =>
                updateForm({ task: { ...form.task, text: e.target.value } })
              }
            />
          </>
        )}
      </div>
    </div>
  );
};
