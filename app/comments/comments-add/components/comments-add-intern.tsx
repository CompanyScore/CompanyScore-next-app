import { Checkbox, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
// import { useCommentFormStore2 } from '@/store';

export const CommentsAddIntern = () => {
  // const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6 m-auto">
      <Title size="2" position="center">
        Оцените cтажировку
      </Title>

      <p>Полезность стажировки для профессионального развития</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Поддержка и вовлеченность наставника/куратора</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Соответствие задач уровню стажера</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Общая атмосфера и отношение к стажерам в компании</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <Checkbox
        label="Была ли стажировка оплачиваемой?"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />

      <Checkbox
        label="Предлагала ли компания трудоустройство после стажировки?"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      {/* <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <StarRating
          value={form.interview.rating}
          onChange={val =>
            updateForm({ interview: { ...form.interview, rating: val } })
          }
        />
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
      </div> */}
    </div>
  );
};
