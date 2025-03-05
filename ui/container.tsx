import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <div
      className={classNames("hero bg-base-200 place-items-start", className)}
    >
      {children}
    </div>
  );
}
