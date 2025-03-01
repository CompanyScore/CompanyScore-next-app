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

  // Преобразуем массив строк в массив объектов { label, value }
  const normalizedOptions = options.map((option) =>
    typeof option === "string" ? { label: option, value: option } : option,
  );

  // Убираем первый элемент, если isFirstDisabled=true
  // Убираем первый элемент, если isFirstDisabled=true
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
    event.preventDefault(); // предотвращает нежелательные события формы
    event.stopPropagation(); // предотвращает всплытие событий
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
        className={`dropdown-content p-2 shadow-2xl rounded-box bg-neutral text-white z-50 ${className}`}
        style={{
          width,
          maxHeight: "360px",
          overflowY: "auto",
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
    </div>
  );
};
