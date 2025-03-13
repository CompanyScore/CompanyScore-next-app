import React from "react";
import classNames from "classnames";

type StepsProps = {
  currentStep: number;
  children: React.ReactNode;
};

export function Steps({ currentStep, children }: StepsProps) {
  return (
    <ul className="steps w-full">
      {React.Children.map(children, (child, index) => (
        <li
          className={classNames("step", {
            "step-primary": index + 1 <= currentStep,
          })}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}
