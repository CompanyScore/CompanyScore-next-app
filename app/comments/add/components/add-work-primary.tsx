import { Calendar, Radio, StarRating } from '@/shared';
import React from 'react';
import { useCommentWorkForm } from '@/store/form';
import { Input, Title, Tooltip } from '@/ui';
import { IconInfoCircle, IconMessage2Exclamation } from '@tabler/icons-react';

export const AddWorkPrimary = () => {
  const { commentWorkForm, updateCommentWorkForm } = useCommentWorkForm();

  const fromDate = commentWorkForm.primary.period.from
    ? new Date(commentWorkForm.primary.period.from)
    : null;

  const toDate = commentWorkForm.primary.period.to
    ? new Date(commentWorkForm.primary.period.to)
    : null;

  const handleFromChange = (date: Date | null) => {
    updateCommentWorkForm({
      primary: {
        ...commentWorkForm.primary,
        period: {
          ...commentWorkForm.primary.period,
          from: date ? date.toISOString().split('T')[0] : '',
        },
      },
    });
  };

  const handleToChange = (date: Date | null) => {
    updateCommentWorkForm({
      primary: {
        ...commentWorkForm.primary,
        period: {
          ...commentWorkForm.primary.period,
          to: date ? date.toISOString().split('T')[0] : '',
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу: Primary</Title>

      <div className="flex gap-2">
        <IconMessage2Exclamation stroke={1} />
        <p>
          Эти вопросы влияют на итоговую оценку компании. Мы считаем их
          ключевыми — именно они чаще всего определяют, останется ли человек в
          компании. Отсутствие даже одного из этих пунктов может стать причиной
          увольнения.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>Период работы</p>
        <div className="flex gap-2">
          <IconMessage2Exclamation stroke={1} />
          <p>
            Это информация будет использоваться для аналитики и не будет
            публиковаться в отзывах
          </p>
        </div>
        <div className="flex gap-4">
          <Calendar label="От" value={fromDate} onChange={handleFromChange} />
          <Calendar label="До" value={toDate} onChange={handleToChange} />
        </div>

        <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-4">
          <div className="flex items-center gap-2">
            <p>Руководоство</p>
            <Tooltip tip="Стиль управления, доступность и открытость руководства, качество обратной связи">
              <IconInfoCircle stroke={1} />
            </Tooltip>
          </div>
          <StarRating
            value={commentWorkForm.primary.management}
            onChange={val =>
              updateCommentWorkForm({
                primary: {
                  ...commentWorkForm.primary,
                  management: val,
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
            value={commentWorkForm.primary.team}
            onChange={val =>
              updateCommentWorkForm({
                primary: {
                  ...commentWorkForm.primary,
                  team: val,
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
            value={commentWorkForm.primary.project}
            onChange={val =>
              updateCommentWorkForm({
                primary: {
                  ...commentWorkForm.primary,
                  project: val,
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
            value={commentWorkForm.primary.stack}
            onChange={val =>
              updateCommentWorkForm({
                primary: {
                  ...commentWorkForm.primary,
                  stack: val,
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
            value={commentWorkForm.primary.workingSchedule}
            onChange={val =>
              updateCommentWorkForm({
                primary: {
                  ...commentWorkForm.primary,
                  workingSchedule: val,
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
            value={commentWorkForm.primary.stability}
            onChange={val =>
              updateCommentWorkForm({
                primary: {
                  ...commentWorkForm.primary,
                  stability: val,
                },
              })
            }
          />
        </div>

        <p>Уровень зарплаты</p>
        <Input
          type="number"
          value={commentWorkForm.primary.salary.value}
          onChange={val =>
            updateCommentWorkForm({
              primary: {
                ...commentWorkForm.primary,
                salary: {
                  ...commentWorkForm.primary.salary,
                  value: Number(val),
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
              value: 300,
            },
            {
              label: 'В целом норм по рынку',
              value: 600,
            },
            {
              label: 'Полностью устраивала',
              value: 1000,
            },
          ]}
          selectedValue={commentWorkForm.primary.salary.points}
          className="flex flex-col"
          onChange={val =>
            updateCommentWorkForm({
              primary: {
                ...commentWorkForm.primary,
                salary: {
                  ...commentWorkForm.primary.salary,
                  points: Number(val),
                },
              },
            })
          }
        />

        <p>Выберите возможность формата работы</p>
        <Radio
          options={[
            {
              label: 'Офис',
              value: 0,
            },
            {
              label: 'Гибрид',
              value: 500,
            },
            {
              label: 'Онлайн',
              value: 1000,
            },
          ]}
          selectedValue={commentWorkForm.primary.workFormat}
          className="flex flex-col"
          onChange={val =>
            updateCommentWorkForm({
              primary: {
                ...commentWorkForm.primary,
                workFormat: Number(val),
              },
            })
          }
        />
      </div>
    </div>
  );
};
