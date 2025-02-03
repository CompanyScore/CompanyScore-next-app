import React from "react";

type TextareaTypeProps = {
  placeholder: string;
  onChange: (newSearchedValue: string) => void;
};

export function Textarea({ placeholder, onChange }: TextareaTypeProps) {
  return (
    <textarea
      className="textarea textarea-primary w-full max-w-sm"
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    ></textarea>
  );
}
