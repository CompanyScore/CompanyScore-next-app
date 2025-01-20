import React from "react";
import { Select } from "@/ui";

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
    <Select
      defaultValue="Выберите кол-во элементов"
      defaultDisabled={true}
      options={numberOptions}
      value={String(limit)}
      onSelect={handleSelect}
    />
  );
}
