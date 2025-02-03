import React from "react";

export function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="hero bg-base-200 place-items-start">{children}</div>;
}
