import { Checkbox } from '@/shared';
import { Title } from '@/ui';
import React from 'react';
import { useCommentFormStore } from '@/store';

export const CommentsAddStages = () => {
  const { form, updateForm } = useCommentFormStore();

  const handleCheckboxChange = (key: 'task' | 'interview' | 'work') => {
    if (key === 'task') {
      updateForm({ task: { ...form.task, isTask: !form.task.isTask } });
    }

    if (key === 'interview') {
      updateForm({
        interview: {
          ...form.interview,
          isInterview: !form.interview.isInterview,
        },
      });
    }

    if (key === 'work') {
      updateForm({ work: { ...form.work, isWork: !form.work.isWork } });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Title size="2">Выберите этапы, которые вы проходили</Title>
      <div className="flex flex-col gap-4 w-full max-w-xl m-auto">
        <Checkbox
          label="Проходил тех. задание"
          value="task"
          selected={form.task.isTask}
          onChange={() => handleCheckboxChange('task')}
        />

        <Checkbox
          label="Проходил собеседование"
          value="interview"
          selected={form.interview.isInterview}
          onChange={() => handleCheckboxChange('interview')}
        />

        <Checkbox
          label="Работал/Работаю"
          value="work"
          selected={form.work.isWork}
          onChange={() => handleCheckboxChange('work')}
        />
      </div>
    </div>
  );
};
