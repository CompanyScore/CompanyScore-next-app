import React from "react";

type Props = {
  name: string;
  label: string;
  children: React.ReactNode;
};

export const Tab = ({ name, label, children }: Props) => {
  return (
    <>
      <input type="radio" name={name} className="tab" aria-label={label} />
      <div className="tab-content">{children}</div>
    </>
  );
};
