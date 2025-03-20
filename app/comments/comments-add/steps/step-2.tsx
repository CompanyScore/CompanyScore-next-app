import { Dropdown } from "@/ui";
import React from "react";

type Props = {
  positions: string[];
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  grades: string[];
  grade: string;
  setGrade: React.Dispatch<React.SetStateAction<string>>;
};

export const Step2 = ({
  positions,
  position,
  setPosition,
  grades,
  grade,
  setGrade,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <Dropdown
        text="Должность"
        options={positions}
        isFirstDisabled={true}
        selectedValue={position}
        onSelect={setPosition}
      />
      <Dropdown
        text="Грейд"
        options={grades}
        isFirstDisabled={true}
        selectedValue={grade}
        onSelect={setGrade}
      />
    </div>
  );
};
