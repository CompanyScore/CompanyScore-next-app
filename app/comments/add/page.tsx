"use client";

import { useState } from "react";
import { Dropdown, Title, Input } from "@/ui";
import { positions, grades, countries, cities } from "@/constants";
import { Steps, Step, Checkbox, Radio, Tabs } from "@/shared";

// Опции для шкалы от 1 до 5 (числовые значения)
const scaleOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
];

export default function MultiStepSurvey() {
  // Шаги формы
  const [currentStep, setCurrentStep] = useState(1);
  // Выбранные этапы (чекбоксы)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Шаг 2 – Должность и грейд
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState("");

  // Шаг 3 – Локация
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // Шаг 4, вкладки:
  // "Тех. задание" – шкала от 1 до 5
  const [task, setTask] = useState<number>(3);
  // "Собеседование" – шкала от 1 до 5
  const [interview, setInterview] = useState<number>(3);
  // "Оценка компании" – качественные вопросы (шкала от 1 до 5)
  const [management, setManagement] = useState<number>(3);
  const [team, setTeam] = useState<number>(3);
  const [project, setProject] = useState<number>(3);
  const [stack, setStack] = useState<number>(3);
  // "Формат работы" остаётся с фиксированными вариантами
  const [workFormat, setWorkFormat] = useState("office");

  // "Финансы" – числовые поля
  const [salary, setSalary] = useState<number>(0);
  const [premium, setPremium] = useState<number>(0);
  const [bonuses, setBonuses] = useState<number>(0);
  const [stocks, setStocks] = useState<number>(0);
  const [dividends, setDividends] = useState<number>(0);

  // "Обратная связь" – всегда отображается
  const [reasonJoined, setReasonJoined] = useState("");
  const [reasonLeft, setReasonLeft] = useState("");
  // Для рекомендации используем варианты "Да" и "Нет"
  const [recommendation, setRecommendation] = useState("yes");

  // Проверка обязательных полей для перехода на следующий шаг
  const isNextDisabled = () => {
    if (currentStep === 1) return selectedOptions.length === 0;
    if (currentStep === 2) return !position || !grade;
    if (currentStep === 3) return !country || !city;
    return false;
  };

  const handleNext = () => {
    if (!isNextDisabled()) setCurrentStep((prev) => prev + 1);
  };
  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  // Формируем содержимое вкладок для шага 4
  const tabsContent = [];

  if (selectedOptions.includes("task")) {
    tabsContent.push(
      <div key="task" label="Тех. задание">
        <Title size="3">Тех. задание?</Title>
        <Radio
          options={scaleOptions}
          selectedValue={task}
          onChange={(value) => setTask(Number(value))}
        />
      </div>,
    );
  }

  if (selectedOptions.includes("interview")) {
    tabsContent.push(
      <div key="interview" label="Собеседование">
        <Title size="3">Собеседование?</Title>
        <Radio
          options={scaleOptions}
          selectedValue={interview}
          onChange={(value) => setInterview(Number(value))}
        />
      </div>,
    );
  }

  if (selectedOptions.includes("rating")) {
    // Вкладка "Оценка компании" – качественные вопросы
    tabsContent.push(
      <div key="company" label="Оценка компании">
        <Title size="3">Руководство</Title>
        <Radio
          options={scaleOptions}
          selectedValue={management}
          onChange={(value) => setManagement(Number(value))}
        />
        <Title size="3">Коллектив</Title>
        <Radio
          options={scaleOptions}
          selectedValue={team}
          onChange={(value) => setTeam(Number(value))}
        />
        <Title size="3">Проект</Title>
        <Radio
          options={scaleOptions}
          selectedValue={project}
          onChange={(value) => setProject(Number(value))}
        />
        <Title size="3">Стек технологий</Title>
        <Radio
          options={scaleOptions}
          selectedValue={stack}
          onChange={(value) => setStack(Number(value))}
        />
        <Title size="3">Формат работы</Title>
        <Radio
          options={[
            { label: "Офис", value: "office" },
            { label: "Гибрид", value: "hybrid" },
            { label: "Онлайн", value: "online" },
          ]}
          selectedValue={workFormat}
          onChange={setWorkFormat}
        />
      </div>,
    );

    // Вкладка "Финансы" – числовые поля: зарплата, премия, бонусы, акции и дивиденды
    tabsContent.push(
      <div key="finance" label="Финансы">
        <Title size="3">Зарплата</Title>
        <Input
          value={salary.toString()}
          onChange={(newVal) => setSalary(Number(newVal))}
          type="number"
        />
        <Title size="3">Премия</Title>
        <Input
          value={premium.toString()}
          onChange={(newVal) => setPremium(Number(newVal))}
          type="number"
        />
        <Title size="3">Бонусы</Title>
        <Input
          value={bonuses.toString()}
          onChange={(newVal) => setBonuses(Number(newVal))}
          type="number"
        />
        <Title size="3">Акции</Title>
        <Input
          value={stocks.toString()}
          onChange={(newVal) => setStocks(Number(newVal))}
          type="number"
        />
        <Title size="3">Дивиденды</Title>
        <Input
          value={dividends.toString()}
          onChange={(newVal) => setDividends(Number(newVal))}
          type="number"
        />
      </div>,
    );
  }

  // Пятый таб "Обратная связь" – всегда отображается
  tabsContent.push(
    <div key="feedback" label="Обратная связь">
      <Title size="3">По какой причине вы устроились на эту работу?</Title>
      <textarea
        className="textarea textarea-primary w-full"
        placeholder="Ваш ответ..."
        value={reasonJoined}
        onChange={(e) => setReasonJoined(e.target.value)}
      />
      <Title size="3">Почему вы уволились с работы?</Title>
      <textarea
        className="textarea textarea-primary w-full"
        placeholder="Ваш ответ..."
        value={reasonLeft}
        onChange={(e) => setReasonLeft(e.target.value)}
      />
      <Title size="3">Рекомендуете эту компанию?</Title>
      <Radio
        options={[
          { label: "Да", value: "yes" },
          { label: "Нет", value: "no" },
        ]}
        selectedValue={recommendation}
        onChange={setRecommendation}
      />
      <button
        className="btn btn-primary mt-4"
        onClick={async () => {
          // Формируем объект данных, структурированный по вкладкам
          const data = {
            selectedOptions,
            position,
            grade,
            location: { country, city },
            tabs: {
              ...(selectedOptions.includes("task") && {
                task: { rating: task },
              }),
              ...(selectedOptions.includes("interview") && {
                interview: { rating: interview },
              }),
              ...(selectedOptions.includes("rating") && {
                company: { management, team, project, stack, workFormat },
                finance: { salary, premium, bonuses, stocks, dividends },
              }),
              feedback: { reasonJoined, reasonLeft, recommendation },
            },
          };

          try {
            const response = await fetch("https://example.com/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
            console.log("Submission successful", response);
          } catch (error) {
            console.error("Submission error", error);
          }
        }}
      >
        Отправить
      </button>
    </div>,
  );

  return (
    <section className="flex flex-col items-center py-8 gap-8">
      <Steps currentStep={currentStep}>
        <Step>Выбор этапов</Step>
        <Step>Должность</Step>
        <Step>Локация</Step>
        <Step>Вопросы</Step>
      </Steps>

      {currentStep === 1 && (
        <div className="flex flex-col gap-6">
          <Checkbox
            label="Проходил тех. задание"
            value="task"
            selected={selectedOptions}
            setSelected={setSelectedOptions}
          />
          <Checkbox
            label="Проходил собеседование"
            value="interview"
            selected={selectedOptions}
            setSelected={setSelectedOptions}
          />
          <Checkbox
            label="Работал/Работаю"
            value="rating"
            selected={selectedOptions}
            setSelected={setSelectedOptions}
          />
        </div>
      )}

      {currentStep === 2 && (
        <div className="flex flex-col gap-6">
          <Dropdown
            text="Должность"
            options={positions}
            isFirstDisabled={true}
            selectedValue={position}
            onSelect={setPosition}
          />
          <Dropdown
            text="Грейд"
            options={grades}
            isFirstDisabled={true}
            selectedValue={grade}
            onSelect={setGrade}
          />
        </div>
      )}

      {currentStep === 3 && (
        <div className="flex flex-col gap-6">
          <Dropdown
            text="Страна"
            options={countries}
            isFirstDisabled={true}
            selectedValue={country}
            onSelect={setCountry}
          />
          <Dropdown
            text="Город"
            options={country ? cities[country] : []}
            isFirstDisabled={true}
            selectedValue={city}
            onSelect={setCity}
          />
        </div>
      )}

      {currentStep === 4 && <Tabs>{tabsContent}</Tabs>}

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
