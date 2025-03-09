"use client";

import { Dropdown, Input, Title } from "@/ui";
import { positions, grades } from "@/constants";
import { useState } from "react";
import { Radio } from "@/shared";

const obj = {
  frontend: {
    j: {
      salary: 800,
    },
    m: 1300,
    s: 2500,
  },
  backend: {
    j: 800,
    m: 1300,
    s: 2500,
  },
};

console.log(obj);
// 5 - obj.frontend.j.salary
// x - 500 (input)
// x * 5 / obj.frontend.j.salary

// x = 500 * 5 / obj.frontend.j.salary
export default function CommentAddPage() {
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState("");
  const [salary, setSalary] = useState(0);
  const [management, setManagement] = useState("good");
  const [team, setTeam] = useState("good");
  const [project, setProject] = useState("good");
  const [stack, setStack] = useState("good");

  const [task, setTask] = useState("good");
  const [interview, setInterview] = useState("good");
  const [workFormat, setWorkFormat] = useState("online");
  const [medical, setMedical] = useState(0);
  const [vacation, setVacation] = useState(0);
  const [premiums, setPremiums] = useState(0);
  const [bonuses, setBonuses] = useState(0);
  const [stocks, setStocks] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 m-auto">
      <Title size="5" position="center">
        Форма отзыва
      </Title>

      <div className="flex gap-10 flex-wrap">
        <Dropdown
          text="Должность"
          isFirstDisabled={true}
          options={positions}
          selectedValue={position}
          onSelect={setPosition}
        />

        <Dropdown
          text="Грэйд"
          isFirstDisabled={true}
          options={grades}
          selectedValue={grade}
          onSelect={setGrade}
        />
      </div>
      <div className="flex justify-around w-full flex-wrap">
        <div className="flex flex-col gap-8">
          <Title size="3">1. Какое руководство?</Title>
          <Radio
            options={[
              { label: "Ужасное", value: "bad" },
              { label: "Нормальное", value: "ok" },
              { label: "Отличное", value: "good" },
            ]}
            selectedValue={management}
            onChange={setManagement}
          />

          <Title size="3">2. Какой коллектив?</Title>
          <Radio
            options={[
              { label: "Ужасный", value: "bad" },
              { label: "Нормальный", value: "ok" },
              { label: "Отличный", value: "good" },
            ]}
            selectedValue={team}
            onChange={setTeam}
          />

          <Title size="3">3. Какая зарплата?</Title>
          <Input
            value={salary}
            onChange={(newValue) => setSalary(Number(newValue))}
            type="number"
          />

          <Title size="3">4. Какой проект?</Title>
          <Radio
            options={[
              { label: "Ужасный", value: "bad" },
              { label: "Нормальный", value: "ok" },
              { label: "Отличный", value: "good" },
            ]}
            selectedValue={project}
            onChange={setProject}
          />

          <Title size="3">5. Какой стек технологий?</Title>
          <Radio
            options={[
              { label: "Ужасный", value: "bad" },
              { label: "Нормальный", value: "ok" },
              { label: "Отличный", value: "good" },
            ]}
            selectedValue={stack}
            onChange={setStack}
          />
        </div>
        <div className="flex flex-col gap-8">
          <Title size="3">6. Тех задание?</Title>
          <Radio
            options={[
              { label: "Ужасное", value: "bad" },
              { label: "Нормальное", value: "ok" },
              { label: "Отличное", value: "good" },
            ]}
            selectedValue={task}
            onChange={setTask}
          />

          <Title size="3">7. Собеседование?</Title>
          <Radio
            options={[
              { label: "Ужасное", value: "bad" },
              { label: "Нормальное", value: "ok" },
              { label: "Отличное", value: "good" },
            ]}
            selectedValue={interview}
            onChange={setInterview}
          />

          <Title size="3">8. Формат работы?</Title>
          <Radio
            options={[
              { label: "онлайн", value: "bad" },
              { label: "гибрид", value: "ok" },
              { label: "офис", value: "good" },
            ]}
            selectedValue={workFormat}
            onChange={setWorkFormat}
          />

          <Title size="3">9. Medical?</Title>
          <Input
            value={medical}
            onChange={(newValue) => setMedical(Number(newValue))}
            type="number"
          />

          <Title size="3">10. Отпускные?</Title>
          <Input
            value={vacation}
            onChange={(newValue) => setVacation(Number(newValue))}
            type="number"
          />

          <Title size="3">11. Премии?</Title>
          <Input
            value={premiums}
            onChange={(newValue) => setPremiums(Number(newValue))}
            type="number"
          />

          <Title size="3">12. Бонусы?</Title>
          <Input
            value={bonuses}
            onChange={(newValue) => setBonuses(Number(newValue))}
            type="number"
          />

          <Title size="3">13. Акции?</Title>
          <Input
            value={stocks}
            onChange={(newValue) => setStocks(Number(newValue))}
            type="number"
          />
        </div>
      </div>
    </section>
  );
}
