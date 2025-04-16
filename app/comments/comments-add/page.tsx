"use client";

import { useState } from "react";
import { positions, countries, cities } from "@/constants";
import { Steps, Step } from "@/shared";
import { Step1, Step2, Step3, Step4 } from "./steps";

export default function MultiStepSurvey() {
  // Шаги формы
  const [currentStep, setCurrentStep] = useState(1);
  // Выбранные этапы (чекбоксы)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Шаг 2 – Должность и опыт
  const [position, setPosition] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [experienceMonths, setExperienceMonths] = useState("");

  // Шаг 3 – Локация
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // Проверка обязательных полей для перехода на следующий шаг
  const isNextDisabled = () => {
    if (currentStep === 1) return selectedOptions.length === 0;

    if (currentStep === 2) {
      const years = parseInt(experienceYears, 10);
      const months = parseInt(experienceMonths, 10);

      const isYearsValid =
        experienceYears !== "" && !isNaN(years) && years >= 0;
      const isMonthsValid =
        experienceMonths !== "" &&
        !isNaN(months) &&
        months >= 0 &&
        months <= 11;

      return !position || (!isYearsValid && !isMonthsValid);
    }

    if (currentStep === 3) return !country || !city;

    return false;
  };

  const handleNext = () => {
    if (!isNextDisabled()) setCurrentStep((prev) => prev + 1);
  };
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  return (
    <section className="flex flex-col items-center py-8 gap-8">
      <Steps currentStep={currentStep}>
        <Step>Выбор этапов</Step>
        <Step>Должность</Step>
        <Step>Локация</Step>
        <Step>Вопросы</Step>
      </Steps>

      {currentStep === 1 && (
        <Step1
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}

      {currentStep === 2 && (
        <Step2
          positions={positions}
          position={position}
          setPosition={setPosition}
          experienceYears={experienceYears}
          setExperienceYears={setExperienceYears}
          experienceMonths={experienceMonths}
          setExperienceMonths={setExperienceMonths}
        />
      )}

      {currentStep === 3 && (
        <Step3
          countries={countries}
          country={country}
          setCountry={setCountry}
          cities={cities}
          city={city}
          setCity={setCity}
        />
      )}

      {currentStep === 4 && (
        <Step4
          selectedOptions={selectedOptions}
          position={position}
          experienceYears={experienceYears}
          experienceMonths={experienceMonths}
          country={country}
          city={city}
        />
      )}

      <div className="flex gap-4 mt-4">
        {currentStep > 1 && (
          <button onClick={handlePrev} className="btn btn-secondary">
            Назад
          </button>
        )}
        {currentStep < 4 && (
          <button
            onClick={handleNext}
            className="btn btn-primary"
            disabled={isNextDisabled()}
          >
            Вперед
          </button>
        )}
      </div>
    </section>
  );
}
