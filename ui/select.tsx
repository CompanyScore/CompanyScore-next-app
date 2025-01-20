import React from "react";

type SelectProps = {
  defaultValue?: string | number;
  defaultDisabled?: boolean;
  options: string[] | number[];
  value: string | number;
  onSelect: (newValue: string) => void;
};

export function Select({
  defaultValue,
  defaultDisabled,
  options,
  value,
  onSelect,
}: SelectProps) {
  return (
    <select
      className="select select-primary w-full max-w-xs"
      value={value}
      onChange={e => onSelect(e.target.value)}
    >
      <option value="" disabled={defaultDisabled}>{defaultValue}</option>
      {options?.map((option: string | number) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
