import classNames from "classnames";
import { InputHTMLAttributes } from "react";

type InputType = {
  className?: string;
  onChange: (newSearchedValue: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export function Input({
  value,
  type = "text",
  placeholder,
  className,
  onChange,
  ...rest
}: InputType) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={classNames(
        "input input-bordered input-primary w-full max-w-md",
        className,
      )}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
}
