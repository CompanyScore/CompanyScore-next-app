import { Radio, Tab } from "@/shared";
import { Title } from "@/ui";

type Props = {
  management: number;
  team: number;
  project: number;
  stack: number;
  workFormat: string;
  setManagement: (value: number) => void;
  setTeam: (value: number) => void;
  setProject: (value: number) => void;
  setStack: (value: number) => void;
  setWorkFormat: (value: string) => void;
};

export const Tab3 = ({
  management,
  team,
  project,
  stack,
  workFormat,
  setManagement,
  setTeam,
  setProject,
  setStack,
  setWorkFormat,
}: Props) => {
  const scaleOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];

  return (
    <Tab name="comment-add" label="Оценка компании">
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
        onChange={(value) => setWorkFormat(String(value))}
      />
    </Tab>
  );
};
