import classNames from 'classnames';

type ErrorType = {
  text: string | null;
  className?: string;
};

export function Error({ text, className }: ErrorType) {
  return (
    <p className={classNames('text-center text-red-600 text-lg', className)}>
      {text}
    </p>
  );
}
