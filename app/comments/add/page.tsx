'use client';

import { useState } from 'react';
import {
  commentFormStore,
  internshipFormStore,
  interviewFormStore,
  taskFormStore,
  workFormStore,
} from '@/store/form';

import {
  AddInterview,
  AddRecommendation,
  AddTask,
  AddWorkPrimary,
  AddWorkSecondary,
  AddWorkFinance,
  AddOptions,
  AddInternship,
} from './components';

import { Button, Toast, useToast } from '@/ui';
import {
  useCommentInterviewApi,
  useCommentApi,
  useCommentTaskApi,
} from '@/store/api';
import { redirect } from 'next/navigation';

export default function CommentsPage() {
  const { commentForm } = commentFormStore();
  const { comments, postComment, error } = useCommentApi();
  const { createInterviewForm } = useCommentInterviewApi();
  const { postTaskStore } = useCommentTaskApi();
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

      if (commentId && taskForm.isTask) {
        const taskId = await postTaskStore(commentId);
        console.log(taskId);
      }

      if (commentId && interviewForm.isInterview) {
        const taskId = await createInterviewForm(commentId);
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

      {steps[currentStep] === 'options' && <AddOptions />}
      {steps[currentStep] === 'task' && <AddTask />}
      {steps[currentStep] === 'interview' && <AddInterview />}
      {steps[currentStep] === 'intern' && <AddInternship />}
      {steps[currentStep] === 'work' && <AddWorkPrimary />}
      {steps[currentStep] === 'work2' && <AddWorkSecondary />}
      {steps[currentStep] === 'work3' && <AddWorkFinance />}
      {steps[currentStep] === 'recommendation' && <AddRecommendation />}

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
