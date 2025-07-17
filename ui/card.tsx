import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};
export const Card = ({ children, className, onClick }: Props) => {
  return (
    <div
      className={classNames(
        'rounded-xl border p-6 shadow-sm transition hover:shadow-md cursor-pointer',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
