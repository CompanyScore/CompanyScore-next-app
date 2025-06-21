import { Checkbox, Radio, StarRating } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
// import { useCommentFormStore2 } from '@/store';

export const CommentsAddInterview = () => {
  // const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените собеседование</Title>
      <div className="flex flex-col gap-4 w-full m-auto">
        <p>Насколько описание вакансии соответствовало этой позиции ?</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>Насколько чётко и грамотно были организованы этапы собеседования?</p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>
          Насколько вежливо и уважительно с вами общались представители
          компании?
        </p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>
          Насколько вопросы на собеседовании соответствовали должности и
          предполагаемым задачам?
        </p>
        <StarRating value={0} onChange={() => console.log('value')} />

        <p>
          Какие этапы были в вашем собеседовании? (отметьте всё, что применимо)
        </p>
        <Checkbox
          label="Тест (логика, аналитика, профнавыки)"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
        <Checkbox
          label="Прохождение видеособеседования (запись ответов на камеру без интервьюера)"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
        <Checkbox
          label="Интервью с руководителем / техническим специалистом"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
        <Checkbox
          label="Интервью с командой"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
        <Checkbox
          label="Выполняли ли вы кейс-задания / бизнес-кейсы? Если да укажите количество"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />

        <p>
          Сколько времени занял весь процесс собеседований — от подачи заявки до
          финального ответа?
        </p>

        <Radio
          options={[
            { label: 'ТМенее 3 дней', value: 5 },
            { label: '3-7 дней', value: 2 },
            {
              label: '1-2 недели',
              value: 0,
            },
            {
              label: 'Около месяца',
              value: 0,
            },
            { label: 'Более 2 месяцев', value: 0 },
          ]}
          selectedValue={'value'}
          onChange={value => console.log(value)}
          className="flex flex-col"
        />
        {/* <StarRating
          value={form.interview.rating}
          onChange={val =>
            updateForm({ interview: { ...form.interview, rating: val } })
          }
        /> */}

        <p>Была ли обратная связь после интервью?</p>
        <Radio
          options={[
            { label: 'Нет', value: 5 },
            { label: 'Шаблонный ответ', value: 2 },
            {
              label: 'Развернутый ответ',
              value: 0,
            },
          ]}
          selectedValue={'value'}
          onChange={value => console.log(value)}
        />

        {/* <textarea
          className="textarea textarea-primary w-full"
          placeholder="Поделитесь опытом собеседования"
          value={form.interview.text}
          onChange={e =>
            updateForm({
              interview: { ...form.interview, text: e.target.value },
            })
          }
        /> */}
      </div>
    </div>
  );
};
