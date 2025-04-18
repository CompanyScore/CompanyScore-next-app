"use client";

import { useState } from "react";
import { useCommentFormStore } from "@/store";
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
  const [currentStep, setCurrentStep] = useState(0);

  const log = () => {
    console.log("form", form);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
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
          className="btn btn-primary"
          disabled={currentStep === steps.length - 1}
        >
          Далее
        </button>
      </div>

      <button onClick={log} className="btn mt-8 btn-neutral self-center">
        Log form
      </button>
    </section>
  );
}
