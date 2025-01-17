import React from "react";

type ButtonType = {
  children: string;
  onClick: () => void;
};

export function Button({ children, onClick }: ButtonType) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}
