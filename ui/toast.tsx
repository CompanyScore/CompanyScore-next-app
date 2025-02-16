import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ToastProps = {
  message: string | null;
  type?: string;
};

export function Toast({ message, type = "success" }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return createPortal(
    <div className="toast toast-end">
      <div className={`alert alert-${type}`}>{message}</div>
    </div>,
    document.body,
  );
}
