import { StarRating, Tab } from "@/shared";

type Props = {
  interview: number;
  setInterview: (value: number) => void;
};

export const Tab2 = ({ interview, setInterview }: Props) => {
  return (
    <Tab name="comment-add" label="Собеседование">
      <StarRating value={interview} onChange={(val) => setInterview(val)} />
    </Tab>
  );
};
