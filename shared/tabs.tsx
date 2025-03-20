import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Tabs = ({ children }: Props) => {
  return <div className="tabs tabs-border">{children}</div>;
};
