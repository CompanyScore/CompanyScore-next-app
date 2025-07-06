import { workFormStore } from '@/store/form';
import { Checkbox, Radio } from '@/shared';
import { useWorkEducationStore } from '@/store/api';
import { Title, Tooltip } from '@/ui';
import { IconInfoCircle } from '@tabler/icons-react';
import { useEffect } from 'react';

export const AddWorkSecondary = () => {
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
            value: 500,
          },
          {
            label: 'Полностью соответствовали и активно развивали навыки',
            value: 1000,
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
            value: 500,
          },
          {
            label: 'Максимально комфортно, всё устраивало',
            value: 1000,
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
            value: 0,
          },
          {
            label: 'Да',
            value: 1000,
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
            value: 300,
          },
          {
            label: 'В целом соблюдает нормы',
            value: 600,
          },
          {
            label: 'Компания ведёт себя честно и проявляет заботу о людях',
            value: 1000,
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
            value: 300,
          },
          {
            label: 'Полгода',
            value: 600,
          },
          {
            label: 'Год',
            value: 1000,
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
            value: 300,
          },
          {
            label: 'Проводили, было норм',
            value: 600,
          },
          {
            label: 'Часто и на хорошем уровне',
            value: 1000,
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
        className="flex flex-col"
      />

      <p>
        Какие формы обучения или повышения квалификации поддерживала компания?
      </p>
      <div className="flex flex-col gap-2">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          items.map(item => {
            const withTooltip = {
              part_uni_pay:
                'Компания оплачивала часть стоимости обучения в колледже, университете или MBA.',
              full_uni_pay:
                'Компания оплачивала полную стоимость обучения в колледже, университете или MBA.',
              trainings:
                'Практические обучающие сессии или лекции внутри компании',
            } as Record<string, string>;

            const isSelected = workForm.secondary.education.includes(item.id);

            return (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox
                  value={item.id}
                  label={item.label}
                  selected={isSelected}
                  onChange={() => handleChange(item.id)}
                />
                {withTooltip[item.id] && (
                  <Tooltip tip={withTooltip[item.id]}>
                    <IconInfoCircle stroke={1} />
                  </Tooltip>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
