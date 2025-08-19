import classNames from 'classnames';
import { ReactNode, useId } from 'react';

type Option = {
  label: ReactNode;
  value: string | number | boolean;
};

type Props = {
  options: Option[];
  selectedValue: string | number | boolean;
  onChange: (value: string | number | boolean) => void;
  className?: string;
};

export function Radio({ options, selectedValue, onChange, className }: Props) {
  const name = useId();

  return (
    <div className={classNames('flex gap-4', className)} role="radiogroup">
      {options.map(option => (
        <label
          key={String(option.value)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={String(option.value)}
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
