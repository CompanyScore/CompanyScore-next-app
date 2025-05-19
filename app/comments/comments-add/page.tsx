'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { useCommentFormStore, useCommentsStore } from '@/store';
import {
  CommentsAddCompany,
  CommentsAddInterview,
  CommentsAddPositionGrade,
  CommentsAddRecommendation,
  CommentsAddTask,
  CommentsAddWork,
} from './components';
import { Title, useToast, Toast } from '@/ui';

const steps = [
  { label: 'Компания', component: <CommentsAddCompany /> },
  { label: 'Должность и стаж', component: <CommentsAddPositionGrade /> },
  { label: 'Тестовое задание', component: <CommentsAddTask /> },
  { label: 'Собеседование', component: <CommentsAddInterview /> },
  { label: 'Опыт работы', component: <CommentsAddWork /> },
  { label: 'Рекомендации', component: <CommentsAddRecommendation /> },
];

export default function CommentsPage() {
  const { form } = useCommentFormStore();
  const { postComment, error } = useCommentsStore();
  const [currentStep, setCurrentStep] = useState(0);

  const toast = useToast();

  const log = () => {
    console.log('form', form);
  };

  const handleNext = async () => {
    if (currentStep === 0) {
      if (form.companyId) {
        setCurrentStep(prev => prev + 1);
      } else {
        toast.error('Выберите компанию');
        return;
      }
    }

    if (currentStep === 1) {
      if (!form.position && (!form.grade.years || !form.grade.months)) {
        toast.error('Заполните должность и стаж');
        return;
      } else if (form.grade.years > 50 || form.grade.months >= 11) {
        toast.error('Стаж не может быть больше 50 лет и 11 месяцев');
        return;
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }

    if (currentStep === 2) {
      if (form.task.isTask && form.task.rating) {
        setCurrentStep(prev => prev + 1);
      } else if (!form.task.isTask) {
        setCurrentStep(prev => prev + 1);
      } else {
        toast.error('Оцените тестовое задание');
        return;
      }
    }

    if (currentStep === 3) {
      if (form.interview.isInterview && form.interview.rating) {
        setCurrentStep(prev => prev + 1);
      } else if (!form.interview.isInterview) {
        setCurrentStep(prev => prev + 1);
      } else {
        toast.error('Оцените собеседование');
        return;
      }
    }

    if (currentStep === 4) {
      if (!form.work.isWork) {
        setCurrentStep(prev => prev + 1);
      } else if (
        form.work.isWork &&
        !!form.work.rating.management &&
        !!form.work.rating.project &&
        !!form.work.rating.stack &&
        !!form.work.rating.team &&
        !!form.work.finance.salary
      ) {
        setCurrentStep(prev => prev + 1);
      } else {
        toast.error('Оцените работу');
        return;
      }
    }

    if (currentStep === 5) {
      if (
        (form.recommendation.reasonJoined?.trim().length || 0) >= 100 &&
        (form.recommendation.reasonLeft?.trim().length || 0) >= 100
      ) {
        await sendForm();
        return;
      } else {
        toast.error('Не менее 100 символов в каждом поле');
        return;
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const sendForm = async () => {
    try {
      const commentId = await postComment(form);
      toast.success('Отзыв успешно отправлен');
      console.log(commentId);
      // redirect(`/comments/${commentId}`);
      redirect(`/comments`);
    } catch {
      toast.error(error);
    }
  };

  return (
    <section className="flex flex-col justify-center gap-8 py-8 md:py-10 max-w-5xl m-auto">
      <Title size="4" className="text-center">
        Форма добавления отзыва
      </Title>

      <ul className="steps steps-vertical lg:steps-horizontal w-full">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className={`step ${index <= currentStep ? 'step-primary' : ''}`}
          >
            {step.label}
          </li>
        ))}
      </ul>

      <div className="mt-6">{steps[currentStep].component}</div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="btn btn-outline"
          disabled={currentStep === 0}
        >
          Назад
        </button>
        <button onClick={handleNext} className={`btn btn-primary`}>
          {currentStep === 5 ? 'Отправить' : 'Далее'}
        </button>
      </div>

      <button onClick={log} className="btn mt-8 btn-neutral self-center">
        Log form
      </button>
      <Toast />
    </section>
  );
}
