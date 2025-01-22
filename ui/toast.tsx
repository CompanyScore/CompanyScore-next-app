import React from "react";

type ToastProps = {
  message: string;
  type?: string;
};

export function Toast({ message, type = "success" }: ToastProps) {
  return (
    <div className="toast toast-center">
      <div className={`alert alert-${type}`}>
        <span>{message}</span>
      </div>
    </div>
  );
}
