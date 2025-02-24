"use client";
import React, { useState, useEffect, useRef } from "react";

type Option = { label: string; value: string } | string;

type DropdownProps = {
  text?: string; // Было label, теперь text
  options: Option[];
  selectedValue?: string | number;
  onSelect: (value: string) => void;
  isFirstDisabled?: boolean;
  width?: string;
};

export const Dropdown = ({
  text, // Было label, теперь text
  options,
  selectedValue,
  onSelect,
  isFirstDisabled = false,
  width = "200px",
}: DropdownProps) => {
  const [disabled, setDisabled] = useState(isFirstDisabled);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDisabled(isFirstDisabled);
  }, [isFirstDisabled]);

  // Преобразуем массив строк в массив объектов { label, value }
  const normalizedOptions = options.map(option =>
    typeof option === "string" ? { label: option, value: option } : option,
  );

  const selectedLabel =
    normalizedOptions.find(option => option.value == selectedValue)?.label ||
    text ||
    "";

  const handleSelect = (value: string) => {
    onSelect(value);
    (document.activeElement as HTMLElement)?.blur(); // Закрываем список после выбора
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        ref={selectRef}
        tabIndex={0}
        role="button"
        className="btn text-base-content flex items-center justify-between w-full max-w-md"
        style={{ width }}
      >
        <span
          style={{ textAlign: "left", display: "inline-block", width: "auto" }}
        >
          {selectedLabel}
        </span>
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content p-2 shadow-2xl rounded-box bg-neutral text-white z-50"
        style={{
          width,
          maxHeight: "360px",
          overflowY: "auto",
          zIndex: "1000",
        }}
      >
        {text && (
          <li>
            <button
              className="btn btn-sm btn-block btn-ghost justify-start"
              onClick={() => handleSelect("")}
              style={{ textAlign: "left", display: "block" }}
            >
              {text}
            </button>
          </li>
        )}
        {normalizedOptions.map(({ label, value }) => (
          <li key={value}>
            <button
              className="btn btn-sm btn-block btn-ghost justify-start"
              onClick={() => handleSelect(value)}
              style={{ textAlign: "left", display: "block" }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
