import React from "react";

export function Title({
  children,
  position = "start",
}: Readonly<{
  children: React.ReactNode;
  position?: string;
}>) {
  return <h2 className={`text-${position} text-5xl`}>{children}</h2>;
}
