import classNames from "classnames";
import { InputHTMLAttributes } from "react";

type InputType = {
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange: (newSearchedValue: string | number) => void;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export function Input({
  value,
  type = "text",
  placeholder,
  className,
}: InputType) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (type === "number") {
      const parsed = raw === "" ? "" : Number(raw);
      onChange(parsed);
    } else {
      onChange(raw);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value === undefined || value === null ? "" : String(value)} // <== важно
      className={classNames(
        "input input-bordered input-primary w-full",
        className,
      )}
      onChange={handleChange}
    />
  );
}
