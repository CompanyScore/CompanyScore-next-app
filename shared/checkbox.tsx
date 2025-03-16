import React from "react";

type CheckboxProps = {
  label: string;
  value: string;
  selected: string[];
  setSelected: (selected: string[]) => void;
};

export function Checkbox({
  label,
  value,
  selected,
  setSelected,
}: CheckboxProps) {
  const isChecked = selected.includes(value);
  const handleChange = () => {
    if (isChecked) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="checkbox checkbox-primary"
      />
      {label}
    </label>
  );
}
