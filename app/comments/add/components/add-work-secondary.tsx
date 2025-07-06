import { useCommentWorkForm } from '@/store/form';
import { Checkbox, Radio } from '@/shared';
import { useWorkEducationApi } from '@/store/api';
import { Title, Tooltip } from '@/ui';
import { IconInfoCircle } from '@tabler/icons-react';
import { useEffect } from 'react';

export const AddWorkSecondary = () => {
  const { items, getWorkEducation, loading } = useWorkEducationApi();
  const { commentWorkForm, updateCommentWorkForm } = useCommentWorkForm();

  useEffect(() => {
    getWorkEducation();
  }, [getWorkEducation]);

  const handleChange = (id: string) => {
    const selected = commentWorkForm.secondary.education.includes(id)
      ? commentWorkForm.secondary.education.filter(e => e !== id)
      : [...commentWorkForm.secondary.education, id];

    updateCommentWorkForm({
      secondary: {
        ...commentWorkForm.secondary,
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
        selectedValue={commentWorkForm.secondary.development}
        onChange={val =>
          updateCommentWorkForm({
            secondary: {
              ...commentWorkForm.secondary,
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
        selectedValue={commentWorkForm.secondary.comfort}
        onChange={val =>
          updateCommentWorkForm({
            secondary: {
              ...commentWorkForm.secondary,
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
        selectedValue={commentWorkForm.secondary.discrimination}
        onChange={val =>
          updateCommentWorkForm({
            secondary: {
              ...commentWorkForm.secondary,
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
        selectedValue={commentWorkForm.secondary.ethics}
        onChange={val =>
          updateCommentWorkForm({
            secondary: {
              ...commentWorkForm.secondary,
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
        selectedValue={commentWorkForm.secondary.performanceReview}
        onChange={val =>
          updateCommentWorkForm({
            secondary: {
              ...commentWorkForm.secondary,
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
        selectedValue={commentWorkForm.secondary.events}
        onChange={val =>
          updateCommentWorkForm({
            secondary: {
              ...commentWorkForm.secondary,
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

            const isSelected = commentWorkForm.secondary.education.includes(
              item.id,
            );

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
