import { Checkbox } from "@/shared";
import React from "react";

type Props = {
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Step1 = ({ selectedOptions, setSelectedOptions }: Props) => {
  return (
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
  );
};
