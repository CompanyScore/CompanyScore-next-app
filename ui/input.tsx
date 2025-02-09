"use client";
import React from "react";

type InputType = {
  value?: string;
  placeholder: string;
  onChange: (newSearchedValue: string) => void;
};

export function Input({ value, placeholder, onChange }: InputType) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      className="input input-bordered input-primary w-full max-w-md"
      onChange={e => onChange(e.target.value)}
    />
  );
}
