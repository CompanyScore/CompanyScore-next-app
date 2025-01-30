import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "neutral"; // Ограничиваем возможные значения
  onClick: () => void;
};

export function Button({
  children,
  disabled = false,
  color = "primary",
  onClick,
}: ButtonProps) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary hover:bg-primary-600 text-white",
    secondary: "bg-secondary hover:bg-secondary-600 text-white",
    warning: "bg-warning hover:bg-warning-600 text-white",
    success: "bg-success hover:bg-success-600 text-white",
    danger: "bg-error hover:bg-error-600 text-white",
    neutral: "bg-neutral hover:bg-neutral-400 text-black",
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
