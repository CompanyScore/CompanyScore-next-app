import { Radio, Tab, StarRating } from "@/shared";
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
  return (
    <Tab name="comment-add" label="Оценка компании">
      <Title size="3">Руководство</Title>
      <StarRating value={management} onChange={setManagement} />

      <Title size="3">Коллектив</Title>
      <StarRating value={team} onChange={setTeam} />

      <Title size="3">Проект</Title>
      <StarRating value={project} onChange={setProject} />

      <Title size="3">Стек технологий</Title>
      <StarRating value={stack} onChange={setStack} />

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
