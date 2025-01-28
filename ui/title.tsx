import React from "react";

export function Title({
  children,
  size = "4",
  position = "start",
}: Readonly<{
  children: React.ReactNode;
  size?: "1" | "2" | "3" | "4" | "5" | "6"; // Ограничиваем возможные значения
  position?: "start" | "center" | "end"; // Ограничиваем возможные значения
}>) {
  const sizeClasses: Record<string, string> = {
    "1": "text-xl",
    "2": "text-2xl",
    "3": "text-3xl",
    "4": "text-4xl",
    "5": "text-5xl",
    "6": "text-6xl",
  };

  const positionClasses: Record<string, string> = {
    start: "text-left",
    center: "text-center",
    end: "text-right",
  };

  return (
    <h2
      className={`${sizeClasses[size] || "text-4xl"} ${
        positionClasses[position] || "text-left"
      }`}
    >
      {children}
    </h2>
  );
}
