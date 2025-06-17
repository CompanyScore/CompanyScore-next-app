import { Checkbox, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddTask = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6">
      <Title>Оцените техническое задание</Title>
      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <p>Актуальность и применимость ТЗ к должности</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Сложность технического задания</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Сроки выполнения и адекватность объема</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <Checkbox
          label="Была ли обратная связь по результатам?"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />

        {/* <StarRating
          value={form.task.rating}
          onChange={val => updateForm({ task: { ...form.task, rating: val } })}
        /> */}
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
