import { Calendar, Radio, StarRating } from '@/shared';
import React from 'react';
import { workFormStore } from '@/form';
import { Input, Title, Tooltip } from '@/ui';
import { IconInfoCircle, IconMessage2Exclamation } from '@tabler/icons-react';

export const CommentsAddWorkPrimary = () => {
  const { workForm, updateWorkForm } = workFormStore();

  const fromDate = workForm.primary.period.from
    ? new Date(workForm.primary.period.from)
    : null;

  const toDate = workForm.primary.period.to
    ? new Date(workForm.primary.period.to)
    : null;

  const handleFromChange = (date: Date | null) => {
    updateWorkForm({
      primary: {
        ...workForm.primary,
        period: {
          ...workForm.primary.period,
          from: date ? date.toISOString().split('T')[0] : '',
        },
      },
    });
  };

  const handleToChange = (date: Date | null) => {
    updateWorkForm({
      primary: {
        ...workForm.primary,
        period: {
          ...workForm.primary.period,
          to: date ? date.toISOString().split('T')[0] : '',
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-6 max-w-[900px] w-full m-auto">
      <Title>Оцените работу: Primary</Title>

      <div className="flex gap-2">
        <IconMessage2Exclamation stroke={1} width={50} />
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
          <IconMessage2Exclamation stroke={1} width={50} />
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
            value={workForm.primary.management}
            onChange={val =>
              updateWorkForm({
                primary: {
                  ...workForm.primary,
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
            value={workForm.primary.team}
            onChange={val =>
              updateWorkForm({
                primary: {
                  ...workForm.primary,
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
            value={workForm.primary.project}
            onChange={val =>
              updateWorkForm({
                primary: {
                  ...workForm.primary,
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
            value={workForm.primary.stack}
            onChange={val =>
              updateWorkForm({
                primary: {
                  ...workForm.primary,
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
            value={workForm.primary.workingSchedule}
            onChange={val =>
              updateWorkForm({
                primary: {
                  ...workForm.primary,
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
            value={workForm.primary.stability}
            onChange={val =>
              updateWorkForm({
                primary: {
                  ...workForm.primary,
                  stability: val,
                },
              })
            }
          />
        </div>

        <p>Уровень зарплаты</p>
        <Input
          type="number"
          value={workForm.primary.salary.value}
          onChange={val =>
            updateWorkForm({
              primary: {
                ...workForm.primary,
                salary: {
                  ...workForm.primary.salary,
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
              value: 1,
            },
            {
              label: 'В целом норм по рынку',
              value: 2,
            },
            {
              label: 'Полностью устраивала',
              value: 5,
            },
          ]}
          selectedValue={workForm.primary.salary.points}
          className="flex flex-col"
          onChange={val =>
            updateWorkForm({
              primary: {
                ...workForm.primary,
                salary: {
                  ...workForm.primary.salary,
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
              value: 2,
            },
            {
              label: 'Онлайн',
              value: 5,
            },
          ]}
          selectedValue={workForm.primary.workFormat}
          className="flex flex-col"
          onChange={val =>
            updateWorkForm({
              primary: {
                ...workForm.primary,
                workFormat: Number(val),
              },
            })
          }
        />
      </div>
    </div>
  );
};
