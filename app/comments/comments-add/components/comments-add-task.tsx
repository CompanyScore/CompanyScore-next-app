import { Checkbox, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
// import { useCommentFormStore2 } from '@/store';

export const CommentsAddTask = () => {
  // const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6  max-w-[900px] w-full m-auto">
      <Title>Оцените тестовое задание</Title>
      <div className="flex flex-col gap-4 w-full">
        <p>
          Насколько чётко были сформулированы требования к тестовому заданию?
        </p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>
          Насколько задание соответствовало уровню и содержанию предполагаемой
          должности?
        </p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Насколько справедливо и объективно оценили ваше тестовое задание?</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Насколько разумным был объём и срок выполнения задания?</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Насколько тестовое задание отражало реальные задачи в компании?</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Получили ли вы обратную связь по результатам?</p>

        <div className="flex gap-4">
          <Checkbox
            label="Нет"
            value="interview"
            selected={false} // Replace with actual state
            onChange={() => console.log('checkbox change')}
          />
          <Checkbox
            label="Шаблонный ответ"
            value="interview"
            selected={false} // Replace with actual state
            onChange={() => console.log('checkbox change')}
          />
          <Checkbox
            label="Развернутый ответ"
            value="interview"
            selected={false} // Replace with actual state
            onChange={() => console.log('checkbox change')}
          />
        </div>

        {/* <StarRating
          value={form.task.rating}
          onChange={val => updateForm({ task: { ...form.task, rating: val } })}
        /> */}
        {/* <textarea
          className="textarea textarea-primary w-full"
          placeholder="Расскажите о вашем опыте выполнения задания"
          value={form.task.text}
          onChange={e =>
            updateForm({ task: { ...form.task, text: e.target.value } })
          }
        /> */}
      </div>
    </div>
  );
};
