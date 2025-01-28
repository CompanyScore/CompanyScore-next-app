import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  color?: "primary" | "secondary" | "success" | "danger" | "neutral"; // Ограничиваем возможные значения
  onClick: () => void;
};

export function Button({
  children,
  disabled = false,
  color = "neutral",
  onClick,
}: ButtonProps) {
  const colorClasses: Record<string, string> = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    neutral: "bg-gray-300 hover:bg-gray-400 text-black",
  };

  return (
    <button
      className={`px-4 py-2 rounded ${
        colorClasses[color] || colorClasses.neutral
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
