import { Dropdown, Input } from "@/ui";
import React from "react";

type Props = {
  positions: string[];
  position: string;
  setPosition: React.Dispatch<React.SetStateAction<string>>;
  experienceYears: string;
  setExperienceYears: React.Dispatch<React.SetStateAction<string>>;
  experienceMonths: string;
  setExperienceMonths: React.Dispatch<React.SetStateAction<string>>;
};

export const Step2 = ({
  positions,
  position,
  setPosition,
  experienceYears,
  setExperienceYears,
  experienceMonths,
  setExperienceMonths,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Dropdown
        text="Должность"
        options={positions}
        isFirstDisabled={true}
        selectedValue={position}
        onSelect={setPosition}
      />

      <label className="text-sm font-medium">Опыт работы</label>
      <Input
        type="number"
        min="0"
        placeholder="Лет"
        value={experienceYears}
        onChange={(val) => setExperienceYears(val)}
      />
      <Input
        type="number"
        min="0"
        max="11"
        placeholder="Месяцев"
        value={experienceMonths}
        onChange={(val) => setExperienceMonths(val)}
      />
    </div>
  );
};
