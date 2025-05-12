"use client";

import { useEffect, useState } from "react";
import {
  useCommentFormStore,
  useSuggestedCompanyStore,
  useCommentsStore,
} from "@/store";
import {
  CommentsAddCompany,
  CommentsAddInterview,
  CommentsAddPositionGrade,
  CommentsAddRecommendation,
  CommentsAddTask,
  CommentsAddWork,
} from "./components";
import { Title } from "@/ui";

const steps = [
  { label: "Компания", component: <CommentsAddCompany /> },
  { label: "Должность и стаж", component: <CommentsAddPositionGrade /> },
  { label: "Тестовое задание", component: <CommentsAddTask /> },
  { label: "Собеседование", component: <CommentsAddInterview /> },
  { label: "Опыт работы", component: <CommentsAddWork /> },
  { label: "Рекомендации", component: <CommentsAddRecommendation /> },
];

export default function CommentsPage() {
  const { form } = useCommentFormStore();
  const { suggestedCompany } = useSuggestedCompanyStore();
  const { postComment } = useCommentsStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const log = () => {
    console.log("suggestedCompany", suggestedCompany);
    console.log("form", form);
  };

  const handleNext = () => {
    if (currentStep === 0) {
      if (
        !!form.companyId &&
        !!suggestedCompany.name &&
        !!suggestedCompany.city &&
        !!suggestedCompany.country
      ) {
        console.log(
          "Выберите компанию или добавьте компанию. Но не все вместе.",
        );
        return;
      } else if (
        !!form.companyId ||
        (!!suggestedCompany.name &&
          !!suggestedCompany.city &&
          !!suggestedCompany.country)
      ) {
        setCurrentStep((prev) => prev + 1);
      }
    }

    if (currentStep === 1) {
      if (!!form.position && (!!form.grade.years || !!form.grade.months)) {
        setCurrentStep((prev) => prev + 1);
      }
    }

    if (currentStep === 2) {
      if (form.task.isTask && form.task.rating) {
        setCurrentStep((prev) => prev + 1);
      } else if (!form.task.isTask) {
        setCurrentStep((prev) => prev + 1);
      }
    }

    if (currentStep === 3) {
      if (form.interview.isInterview && form.interview.rating) {
        setCurrentStep((prev) => prev + 1);
      } else if (!form.interview.isInterview) {
        setCurrentStep((prev) => prev + 1);
      }
    }

    if (currentStep === 4) {
      if (!form.work.isWork) {
        setCurrentStep((prev) => prev + 1);
      } else if (
        form.work.isWork &&
        !!form.work.rating.management &&
        !!form.work.rating.project &&
        !!form.work.rating.stack &&
        !!form.work.rating.team &&
        !!form.work.finance.salary
      ) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  // const handleSubmit = () => {
  //   console.log("Отправить форму", form);
  // };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const hasExperience =
      form.task.isTask || form.interview.isInterview || form.work.isWork;

    const hasRecommendationFilled =
      !!form.recommendation.reasonJoined?.trim() &&
      !!form.recommendation.reasonLeft?.trim();

    if (hasExperience) {
      setIsFormValid(hasRecommendationFilled);
    } else {
      setIsFormValid(true); // Если вообще нет опыта — можно отправлять без рекомендаций
    }
  }, [form.recommendation, form.task, form.interview, form.work]);

  return (
    <section className="flex flex-col justify-center gap-8 py-8 md:py-10 max-w-5xl m-auto">
      <Title size="4" className="text-center">
        Форма добавления отзыва
      </Title>

      <ul className="steps steps-vertical lg:steps-horizontal w-full">
        {steps.map((step, index) => (
          <li
            key={step.label}
            className={`step ${index <= currentStep ? "step-primary" : ""}`}
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
        <button
          onClick={handleNext}
          className={`btn btn-primary ${currentStep === 5 ? "hidden" : ""}`}
          disabled={currentStep === steps.length - 1}
        >
          Далее
        </button>
        <button
          onClick={() => postComment(form)}
          className={`btn btn-primary ${currentStep === 5 ? "" : "hidden"}`}
          disabled={!isFormValid}
        >
          Отправить
        </button>
      </div>

      <button onClick={log} className="btn mt-8 btn-neutral self-center">
        Log form
      </button>
    </section>
  );
}
