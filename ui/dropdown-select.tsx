import React, { useState, useEffect, useRef } from "react";

type DropdownFilterProps = {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  isFirstDisabled?: boolean;
};

export const DropdownFilter = ({
  label,
  options,
  selectedValue,
  onSelect,
  isFirstDisabled = false,
}: DropdownFilterProps) => {
  const [disabled, setDisabled] = useState(isFirstDisabled);
  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDisabled(isFirstDisabled);
  }, [isFirstDisabled]);

  const handleSelect = (value: string) => {
    onSelect(value);

    const activeElement = document.activeElement as HTMLElement | null;
    activeElement?.blur();
  };

  const selectWidth = selectRef.current?.offsetWidth;

  return (
    <div className="dropdown dropdown-end">
      <div
        ref={selectRef}
        tabIndex={0}
        role="button"
        className="btn m-1 text-base-content"
        style={{
          width: "fit-content",
          minWidth: "150px",
        }}
      >
        <span
          style={{
            textAlign: "left",
            display: "inline-block",
            width: "auto",
          }}
        >
          {selectedValue || label}
        </span>
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl rounded-box bg-neutral text-white"
        style={{
          width: selectWidth ? `${selectWidth}px` : "auto",
        }}
      >
        <li>
          <button
            className="btn btn-sm btn-block btn-ghost justify-start"
            onClick={() => handleSelect("")}
            disabled={disabled}
            style={{
              textAlign: "left",
              display: "block",
            }}
          >
            {label}
          </button>
        </li>
        {options.map((option) => (
          <li key={option}>
            <button
              className="btn btn-sm btn-block btn-ghost justify-start"
              onClick={() => handleSelect(option)}
              style={{
                textAlign: "left",
                display: "block",
              }}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
