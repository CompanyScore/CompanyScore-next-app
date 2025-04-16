import { useState } from "react";
import { Tab1, Tab2, Tab3, Tab4, Tab5 } from "./tabs";
import { Tabs } from "@/shared";

type Props = {
  selectedOptions: string[];
  position: string;
  experienceYears: string;
  experienceMonths: string;
  country: string;
  city: string;
};

export const Step4 = ({
  selectedOptions,
  position,
  experienceYears,
  experienceMonths,
  country,
  city,
}: Props) => {
  const [task, setTask] = useState<number>(3);
  const [interview, setInterview] = useState<number>(3);
  const [management, setManagement] = useState<number>(3);
  const [team, setTeam] = useState<number>(3);
  const [project, setProject] = useState<number>(3);
  const [stack, setStack] = useState<number>(3);
  const [workFormat, setWorkFormat] = useState("office");

  const [salary, setSalary] = useState<number>(0);
  const [premium, setPremium] = useState<number>(0);
  const [bonuses, setBonuses] = useState<number>(0);
  const [stocks, setStocks] = useState<number>(0);
  const [dividends, setDividends] = useState<number>(0);

  const [reasonJoined, setReasonJoined] = useState("");
  const [reasonLeft, setReasonLeft] = useState("");
  const [recommendation, setRecommendation] = useState("yes");

  const handleSubmit = async () => {
    const result = {
      selectedOptions,
      position,
      experience: {
        years: experienceYears,
        months: experienceMonths,
      },
      location: {
        country,
        city,
      },
      ratings: {
        task,
        interview,
        management,
        team,
        project,
        stack,
        workFormat,
      },
      compensation: {
        salary,
        premium,
        bonuses,
        stocks,
        dividends,
      },
      feedback: {
        reasonJoined,
        reasonLeft,
        recommendation,
      },
    };

    console.log("Результаты опроса:", result);

    try {
      const response = await fetch("https://example.com/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }

      const data = await response.json();
      console.log("Ответ сервера:", data);
      alert("Данные успешно отправлены!");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось отправить данные");
    }
  };

  return (
    <Tabs>
      {selectedOptions.includes("task") && (
        <Tab1 task={task} setTask={setTask} />
      )}

      {selectedOptions.includes("interview") && (
        <Tab2 interview={interview} setInterview={setInterview} />
      )}

      {selectedOptions.includes("rating") && (
        <>
          <Tab3
            management={management}
            team={team}
            project={project}
            stack={stack}
            workFormat={workFormat}
            setManagement={setManagement}
            setTeam={setTeam}
            setProject={setProject}
            setStack={setStack}
            setWorkFormat={setWorkFormat}
          />
          <Tab4
            salary={salary}
            premium={premium}
            bonuses={bonuses}
            stocks={stocks}
            dividends={dividends}
            setSalary={setSalary}
            setPremium={setPremium}
            setBonuses={setBonuses}
            setStocks={setStocks}
            setDividends={setDividends}
          />
        </>
      )}

      <Tab5
        reasonJoined={reasonJoined}
        setReasonJoined={setReasonJoined}
        reasonLeft={reasonLeft}
        setReasonLeft={setReasonLeft}
        recommendation={recommendation}
        setRecommendation={setRecommendation}
        onSubmit={handleSubmit}
      />
    </Tabs>
  );
};
