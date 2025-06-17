import { StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddInterview = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6">
      <Title>Оцените собеседование</Title>
      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <p>Качество и прозрачность коммуникации с рекрутером</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Профессионализм интервьюеров</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Прозрачность требований и этапов</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Соответствие вакансии ожиданиям и реальности</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Общая удовлетворенность процессом найма</p>
        <StarRating value={0} onChange={() => console.log('value')} />
        {/* <StarRating
          value={form.interview.rating}
          onChange={val =>
            updateForm({ interview: { ...form.interview, rating: val } })
          }
        /> */}
        <textarea
          className="textarea textarea-primary w-full"
          placeholder="Поделитесь опытом собеседования"
          value={form.interview.text}
          onChange={e =>
            updateForm({
              interview: { ...form.interview, text: e.target.value },
            })
          }
        />
      </div>
    </div>
  );
};
