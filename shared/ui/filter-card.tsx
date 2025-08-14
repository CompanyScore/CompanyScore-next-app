import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

export function FilterCard({ children, title }: Props) {
  return (
    <div className="flex flex-col gap-6 w-full py-3 border border-neutral-500 rounded-lg">
      <div className="self-start border-b border-neutral-500 w-full pb-3">
        <b className="px-7">{title}</b>
      </div>

      <div className="flex flex-col self-start gap-7 w-full py-3 px-7">
        {children}
      </div>
    </div>
  );
}
