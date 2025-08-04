import React from 'react';
import { useCommentTaskForm } from '@/store/form';
import { Radio, StarRating } from '@/shared/ui';
import { Title } from '@/shared/ui';

export const AddTask = () => {
  const { commentTaskForm, updateCommentTaskForm } = useCommentTaskForm();

  return (
    <div className="flex flex-col gap-6  max-w-[900px] w-full m-auto">
      <Title>Оцените тестовое задание</Title>
      <div className="flex flex-col gap-4 w-full">
        <p>
          Насколько чётко были сформулированы требования к тестовому заданию?
        </p>
        <StarRating
          value={commentTaskForm.requirementsForTask}
          onChange={val =>
            updateCommentTaskForm({
              ...commentTaskForm,
              requirementsForTask: val,
            })
          }
        />

        <p>
          Насколько задание соответствовало уровню и содержанию предполагаемой
          должности?
        </p>
        <StarRating
          value={commentTaskForm.taskLevel}
          onChange={val =>
            updateCommentTaskForm({ ...commentTaskForm, taskLevel: val })
          }
        />

        <p>Насколько справедливо и объективно оценили ваше тестовое задание?</p>
        <StarRating
          value={commentTaskForm.fairAssessment}
          onChange={val =>
            updateCommentTaskForm({ ...commentTaskForm, fairAssessment: val })
          }
        />

        <p>Насколько разумным был объём и срок выполнения задания?</p>
        <StarRating
          value={commentTaskForm.taskSize}
          onChange={val =>
            updateCommentTaskForm({ ...commentTaskForm, taskSize: val })
          }
        />

        <p>Насколько тестовое задание отражало реальные задачи в компании?</p>
        <StarRating
          value={commentTaskForm.realWork}
          onChange={val =>
            updateCommentTaskForm({ ...commentTaskForm, realWork: val })
          }
        />

        <p>Получили ли вы обратную связь по результатам?</p>

        <Radio
          options={[
            {
              label: 'Нет',
              value: 0,
            },
            {
              label: 'Шаблонный ответ',
              value: 500,
            },
            {
              label: 'Развернутый ответ',
              value: 1000,
            },
          ]}
          selectedValue={commentTaskForm.feedback}
          onChange={val =>
            updateCommentTaskForm({ ...commentTaskForm, feedback: Number(val) })
          }
        />
      </div>
    </div>
  );
};
