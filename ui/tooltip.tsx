import React from "react";

export function Tooltip({ children }: any) {
  return (
    <div className="tooltip" data-tip="hello">
      {children}
    </div>
  );
}
