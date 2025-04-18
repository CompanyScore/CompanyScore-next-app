import React from "react";

type Props = {
  name: string;
  label: string;
  children: React.ReactNode;
};

export const Tab = ({ name, label, children }: Props) => {
  return (
    <>
      <input type="radio" name={name} className="tab text-2xl" aria-label={label} />
      <div className="tab-content border-base-300 bg-base-100 p-10">{children}</div>
    </>
  );
};
