import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

type ToastProps = {
  message: string | null;
  type?: "success" | "error" | "warning" | "info";
  className?: string;
};

export function Toast({ message, type = "success", className }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return createPortal(
    <div className="toast toast-top toast-end">
      <div
        className={classNames(
          "alert text-white",
          {
            "alert-success": type === "success",
            "alert-error": type === "error",
            "alert-warning": type === "warning",
            "alert-info": type === "info",
          },
          className,
        )}
      >
        {message}
      </div>
    </div>,
    document.body,
  );
}
