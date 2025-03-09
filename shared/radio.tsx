import classNames from "classnames";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
};

export function Radio({ options, selectedValue, onChange, className }: Props) {
  return (
    <div className={classNames("flex gap-4", className)}>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="radio radio-primary"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}
