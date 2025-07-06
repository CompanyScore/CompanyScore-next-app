import React from 'react';
import { taskFormStore } from '@/store/form';
import { Radio, StarRating } from '@/shared';
import { Title } from '@/ui';

export const AddTask = () => {
  const { taskForm, updateTaskForm } = taskFormStore();

  return (
    <div className="flex flex-col gap-6  max-w-[900px] w-full m-auto">
      <Title>Оцените тестовое задание</Title>
      <div className="flex flex-col gap-4 w-full">
        <p>
          Насколько чётко были сформулированы требования к тестовому заданию?
        </p>
        <StarRating
          value={taskForm.requirementsForTask}
          onChange={val =>
            updateTaskForm({ ...taskForm, requirementsForTask: val })
          }
        />

        <p>
          Насколько задание соответствовало уровню и содержанию предполагаемой
          должности?
        </p>
        <StarRating
          value={taskForm.taskLevel}
          onChange={val => updateTaskForm({ ...taskForm, taskLevel: val })}
        />

        <p>Насколько справедливо и объективно оценили ваше тестовое задание?</p>
        <StarRating
          value={taskForm.fairAssessment}
          onChange={val => updateTaskForm({ ...taskForm, fairAssessment: val })}
        />

        <p>Насколько разумным был объём и срок выполнения задания?</p>
        <StarRating
          value={taskForm.taskSize}
          onChange={val => updateTaskForm({ ...taskForm, taskSize: val })}
        />

        <p>Насколько тестовое задание отражало реальные задачи в компании?</p>
        <StarRating
          value={taskForm.realWork}
          onChange={val => updateTaskForm({ ...taskForm, realWork: val })}
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
          selectedValue={taskForm.feedback}
          onChange={val =>
            updateTaskForm({ ...taskForm, feedback: Number(val) })
          }
        />
      </div>
    </div>
  );
};
