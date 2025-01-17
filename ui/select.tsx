import React from "react";

type SelectProps = {
  defaultValue: string;
  options: string[];
  value: string;
  changeValue: (newValue: string) => void;
};

export function Select({
  defaultValue,
  options,
  value,
  changeValue,
}: SelectProps) {
  return (
    <select
      className="select select-primary w-full max-w-44"
      value={value}
      onChange={e => changeValue(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option: string) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
