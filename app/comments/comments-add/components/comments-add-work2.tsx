import { Radio } from '@/shared';
import { Title } from '@/ui';

export const CommentsAddWork2 = () => {
  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу 2</Title>

      <p>
        Насколько рабочие задачи соответствовали должности и способствовали
        вашему профессиональному развитию?
      </p>
      <Radio
        options={[
          {
            label: 'Задачи не соответствовали должности и не развивали',
            value: 5,
          },
          {
            label: 'В целом соответствовали, но развитие ограниченное',
            value: 2,
          },
          {
            label: 'Полностью соответствовали и активно развивали навыки',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex flex-col"
      />

      <p>Насколько комфортной и удобной была ваша рабочая среда в офисе?</p>
      <Radio
        options={[
          {
            label: 'Очень некомфортно, мешало работе',
            value: 5,
          },
          {
            label: 'Нейтрально, терпимо, но можно улучшить',
            value: 2,
          },
          {
            label: 'Максимально комфортно, всё устраивало',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex flex-col"
      />

      <p>
        Были ли вы свидетелем дискриминации по полу, возрасту, этнической
        принадлежности и так далее?
      </p>
      <Radio
        options={[
          {
            label: 'Нет',
            value: 5,
          },
          {
            label: 'Иногда',
            value: 2,
          },
          {
            label: 'Да',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex"
      />

      <p>
        Насколько вам удавалось сохранять баланс между работой и личной
        жизнью?????
      </p>
      <Radio
        options={[
          {
            label: 'Не удавалось',
            value: 5,
          },
          {
            label: 'Удавалось тяжело',
            value: 2,
          },
          {
            label: 'Умеренно удавалось',
            value: 0,
          },
          {
            label: 'Легко удавалось',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex"
      />

      <p>
        Как вы оцениваете этичность компании и её социальную ответственность?
      </p>
      <Radio
        options={[
          {
            label: 'Есть проблемы с этикой и заботой о людях',
            value: 5,
          },
          {
            label: 'Неэтично, ответственности перед обществом нет',
            value: 2,
          },
          {
            label: 'В целом нормально, без ярких примеров',
            value: 0,
          },
          {
            label: 'Этичная компания, социально ответственная',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex flex-col"
      />

      <p>
        Проводилась ли в компании регулярная оценка эффективности вашей работы
        (Performance Review)?
      </p>
      <Radio
        options={[
          {
            label: 'Нет',
            value: 5,
          },
          {
            label: '3 месяца',
            value: 2,
          },
          {
            label: 'Полгода',
            value: 0,
          },
          {
            label: 'Год',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex"
      />

      <p>
        Насколько вы были удовлетворены корпоративными мероприятиями в компании?
      </p>
      <Radio
        options={[
          {
            label: 'Не было мероприятий',
            value: 5,
          },
          {
            label: 'Скорее не удовлетворён',
            value: 2,
          },
          {
            label: 'Нормально',
            value: 0,
          },
          {
            label: 'Полностью удовлетворён',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex"
      />
    </div>
  );
};
