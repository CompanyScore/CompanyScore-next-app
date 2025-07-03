import { workFormStore } from '@/form';
import { Checkbox, Radio } from '@/shared';
import { useWorkEducationStore } from '@/store';
import { Title, Tooltip } from '@/ui';
import { IconInfoCircle } from '@tabler/icons-react';
import { useEffect } from 'react';

export const CommentsAddWorkSecondary = () => {
  const { items, getWorkEducation, loading } = useWorkEducationStore();
  const { workForm, updateWorkForm } = workFormStore();

  useEffect(() => {
    getWorkEducation();
  }, [getWorkEducation]);

  const handleChange = (id: string) => {
    const selected = workForm.secondary.education.includes(id)
      ? workForm.secondary.education.filter(e => e !== id)
      : [...workForm.secondary.education, id];

    updateWorkForm({
      secondary: {
        ...workForm.secondary,
        education: selected,
      },
    });
  };

  if (loading) return <p>Загрузка...</p>;

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу: Secondary</Title>

      <p>
        Насколько рабочие задачи соответствовали должности и способствовали
        вашему профессиональному развитию?
      </p>
      <Radio
        options={[
          {
            label: 'Задачи не соответствовали должности и не развивали',
            value: 0,
          },
          {
            label: 'В целом соответствовали, но развитие ограниченное',
            value: 2,
          },
          {
            label: 'Полностью соответствовали и активно развивали навыки',
            value: 5,
          },
        ]}
        selectedValue={workForm.secondary.development}
        onChange={val =>
          updateWorkForm({
            secondary: {
              ...workForm.secondary,
              development: Number(val),
            },
          })
        }
        className="flex flex-col"
      />

      <p>Насколько комфортной и удобной была ваша рабочая среда в офисе?</p>
      <Radio
        options={[
          {
            label: 'Очень некомфортно, мешало работе',
            value: 0,
          },
          {
            label: 'Нейтрально, терпимо, но можно улучшить',
            value: 2,
          },
          {
            label: 'Максимально комфортно, всё устраивало',
            value: 5,
          },
        ]}
        selectedValue={workForm.secondary.comfort}
        onChange={val =>
          updateWorkForm({
            secondary: {
              ...workForm.secondary,
              comfort: Number(val),
            },
          })
        }
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
            label: 'Да',
            value: 0,
          },
        ]}
        selectedValue={workForm.secondary.discrimination}
        onChange={val =>
          updateWorkForm({
            secondary: {
              ...workForm.secondary,
              discrimination: Number(val),
            },
          })
        }
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
            value: 0,
          },
          {
            label: 'Этичность скорее формальная',
            value: 1,
          },
          {
            label: 'В целом соблюдает нормы',
            value: 3,
          },
          {
            label: 'Компания ведёт себя честно и проявляет заботу о людях',
            value: 5,
          },
        ]}
        selectedValue={workForm.secondary.ethics}
        onChange={val =>
          updateWorkForm({
            secondary: {
              ...workForm.secondary,
              ethics: Number(val),
            },
          })
        }
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
            value: 0,
          },
          {
            label: '3 месяца',
            value: 2,
          },
          {
            label: 'Полгода',
            value: 3,
          },
          {
            label: 'Год',
            value: 5,
          },
        ]}
        selectedValue={workForm.secondary.performanceReview}
        onChange={val =>
          updateWorkForm({
            secondary: {
              ...workForm.secondary,
              performanceReview: Number(val),
            },
          })
        }
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
            value: 0,
          },
          {
            label: 'Проводились редко',
            value: 1,
          },
          {
            label: 'Проводили, было норм',
            value: 3,
          },
          {
            label: 'Часто и на хорошем уровне',
            value: 5,
          },
        ]}
        selectedValue={workForm.secondary.events}
        onChange={val =>
          updateWorkForm({
            secondary: {
              ...workForm.secondary,
              events: Number(val),
            },
          })
        }
        className="flex"
      />

      <p>
        Какие формы обучения или повышения квалификации поддерживала компания?
      </p>
      <div className="flex flex-col gap-2">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          items.map(item => (
            <Checkbox
              key={item.id}
              value={item.id}
              label={item.label}
              selected={workForm.secondary.education.includes(item.id)}
              onChange={() => handleChange(item.id)}
            />
          ))
        )}
      </div>

      {/* <Checkbox
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
      /> */}
    </div>
  );
};
