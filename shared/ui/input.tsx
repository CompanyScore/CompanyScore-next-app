import classNames from 'classnames';

type InputType = {
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange: (newSearchedValue: string | number) => void;
  className?: string;
  onKeyDown?: (value: string | number) => void;
};

export function Input({
  value,
  type = 'text',
  placeholder,
  onChange,
  className,
  onKeyDown,
}: InputType) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (type === 'number') {
      const parsed = raw === '' ? '' : Number(raw);
      onChange(parsed);
    } else {
      onChange(raw);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onKeyDown) {
      onKeyDown(e.currentTarget.value);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value === undefined || value === null ? '' : String(value)} // <== важно
      className={classNames(
        'input input-bordered input-primary w-full',
        className,
      )}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
