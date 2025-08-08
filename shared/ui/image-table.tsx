import classNames from 'classnames';

type Props = {
  src: string;
  className?: string;
};

export function ImageTable({ src, className }: Props) {
  return (
    <img
      src={src}
      alt="ImageTable"
      className={classNames('rounded-full object-cover', className)}
    />
  );
}
