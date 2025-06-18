import Image from 'next/image';
import classNames from 'classnames';

type Props = {
  src: string;
  className?: string;
};

export function ImageTable({ src, className }: Props) {
  return (
    <Image
      src={src}
      alt="ImageTable"
      width={90}
      height={80}
      className={classNames('rounded object-contain max-h-20', className)}
    />
  );
}
