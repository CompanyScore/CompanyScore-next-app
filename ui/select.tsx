import React from "react";

type SelectProps = {
  defaultValue: string | number;
  options: string[] | number[];
  value: string | number;
  onSelect: (newValue: string) => void;
};

export function Select({
  defaultValue,
  options,
  value,
  onSelect,
}: SelectProps) {
  return (
    <select
      className="select select-primary w-full max-w-44"
      value={value}
      onChange={e => onSelect(e.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option: string | number) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
