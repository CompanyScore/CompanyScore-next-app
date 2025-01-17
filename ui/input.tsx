"use client";
import React from "react";

type InputType = {
  changeSearchedValue: (newSearchedValue: string) => void;
};

export function Input({ changeSearchedValue }: InputType) {
  return (
    <input
      type="text"
      placeholder="Компания"
      className="input input-bordered input-primary w-full max-w-44"
      onChange={e => changeSearchedValue(e.target.value)}
    />
  );
}
