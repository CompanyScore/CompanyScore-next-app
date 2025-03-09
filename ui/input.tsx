import classNames from "classnames";

type InputType = {
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange: (newSearchedValue: string | number) => void;
  className?: string;
};

export function Input({
  value,
  type = "text",
  placeholder,
  onChange,
  className,
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
      onChange={(e) =>
        onChange(type === "number" ? Number(e.target.value) : e.target.value)
      }
    />
  );
}
