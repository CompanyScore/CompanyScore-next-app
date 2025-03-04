import classNames from "classnames";

type InputType = {
  value?: string;
  type?: string;
  placeholder?: string;
  onChange: (newSearchedValue: string) => void;
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
        "input input-bordered input-primary w-full max-w-72",
        className,
      )}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
