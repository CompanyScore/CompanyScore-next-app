'use client';

import { useState } from 'react';
import {
  commentFormStore,
  internshipFormStore,
  interviewFormStore,
  taskFormStore,
  workFormStore,
} from '@/form';

import {
  CommentsAddInterview,
  CommentsAddRecommendation,
  CommentsAddTask,
  CommentsAddWorkPrimary,
  CommentsAddWorkSecondary,
  CommentsAddWorkFinance,
  CommentsAddOptions,
  CommentsAddInternship,
} from './components';

import { Button, Toast, useToast } from '@/ui';
import { useCommentsStore } from '@/store';
import { redirect } from 'next/navigation';
import { useTaskStore } from '@/store/taskStore';

export default function CommentsPage() {
  const { commentForm } = commentFormStore();
  const { comments, postComment, error } = useCommentsStore();
  const { postTaskStore } = useTaskStore();
  const { taskForm } = taskFormStore();
  const { interviewForm } = interviewFormStore();
  const { internshipForm } = internshipFormStore();
  const { workForm } = workFormStore();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'options',
    ...(taskForm.isTask ? ['task'] : []),
    ...(interviewForm.isInterview ? ['interview'] : []),
    ...(internshipForm.isInternship ? ['intern'] : []),
    ...(workForm.isWork ? ['work'] : []),
    ...(workForm.isWork ? ['work2'] : []),
    ...(workForm.isWork ? ['work3'] : []),
    'recommendation',
  ];

  const toast = useToast();

  const log = () => {
    console.log('commentForm', commentForm);
    console.log('taskForm', taskForm);
    console.log('interviewForm', interviewForm);
    console.log('internshipForm', internshipForm);
    console.log('workForm', workForm);
  };

  const sendForm = async () => {
    try {
      const commentId = await postComment(commentForm);
      if (commentId) {
        const taskId = await postTaskStore(commentId);
        console.log(taskId);
      }
      toast.success('Отзыв успешно отправлен');
      console.log(commentId);
      console.log(comments);

      // redirect(`/comments/${commentId}`);
      redirect(`/comments`);
    } catch {
      toast.error(error);
    }
  };

  return (
    <section className="flex flex-col justify-center gap-8 py-8 md:py-10 max-w-[1280px] m-auto">
      {currentStep != 0 && (
        <progress
          className="progress"
          value={((currentStep + 1) * 100) / steps.length}
          max="100"
        />
      )}

      {steps[currentStep] === 'options' && <CommentsAddOptions />}
      {steps[currentStep] === 'task' && <CommentsAddTask />}
      {steps[currentStep] === 'interview' && <CommentsAddInterview />}
      {steps[currentStep] === 'intern' && <CommentsAddInternship />}
      {steps[currentStep] === 'work' && <CommentsAddWorkPrimary />}
      {steps[currentStep] === 'work2' && <CommentsAddWorkSecondary />}
      {steps[currentStep] === 'work3' && <CommentsAddWorkFinance />}
      {steps[currentStep] === 'recommendation' && <CommentsAddRecommendation />}

      <div className="flex justify-between mt-4">
        {currentStep != 0 && (
          <Button
            onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Назад
          </Button>
        )}

        <Button
          onClick={() => {
            if (currentStep < steps.length - 1) {
              setCurrentStep(prev => prev + 1);
            } else {
              sendForm();
            }
          }}
          className="btn-primary ml-auto"
        >
          {currentStep === steps.length - 1 ? 'Отправить' : 'Далее'}
        </Button>
      </div>

      <Button onClick={log} className="btn-secondary self-center">
        Log form
      </Button>
      <Toast />
    </section>
  );
}
