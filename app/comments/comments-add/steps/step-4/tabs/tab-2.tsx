import { Radio, Tab } from "@/shared";

type Props = {
  interview: number;
  setInterview: (value: number) => void;
};

export const Tab2 = ({ interview, setInterview }: Props) => {
  const scaleOptions = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
  ];

  return (
    <Tab name="comment-add" label="Собеседование">
      <Radio
        options={scaleOptions}
        selectedValue={interview}
        onChange={(value) => setInterview(Number(value))}
      />
    </Tab>
  );
};
