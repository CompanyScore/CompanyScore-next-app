import { Checkbox } from '@/shared';
import React from 'react';
import { useCommentFormStore2 } from '@/store';

export const CommentsAddOptions = () => {
  const { form, updateForm } = useCommentFormStore2();

  const handleCheckboxTask = () => {
    updateForm({
      task: {
        ...form.task,
        isTask: !form.task.isTask,
      },
    });
  };

  const handleCheckboxInterview = () => {
    updateForm({
      interview: {
        ...form.interview,
        isInterview: !form.interview.isInterview,
      },
    });
  };

  const handleCheckboxIntern = () => {
    updateForm({
      intern: {
        ...form.intern,
        isIntern: !form.intern.isIntern,
      },
    });
  };

  const handleCheckboxWork = () => {
    updateForm({
      work: {
        ...form.work,
        isWork: !form.work.isWork,
      },
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Checkbox
        label="Я выполнял тестовое задание"
        value="task"
        selected={form.task.isTask}
        onChange={handleCheckboxTask}
      />
      <Checkbox
        label="Я проходил собеседование"
        value="interview"
        selected={form.interview.isInterview}
        onChange={handleCheckboxInterview}
      />
      <Checkbox
        label="Я проходил стажировку"
        value="intern"
        selected={form.intern.isIntern}
        onChange={handleCheckboxIntern}
      />
      <Checkbox
        label="Я работал/работаю в компании"
        value="work"
        selected={form.work.isWork}
        onChange={handleCheckboxWork}
      />
    </div>
  );
};
