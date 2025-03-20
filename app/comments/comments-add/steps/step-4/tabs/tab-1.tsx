import { Radio } from "@/shared";
import { Title } from "@/ui";

type Props = {
  task: number;
  setTask: (value: number) => void;
};

export const Tab1 = ({ task, setTask }: Props) => {
  const scaleOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];

  return (
    <div label="Тех. задание">
      <Title size="3">Тех. задание?</Title>
      <Radio
        options={scaleOptions}
        selectedValue={task}
        onChange={(value) => setTask(Number(value))}
      />
    </div>
  );
};
