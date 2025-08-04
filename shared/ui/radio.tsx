import classNames from 'classnames';

type Option = {
  label: string;
  value: string | number;
};

type Props = {
  options: Option[];
  selectedValue: string | number;
  onChange: (value: string | number) => void;
  className?: string;
};

export function Radio({ options, selectedValue, onChange, className }: Props) {
  return (
    <div className={classNames('flex gap-4', className)}>
      {options.map(option => (
        <label
          key={option.value.toString()}
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
