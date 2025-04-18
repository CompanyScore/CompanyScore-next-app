"use client";
import React, { useRef } from "react";

type Option = { label: string; value: string } | string;

type DropdownProps = {
  text?: string;
  options: Option[];
  selectedValue?: string | number;
  onSelect: (value: string) => void;
  isFirstDisabled?: boolean;
  width?: string;
  className?: string;
};

export const Dropdown = ({
  text,
  options,
  selectedValue,
  onSelect,
  isFirstDisabled = false,
  width = "200px",
  className,
}: DropdownProps) => {
  const selectRef = useRef<HTMLDivElement | null>(null);

  const normalizedOptions = options.map((option) =>
    typeof option === "string" ? { label: option, value: option } : option,
  );

  const filteredOptions = isFirstDisabled
    ? normalizedOptions
    : text
    ? [{ label: text, value: "" }, ...normalizedOptions]
    : normalizedOptions;

  const selectedLabel =
    filteredOptions.find((option) => option.value == selectedValue)?.label ||
    text ||
    "";

  const handleSelect = (
    value: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    onSelect(value);
    (document.activeElement as HTMLElement)?.blur();
  };

  const hasOptions = filteredOptions.length > 0;

  return (
    <div className="dropdown dropdown-bottom w-full relative" style={{ width }}>
      <div
        ref={selectRef}
        tabIndex={hasOptions ? 0 : -1}
        role="button"
        className={`btn text-base-content flex items-center justify-between ${
          hasOptions ? "" : "btn-disabled opacity-60"
        }`}
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

      {hasOptions && (
        <ul
          tabIndex={0}
          className={`dropdown-content p-2 shadow-2xl rounded-box bg-neutral text-white z-50 ${className}`}
          style={{
            maxHeight: "360px",
            overflowY: "auto",
            minWidth: width,
            zIndex: "1000",
          }}
        >
          {filteredOptions.map(({ label, value }) => (
            <li key={value}>
              <button
                className="btn btn-sm btn-block btn-ghost justify-start"
                onClick={(e) => handleSelect(value, e)}
                style={{ textAlign: "left", display: "block" }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
