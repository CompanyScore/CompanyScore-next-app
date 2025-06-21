'use client';

import { useState } from 'react';
import { useCommentFormStore2 } from '@/store';
import {
  CommentsAddInterview,
  CommentsAddRecommendation,
  CommentsAddTask,
  CommentsAddWork,
  CommentsAddWork2,
  CommentsAddWork3,
  CommentsAddOptions,
  CommentsAddIntern,
} from './components';
import { Toast } from '@/ui';

export default function CommentsPage() {
  const { form } = useCommentFormStore2();
  // const { postComment, error } = useCommentsStore();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'options',
    ...(form.task.isTask ? ['task'] : []),
    ...(form.interview.isInterview ? ['interview'] : []),
    ...(form.intern.isIntern ? ['intern'] : []),
    ...(form.work.isWork ? ['work'] : []),
    ...(form.work.isWork ? ['work2'] : []),
    ...(form.work.isWork ? ['work3'] : []),
    'recommendation',
  ];

  // const toast = useToast();

  const log = () => {
    // console.log('form', form);
    console.log(steps.length);
    console.log(currentStep);
  };

  // const handleNext = async () => {
  //   if (currentStep === steps) return;
  //   setCurrentStep(prev => prev + 1);
  // };

  // const handlePrev = () => {
  //   if (currentStep > 1) {
  //     setCurrentStep(prev => prev - 1);
  //   }
  // };

  // const sendForm = async () => {
  //   try {
  //     const commentId = await postComment(form);
  //     toast.success('Отзыв успешно отправлен');
  //     console.log(commentId);
  //     // redirect(`/comments/${commentId}`);
  //     redirect(`/comments`);
  //   } catch {
  //     toast.error(error);
  //   }
  // };

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
      {steps[currentStep] === 'intern' && <CommentsAddIntern />}
      {steps[currentStep] === 'work' && <CommentsAddWork />}
      {steps[currentStep] === 'work2' && <CommentsAddWork2 />}
      {steps[currentStep] === 'work3' && <CommentsAddWork3 />}
      {steps[currentStep] === 'recommendation' && <CommentsAddRecommendation />}

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentStep(prev => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className="btn btn-outline"
        >
          Назад
        </button>

        <button
          onClick={() => {
            if (currentStep < steps.length - 1) {
              setCurrentStep(prev => prev + 1);
            } else {
              // TODO: handleSubmit
            }
          }}
          className="btn btn-primary"
        >
          {currentStep === steps.length - 1 ? 'Отправить' : 'Далее'}
        </button>
      </div>

      <button onClick={log} className="btn mt-8 btn-neutral self-center">
        Log form
      </button>
      <Toast />
    </section>
  );
}
