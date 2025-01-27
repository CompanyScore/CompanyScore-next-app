import React from "react";

export function Title({
  children,
  size = "4",
  position = "start",
}: Readonly<{
  children: React.ReactNode;
  size?: string;
  position?: string;
}>) {
  return <h2 className={`text-${position} text-${size}xl`}>{children}</h2>;
}
