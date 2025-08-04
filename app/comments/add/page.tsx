'use client';

import { useState } from 'react';
import {
  useCommentForm,
  useCommentInternshipForm,
  useCommentInterviewForm,
  useCommentTaskForm,
  useCommentWorkPrimaryForm,
  useCommentWorkSecondaryForm,
  useCommentWorkFinanceForm,
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

import { Button, Toast, useToast } from '@/shared/ui';
import {
  useCommentInterviewApi,
  useCommentApi,
  useCommentTaskApi,
  useCommentInternshipApi,
  useCommentWorkPrimaryApi,
  useCommentWorkSecondaryApi,
  useCommentWorkFinanceApi,
} from '@/store/api';
import { redirect } from 'next/navigation';

export default function CommentsPage() {
  const { commentForm } = useCommentForm();
  const { comments, postComment, error } = useCommentApi();
  const { createInterviewForm } = useCommentInterviewApi();
  const { createInternshipForm } = useCommentInternshipApi();
  const { postTaskStore } = useCommentTaskApi();
  const { commentTaskForm } = useCommentTaskForm();
  const { commentInterviewForm } = useCommentInterviewForm();
  const { commentInternshipForm } = useCommentInternshipForm();
  const { createCommentWorkPrimaryForm } = useCommentWorkPrimaryApi();
  const { createCommentWorkSecondaryForm } = useCommentWorkSecondaryApi();
  const { createCommentWorkFinanceForm } = useCommentWorkFinanceApi();
  const { commentWorkPrimaryForm } = useCommentWorkPrimaryForm();
  const { commentWorkSecondaryForm } = useCommentWorkSecondaryForm();
  const { commentWorkFinanceForm } = useCommentWorkFinanceForm();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'options',
    ...(commentTaskForm.isTask ? ['task'] : []),
    ...(commentInterviewForm.isInterview ? ['interview'] : []),
    ...(commentInternshipForm.isInternship ? ['intern'] : []),
    ...(commentWorkPrimaryForm.isWork ? ['work'] : []),
    ...(commentWorkPrimaryForm.isWork ? ['work2'] : []),
    ...(commentWorkPrimaryForm.isWork ? ['work3'] : []),
    'recommendation',
  ];

  const toast = useToast();

  const log = () => {
    console.log('commentForm', commentForm);
    console.log('commentTaskForm', commentTaskForm);
    console.log('commentInterviewForm', commentInterviewForm);
    console.log('commentInternshipForm', commentInternshipForm);
    console.log('commentWorkPrimaryForm', commentWorkPrimaryForm);
    console.log('commentWorkSecondaryForm', commentWorkSecondaryForm);
    console.log('commentWorkFinanceForm', commentWorkFinanceForm);
  };

  const sendForm = async () => {
    try {
      const commentId = await postComment();

      if (commentId && commentTaskForm.isTask) {
        const taskId = await postTaskStore(commentId);
        console.log(taskId);
      }

      if (commentId && commentInterviewForm.isInterview) {
        const taskId = await createInterviewForm(commentId);
        console.log(taskId);
      }

      if (commentId && commentInternshipForm.isInternship) {
        const internshipId = await createInternshipForm(commentId);
        console.log(internshipId);
      }

      if (commentId && commentWorkPrimaryForm.isWork) {
        const workId = await createCommentWorkPrimaryForm(commentId);
        console.log(workId);
      }

      if (commentId && commentWorkPrimaryForm.isWork) {
        const workId = await createCommentWorkSecondaryForm(commentId);
        console.log(workId);
      }

      if (commentId && commentWorkPrimaryForm.isWork) {
        const workId = await createCommentWorkFinanceForm(commentId);
        console.log(workId);
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
