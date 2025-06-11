import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Card = ({ children, className }: Props) => {
  return (
    <div
      className={classNames(
        'rounded-xl border  p-6 shadow-sm transition hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  );
};
