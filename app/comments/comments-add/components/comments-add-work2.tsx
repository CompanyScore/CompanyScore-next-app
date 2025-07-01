import { Checkbox, Radio } from '@/shared';
import { Title, Tooltip } from '@/ui';
import { IconInfoCircle } from '@tabler/icons-react';

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

      <div className="flex items-center gap-2">
        <p>
          Как вы оцениваете этичность компании и её социальную ответственность?
        </p>
        <Tooltip tip="Оцениваются честность, порядочность компании и её отношение к сотрудникам, обществу и окружающей среде">
          <IconInfoCircle stroke={1} />
        </Tooltip>
      </div>
      <Radio
        options={[
          {
            label: 'Есть проблемы с этикой и заботой о людях',
            value: 5,
          },
          {
            label: 'Этичность скорее формальная',
            value: 2,
          },
          {
            label: 'В целом соблюдает нормы',
            value: 0,
          },
          {
            label: 'Компания ведёт себя честно и проявляет заботу о людях',
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
        Организовывала ли компания за свой счёт корпоративные мероприятия
        (праздники, выезды, тимбилдинги)?
      </p>
      <Radio
        options={[
          {
            label: 'Мероприятий не было',
            value: 5,
          },
          {
            label: 'Проводились редко',
            value: 2,
          },
          {
            label: 'Проводили, было норм',
            value: 0,
          },
          {
            label: 'Часто и на хорошем уровне',
            value: 0,
          },
        ]}
        selectedValue={'value'}
        onChange={value => console.log(value)}
        className="flex"
      />

      <p>
        Какие формы обучения или повышения квалификации поддерживала компания?
      </p>
      <Checkbox
        label="Онлайн-курсы (оплата видеокурсов и платформ)"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Очные курсы или тренинги"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Обучение в вузе / магистратуре / MBA"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Частичная оплата обучения"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Воркшопы и лекции внутри компании"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
      <Checkbox
        label="Командировки на обучение или конференции"
        value="interview"
        selected={false} // Replace with actual state
        onChange={() => console.log('checkbox change')}
      />
    </div>
  );
};
