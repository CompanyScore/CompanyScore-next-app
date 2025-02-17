import classNames from "classnames";

type InputType = {
  value?: string;
  placeholder: string;
  onChange: (newSearchedValue: string) => void;
  className?: string;
};

export function Input({ value, placeholder, onChange, className }: InputType) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      className={classNames(
        "input input-bordered input-primary w-full max-w-md",
        className,
      )}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
