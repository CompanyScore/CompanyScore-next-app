"use client";

import { useState } from "react";
import { Dropdown, Title, Input } from "@/ui";
import { positions, grades, countries, cities } from "@/constants";
import { Steps, Step, Checkbox, Radio, Tabs } from "@/shared";

export default function MultiStepSurvey() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Шаг 2
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState("");

  // Шаг 3
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // Шаг 4

  // Вкладка Тех. задание
  const [task, setTask] = useState("good");
  // Вкладка "Собеседование"
  const [interview, setInterview] = useState("good");

  // Вкладка Оценка компании
  const [management, setManagement] = useState("good");
  const [team, setTeam] = useState("ok");
  const [project, setProject] = useState("ok");
  const [stack, setStack] = useState("ok");
  const [workFormat, setWorkFormat] = useState("online");

  const [salary, setSalary] = useState<number>(0);
  const [premium, setPremium] = useState<number>(0);
  const [bonuses, setBonuses] = useState<number>(0);
  const [stocks, setStocks] = useState<number>(0);
  const [dividends, setDividends] = useState<number>(0);

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

  // Содержимое для шага 4
  const tabsContent = [];

  if (selectedOptions.includes("task")) {
    tabsContent.push(
      <div key="task" label="Тех. задание">
        <Title size="3">Тех. задание?</Title>
        <Radio
          options={[
            { label: "Плохое", value: "bad" },
            { label: "Нормальное", value: "ok" },
            { label: "Хорошее", value: "good" },
          ]}
          selectedValue={task}
          onChange={setTask}
        />
      </div>,
    );
  }

  if (selectedOptions.includes("interview")) {
    tabsContent.push(
      <div key="interview" label="Собеседование">
        <Title size="3">Собеседование?</Title>
        <Radio
          options={[
            { label: "Плохое", value: "bad" },
            { label: "Нормальное", value: "ok" },
            { label: "Хорошее", value: "good" },
          ]}
          selectedValue={interview}
          onChange={setInterview}
        />
      </div>,
    );
  }

  if (selectedOptions.includes("rating")) {
    // Вкладка Оценка компании
    tabsContent.push(
      <div key="company" label="Оценка компании">
        <Title size="3">Руководство</Title>
        <Radio
          options={[
            { label: "Плохое", value: "bad" },
            { label: "Нормальное", value: "ok" },
            { label: "Хорошее", value: "good" },
          ]}
          selectedValue={management}
          onChange={setManagement}
        />
        <Title size="3">Коллектив</Title>
        <Radio
          options={[
            { label: "Ужасный", value: "bad" },
            { label: "Нормальный", value: "ok" },
            { label: "Отличный", value: "good" },
          ]}
          selectedValue={team}
          onChange={setTeam}
        />
        <Title size="3">Проект</Title>
        <Radio
          options={[
            { label: "Ужасный", value: "bad" },
            { label: "Нормальное", value: "ok" },
            { label: "Отличный", value: "good" },
          ]}
          selectedValue={project}
          onChange={setProject}
        />
        <Title size="3">Стек технологий</Title>
        <Radio
          options={[
            { label: "Ужасный", value: "bad" },
            { label: "Нормальное", value: "ok" },
            { label: "Отличный", value: "good" },
          ]}
          selectedValue={stack}
          onChange={setStack}
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

    // Вкладка Финансы
    tabsContent.push(
      <div key="finance" label="Финансы">
        <Title size="3">Зарплата</Title>
        <Input
          value={salary}
          onChange={(newVal) => setSalary(Number(newVal))}
          type="number"
        />
        <Title size="3">Премия</Title>
        <Input
          value={premium}
          onChange={(newVal) => setPremium(Number(newVal))}
          type="number"
        />
        <Title size="3">Бонусы</Title>
        <Input
          value={bonuses}
          onChange={(newVal) => setBonuses(Number(newVal))}
          type="number"
        />
        <Title size="3">Акции</Title>
        <Input
          value={stocks}
          onChange={(newVal) => setStocks(Number(newVal))}
          type="number"
        />
        <Title size="3">Дивиденды</Title>
        <Input
          value={dividends}
          onChange={(newVal) => setDividends(Number(newVal))}
          type="number"
        />
      </div>,
    );
  }

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
            disabled={!country}
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
