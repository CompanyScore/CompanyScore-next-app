import React from "react";

type ButtonType = {
  children: any;
  disabled?: boolean;
  color?: string;
  onClick: () => void;
};

export function Button({
  children,
  disabled,
  color = "primary",
  onClick,
}: ButtonType) {
  return (
    <button
      className={`btn btn-${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
