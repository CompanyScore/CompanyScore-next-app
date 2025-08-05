import { Calendar, Radio, StarRating } from '@/shared/ui';
import React from 'react';
import { useCommentWorkPrimaryForm } from '@/store/form';
import { Input, Title } from '@/shared/ui';
import { IconMessage2Exclamation } from '@tabler/icons-react';

export const AddWorkPrimary = () => {
  const { commentWorkPrimaryForm, updateCommentWorkPrimaryForm } =
    useCommentWorkPrimaryForm();

  const fromDate = commentWorkPrimaryForm.dateFrom
    ? new Date(commentWorkPrimaryForm.dateFrom)
    : null;

  const toDate = commentWorkPrimaryForm.dateTo
    ? new Date(commentWorkPrimaryForm.dateTo)
    : null;

  const handleFromChange = (date: Date | null) => {
    updateCommentWorkPrimaryForm({
      ...commentWorkPrimaryForm,
      dateFrom: date ?? null,
    });
  };

  const handleToChange = (date: Date | null) => {
    updateCommentWorkPrimaryForm({
      ...commentWorkPrimaryForm,
      dateTo: date ?? null,
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

        <div className="flex justify-between gap-2 w-full border-b-2 border-gray-300 pb-4">
          <div className="flex flex-col gap-2 max-w-80">
            <p>Руководоство</p>
            <p className="text-neutral-500 text-sm">
              Стиль управления, доступность и открытость руководства, качество
              обратной связи
            </p>
          </div>
          <StarRating
            value={commentWorkPrimaryForm.management}
            onChange={val =>
              updateCommentWorkPrimaryForm({
                ...commentWorkPrimaryForm,
                management: val,
              })
            }
          />
        </div>

        <div className="flex justify-between gap-2 w-full border-b-2 border-gray-300 pb-4">
          <div className="flex flex-col gap-2 max-w-80">
            <p>Копоративная культура</p>
            <p className="text-neutral-500 text-sm">
              Атмосфера в коллективе, ценности компании, поддержка, стиль
              общения
            </p>
          </div>
          <StarRating
            value={commentWorkPrimaryForm.team}
            onChange={val =>
              updateCommentWorkPrimaryForm({
                ...commentWorkPrimaryForm,
                team: val,
              })
            }
          />
        </div>

        <div className="flex justify-between gap-2 w-full border-b-2 border-gray-300 pb-4">
          <div className="flex flex-col gap-2 max-w-80">
            <p>Проекты</p>
            <p className="text-neutral-500 text-sm">
              Интересность, значимость и соответствие проектов вашим ожиданиям
            </p>
          </div>
          <StarRating
            value={commentWorkPrimaryForm.project}
            onChange={val =>
              updateCommentWorkPrimaryForm({
                ...commentWorkPrimaryForm,
                project: val,
              })
            }
          />
        </div>

        <div className="flex justify-between gap-2 w-full border-b-2 border-gray-300 pb-4">
          <div className="flex flex-col gap-2 max-w-80">
            <p>Технологии</p>
            <p className="text-neutral-500 text-sm">
              Уровень современных технологий и инструментов, используемых в
              работе
            </p>
          </div>
          <StarRating
            value={commentWorkPrimaryForm.stack}
            onChange={val =>
              updateCommentWorkPrimaryForm({
                ...commentWorkPrimaryForm,
                stack: val,
              })
            }
          />
        </div>

        <div className="flex justify-between gap-2 w-full border-b-2 border-gray-300 pb-4">
          <div className="flex flex-col gap-2 max-w-80">
            <p>Рабочий график</p>
            <p className="text-neutral-500 text-sm">
              Наличие переработок и сверхурочной работы, соблюдение нормального
              графика
            </p>
          </div>
          <StarRating
            value={commentWorkPrimaryForm.workingSchedule}
            onChange={val =>
              updateCommentWorkPrimaryForm({
                ...commentWorkPrimaryForm,
                workingSchedule: val,
              })
            }
          />
        </div>

        <div className="flex justify-between gap-2 w-full border-b-2 border-gray-300 pb-4">
          <div className="flex flex-col gap-2 max-w-80">
            <p>Стабильность</p>
            <p className="text-neutral-500 text-sm">
              Финансовая стабильность компании, своевременная оплата труда
            </p>
          </div>
          <StarRating
            value={commentWorkPrimaryForm.stability}
            onChange={val =>
              updateCommentWorkPrimaryForm({
                ...commentWorkPrimaryForm,
                stability: val,
              })
            }
          />
        </div>

        <p>Уровень зарплаты</p>
        <Input
          type="number"
          value={commentWorkPrimaryForm.salaryValue}
          onChange={val =>
            updateCommentWorkPrimaryForm({
              ...commentWorkPrimaryForm,
              salaryValue: Number(val),
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
          selectedValue={commentWorkPrimaryForm.salaryPoints}
          className="flex flex-col"
          onChange={val =>
            updateCommentWorkPrimaryForm({
              ...commentWorkPrimaryForm,
              salaryPoints: Number(val),
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
          selectedValue={commentWorkPrimaryForm.workFormat}
          className="flex flex-col"
          onChange={val =>
            updateCommentWorkPrimaryForm({
              ...commentWorkPrimaryForm,
              workFormat: Number(val),
            })
          }
        />
      </div>
    </div>
  );
};
