import classNames from 'classnames';

type SelectProps = {
  defaultValue?: string | number;
  defaultDisabled?: boolean;
  options: (string | number)[];
  value: string | number;
  className?: string;
  onSelect: (newValue: string) => void;
};

export function Select2({
  defaultValue,
  defaultDisabled,
  options,
  value,
  onSelect,
  className,
}: SelectProps) {
  return (
    <select
      className={classNames('select select-primary w-full max-w-xs', className)}
      value={value}
      onChange={e => onSelect(e.target.value)}
    >
      {defaultValue !== undefined && (
        <option value="" disabled={defaultDisabled}>
          {defaultValue}
        </option>
      )}
      {options.map(option => (
        <option value={option} key={option} className=" z-auto">
          {option}
        </option>
      ))}
    </select>
  );
}
