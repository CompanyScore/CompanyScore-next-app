"use client";

import { useState } from "react";
import { Dropdown, Input, Title } from "@/ui";
import { positions, grades, countries, cities } from "@/constants";
import { Steps, Step, Checkbox, Radio } from "@/shared";

export default function MultiStepSurvey() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState("");
  const [management, setManagement] = useState("good");
  const [team, setTeam] = useState("good");
  const [salary, setSalary] = useState(0);
  const [project, setProject] = useState("good");
  const [stack, setStack] = useState("good");
  const [task, setTask] = useState("good");
  const [interview, setInterview] = useState("good");

  const isNextDisabled = () => {
    if (currentStep === 1) return selectedOptions.length === 0;
    if (currentStep === 2) return !country || !city;
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
        <Step>Локация</Step>
        <Step>Вопросы</Step>
      </Steps>

      {currentStep === 1 && (
        <div className="flex flex-col gap-6">
          <Checkbox
            label="Я проходил тех. задание"
            checked={selectedOptions.includes("task")}
            onChange={() =>
              setSelectedOptions((prev) =>
                prev.includes("task")
                  ? prev.filter((o) => o !== "task")
                  : [...prev, "task"],
              )
            }
          />
          <Checkbox
            label="Я проходил собеседование"
            checked={selectedOptions.includes("interview")}
            onChange={() =>
              setSelectedOptions((prev) =>
                prev.includes("interview")
                  ? prev.filter((o) => o !== "interview")
                  : [...prev, "interview"],
              )
            }
          />
          <Checkbox
            label="Я работал/работаю"
            checked={selectedOptions.includes("work")}
            onChange={() =>
              setSelectedOptions((prev) =>
                prev.includes("work")
                  ? prev.filter((o) => o !== "work")
                  : [...prev, "work"],
              )
            }
          />
          <div className="flex gap-4">
            <button
              className="btn"
              disabled={isNextDisabled()}
              onClick={handleNext}
            >
              Далее
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="flex flex-col gap-6">
          <Dropdown
            text="Страна"
            options={countries}
            selectedValue={country}
            onSelect={setCountry}
          />
          <Dropdown
            text="Город"
            options={cities[country] || []}
            selectedValue={city}
            onSelect={setCity}
          />
          <div className="flex gap-4">
            <button className="btn" onClick={handlePrev}>
              Назад
            </button>
            <button
              className="btn"
              disabled={isNextDisabled()}
              onClick={handleNext}
            >
              Далее
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="flex flex-col gap-8">
          {selectedOptions.includes("task") && (
            <>
              <Title size="3">Тех задание?</Title>
              <Radio
                options={[
                  { label: "Ужасное", value: "bad" },
                  { label: "Нормальное", value: "ok" },
                  { label: "Отличное", value: "good" },
                ]}
                selectedValue={task}
                onChange={setTask}
              />
            </>
          )}
          {selectedOptions.includes("interview") && (
            <>
              <Title size="3">Собеседование?</Title>
              <Radio
                options={[
                  { label: "Ужасное", value: "bad" },
                  { label: "Нормальное", value: "ok" },
                  { label: "Отличное", value: "good" },
                ]}
                selectedValue={interview}
                onChange={setInterview}
              />
            </>
          )}
          {selectedOptions.includes("work") && (
            <>
              <Dropdown
                text="Должность"
                options={positions}
                selectedValue={position}
                onSelect={setPosition}
              />
              <Dropdown
                text="Грэйд"
                options={grades}
                selectedValue={grade}
                onSelect={setGrade}
              />
              <Title size="3">Зарплата</Title>
              <Input
                value={salary}
                onChange={(v) => setSalary(Number(v))}
                type="number"
              />
              <Title size="3">Какой коллектив?</Title>
              <Radio
                options={[
                  { label: "Ужасный", value: "bad" },
                  { label: "Нормальный", value: "ok" },
                  { label: "Отличный", value: "good" },
                ]}
                selectedValue={team}
                onChange={setTeam}
              />
              <Title size="3">Какой проект?</Title>
              <Radio
                options={[
                  { label: "Ужасный", value: "bad" },
                  { label: "Нормальный", value: "ok" },
                  { label: "Отличный", value: "good" },
                ]}
                selectedValue={project}
                onChange={setProject}
              />
              <Title size="3">Какой стек технологий?</Title>
              <Radio
                options={[
                  { label: "Ужасный", value: "bad" },
                  { label: "Нормальный", value: "ok" },
                  { label: "Отличный", value: "good" },
                ]}
                selectedValue={stack}
                onChange={setStack}
              />
            </>
          )}
          <div className="flex gap-4">
            <button className="btn" onClick={handlePrev}>
              Назад
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
