import React from "react";

type TooltipProps = {
  tip: string;
  children: React.ReactNode;
};

export function Tooltip({ tip, children }: TooltipProps) {
  return (
    <div className="tooltip" data-tip={tip}>
      {children}
    </div>
  );
}
