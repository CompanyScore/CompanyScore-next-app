import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <div
      className={classNames(
        'max-w-7xl mx-auto py-16 md:py-24 px-7 w-full',
        className,
      )}
    >
      {children}
    </div>
  );
}
