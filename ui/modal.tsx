import classNames from "classnames";

export function Modal({
  children,
  id,
  className,
  backdropClassName,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  className?: string;
  backdropClassName?: string;
}>) {
  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal z-40" role="dialog">
        <div
          className={classNames(
            "modal-box flex flex-col justify-around w-full gap-4 p-10",
            className,
          )}
        >
          {children}
        </div>
        <label
          className={classNames("modal-backdrop", backdropClassName)}
          htmlFor={id}
        >
          Close
        </label>
      </div>
    </div>
  );
}
