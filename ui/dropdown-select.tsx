import React from "react";

type DropdownFilterProps = {
  label: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

export const DropdownFilter = ({
  label,
  options,
  selectedValue,
  onSelect,
}: DropdownFilterProps) => {
  const handleSelect = (value: string) => {
    onSelect(value);

    const activeElement = document.activeElement as HTMLElement | null;
    activeElement?.blur();
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {selectedValue || label}
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
        className="dropdown-content z-[1] p-2 shadow-2xl rounded-box w-52 bg-neutral"
      >
        <li>
          <button
            className="btn btn-sm btn-block btn-ghost justify-start"
            onClick={() => handleSelect("")}
          >
            {label}
          </button>
        </li>
        {options.map((option) => (
          <li key={option}>
            <button
              className="btn btn-sm btn-block btn-ghost justify-start"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
