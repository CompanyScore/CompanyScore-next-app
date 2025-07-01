import { Calendar, Radio, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
// import { useCommentFormStore2 } from '@/store';

export const CommentsAddIntern = () => {
  // const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените cтажировку</Title>

      <div className="flex">
        <p>Период стажировки</p>
        <p>
          Это информация будет использоваться для аналитики и не будет
          публиковаться в отзывах
        </p>
        <Calendar />
        <Calendar />
      </div>

      <p>Насколько полезным была стажировки для вас?</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Насколько понятно были организованы задачи стажировки?</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Насколько соответствовали задачи уровню стажера?</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Насколько интересными и развивающими были задачи?</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Как вы оцениваете доступность и поддержку наставника/руководителя?</p>
      <StarRating value={0} onChange={() => console.log('value')} />

      <p>Была ли стажировка оплачиваемой?</p>
      <Radio
        options={[
          { label: 'Нет', value: 0 },
          { label: 'Да', value: 5 },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
      />

      <p>Предлагала ли компания трудоустройство после стажировки?</p>
      <Radio
        options={[
          { label: 'Нет', value: 0 },
          { label: 'Да', value: 5 },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
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
