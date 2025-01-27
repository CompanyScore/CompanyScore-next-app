"use client";
import React from "react";

type InputType = {
  placeholder: string;
  onChange: (newSearchedValue: string) => void;
};

export function Input({ placeholder, onChange }: InputType) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input input-bordered input-primary w-full max-w-sm"
      onChange={e => onChange(e.target.value)}
    />
  );
}
