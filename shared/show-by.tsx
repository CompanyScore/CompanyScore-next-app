import React from "react";
import { Select } from "@/ui";

const numberOptions = ["5", "10", "15", "20"];

type ShowByProps = {
  limit: number;
  onLimitChange: (newLimit: number) => void;
};

export function ShowBy({ limit, onLimitChange }: ShowByProps) {
  const handleSelect = (newValue: string) => {
    onLimitChange(Number(newValue));
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Показать по:</span>
      </label>
      <Select
        defaultValue="Выберите количество"
        options={numberOptions}
        value={String(limit)}
        onSelect={handleSelect}
      />
    </div>
  );
}
