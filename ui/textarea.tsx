import React from "react";

type TextareaTypeProps = {
  placeholder: string;
  rows?: number;
  onChange: (newSearchedValue: string) => void;
};

export function Textarea({
  placeholder,
  onChange,
  rows = 5,
}: TextareaTypeProps) {
  return (
    <textarea
      className="textarea textarea-primary w-full placeholder:whitespace-pre-wrap"
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  );
}
