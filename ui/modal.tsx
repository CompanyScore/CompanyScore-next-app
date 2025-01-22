import React from "react";

export function Modal({
  children,
  id,
}: Readonly<{
  children: React.ReactNode;
  id: string;
}>) {
  return (
    <div>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col justify-around w-full gap-4">
          {children}
        </div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </div>
  );
}
