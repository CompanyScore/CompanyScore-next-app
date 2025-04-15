import { StarRating, Tab } from "@/shared";

type Props = {
  task: number;
  setTask: (value: number) => void;
};

export const Tab1 = ({ task, setTask }: Props) => {
  return (
    <Tab name="comment-add" label="Тех. задание?">
      <StarRating value={task} onChange={(val) => setTask(val)} />
    </Tab>
  );
};
