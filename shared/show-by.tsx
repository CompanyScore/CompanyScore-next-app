import React from "react";
import { Dropdown} from "@/ui";

const numberOptions = ["5", "10", "15", "20"];

type ShowByProps = {
  limit: number;
  onLimitChange: (newLimit: number) => void;
};

export function ShowBy({ limit, onLimitChange }: ShowByProps) {
  const handleSelect = (newValue = "10") => {
    onLimitChange(Number(newValue));
  };

  return (
    <Dropdown
      label="Выберите кол-во элементов"
      isFirstDisabled={true}
      options={numberOptions}
      selectedValue={String(limit)}
      onSelect={handleSelect}
    />
  );
}
