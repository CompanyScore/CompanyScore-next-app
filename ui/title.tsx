import classNames from "classnames";

export function Title({
  children,
  size = "4",
  position = "start",
  className,
}: Readonly<{
  children: React.ReactNode;
  size?: "1" | "2" | "3" | "4" | "5" | "6";
  position?: "start" | "center" | "end";
  className?: string;
}>) {
  const sizeClasses: Record<string, string> = {
    "1": "text-xl",
    "2": "text-2xl",
    "3": "text-3xl",
    "4": "text-4xl",
    "5": "text-5xl",
    "6": "text-6xl",
  };

  return (
    <h2
      className={classNames(
        sizeClasses[size],
        {
          "text-left": position === "start",
          "text-center": position === "center",
          "text-right": position === "end",
        },
        className,
      )}
    >
      {children}
    </h2>
  );
}
