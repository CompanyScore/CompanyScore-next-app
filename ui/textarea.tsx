import classNames from 'classnames';

type TextareaTypeProps = {
  value?: string;
  placeholder: string;
  rows?: number;
  className?: string;
  onChange: (newSearchedValue: string) => void;
};

export function Textarea({
  value,
  placeholder,
  onChange,
  rows = 5,
  className,
}: TextareaTypeProps) {
  return (
    <textarea
      className={classNames(
        'textarea textarea-primary w-full max-w-md placeholder:whitespace-pre-wrap',
        className,
      )}
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={e => onChange(e.target.value)}
    ></textarea>
  );
}
