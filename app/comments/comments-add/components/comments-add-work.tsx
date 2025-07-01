import { Calendar, Checkbox, Radio, StarRating } from '@/shared';
import React from 'react';
import { useCommentFormStore2 } from '@/store';
import { Input, Title, Tooltip } from '@/ui';
import { IconInfoCircle } from '@tabler/icons-react';

export const CommentsAddWork = () => {
  const { form, updateForm } = useCommentFormStore2();

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      {/* <div className="flex flex-col gap-4 w-full">
        <Title>Период работы в компании</Title>
        <div className="flex gap-4 m-auto">
          <Calendar />
          <Calendar />
        </div>
      </div> */}

      <Title>Оцените работу</Title>

      <p>
        icon! Эти вопросы влияют на итоговую оценку компании. Мы считаем их
        ключевыми — именно они чаще всего определяют, останется ли человек в
        компании. Отсутствие даже одного из этих пунктов может стать причиной
        увольнения.
      </p>

      <div className="flex flex-col gap-4">
        <p>Период работы</p>
        <p>
          icon! Это информация будет использоваться для аналитики и не будет
          публиковаться в отзывах
        </p>
        <div className="flex">
          <Calendar />
          <Calendar />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <div className="flex items-center gap-2">
            <p>Руководоство</p>
            <Tooltip tip="Стиль управления, доступность и открытость руководства, качество обратной связи">
              <IconInfoCircle stroke={1} />
            </Tooltip>
          </div>
          <StarRating
            value={form.work.rating.management}
            onChange={val =>
              updateForm({
                work: {
                  ...form.work,
                  rating: {
                    ...form.work.rating,
                    management: val,
                  },
                },
              })
            }
          />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <div className="flex items-center  gap-2">
            <p>Копоративная культура</p>
            <Tooltip tip="Атмосфера в коллективе, ценности компании, поддержка, стиль общения">
              <IconInfoCircle stroke={1} />
            </Tooltip>
          </div>
          <StarRating
            value={form.work.rating.team}
            onChange={val =>
              updateForm({
                work: {
                  ...form.work,
                  rating: {
                    ...form.work.rating,
                    team: val,
                  },
                },
              })
            }
          />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <div className="flex items-center  gap-2">
            <p>Проекты</p>
            <Tooltip tip="Интересность, значимость и соответствие проектов вашим ожиданиям">
              <IconInfoCircle stroke={1} />
            </Tooltip>
          </div>
          <StarRating
            value={form.work.rating.project}
            onChange={val =>
              updateForm({
                work: {
                  ...form.work,
                  rating: {
                    ...form.work.rating,
                    project: val,
                  },
                },
              })
            }
          />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <div className="flex items-center  gap-2">
            <p>Технологии</p>
            <Tooltip tip="Уровень современных технологий и инструментов, используемых в работе">
              <IconInfoCircle stroke={1} />
            </Tooltip>
          </div>
          <StarRating
            value={form.work.rating.stack}
            onChange={val =>
              updateForm({
                work: {
                  ...form.work,
                  rating: {
                    ...form.work.rating,
                    stack: val,
                  },
                },
              })
            }
          />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <div className="flex items-center  gap-2">
            <p>Рабочий график</p>
            <Tooltip tip="Наличие переработок и сверхурочной работы, соблюдение нормального графика">
              <IconInfoCircle stroke={1} />
            </Tooltip>
          </div>
          <StarRating
            value={form.work.rating.stack}
            onChange={val =>
              updateForm({
                work: {
                  ...form.work,
                  rating: {
                    ...form.work.rating,
                    stack: val,
                  },
                },
              })
            }
          />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <div className="flex items-center  gap-2">
            <p>Стабильность</p>
            <Tooltip tip="Финансовая стабильность компании, своевременная оплата труда">
              <IconInfoCircle stroke={1} />
            </Tooltip>
          </div>
          <StarRating
            value={form.work.rating.stack}
            onChange={val =>
              updateForm({
                work: {
                  ...form.work,
                  rating: {
                    ...form.work.rating,
                    stack: val,
                  },
                },
              })
            }
          />
        </div>

        <p>Уровень зарплаты</p>
        <Input
          type="number"
          value={form.work.finance.salary}
          onChange={val =>
            updateForm({
              work: {
                ...form.work,
                finance: {
                  ...form.work.finance,
                  salary: Number(val),
                },
              },
            })
          }
        />

        <p>Оцените удовлетворенность уровнем заработной платы?</p>
        <Radio
          options={[
            {
              label: 'Совершенно не удовлетворён',
              value: 0,
            },
            {
              label: 'Ниже рынка',
              value: 2,
            },
            {
              label: 'В целом норм по рынку',
              value: 5,
            },
            {
              label: 'Полностью устраивала',
              value: 5,
            },
          ]}
          selectedValue={form.work.rating.workFormat}
          className="flex flex-col"
          onChange={val =>
            updateForm({
              work: {
                ...form.work,
                rating: {
                  ...form.work.rating,
                  workFormat: Number(val),
                },
              },
            })
          }
        />

        <p>Выберите возможность формата работы</p>
        <Checkbox
          label="Офис"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
        <Checkbox
          label="Гибрид"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
        <Checkbox
          label="Онлайн"
          value="interview"
          selected={false} // Replace with actual state
          onChange={() => console.log('checkbox change')}
        />
      </div>
    </div>
  );
};
