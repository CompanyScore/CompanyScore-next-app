'use client';

import React from 'react';
import ReactSelect, { SingleValue } from 'react-select';

export interface OptionType {
  label: string;
  value: string;
}

interface SelectProps {
  options: OptionType[];
  value: string | null;
  onChange: (value: string | null) => void;

  placeholder?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  width?: string;
  isLoading?: boolean; // <-- NEW
  onInputChange?: (text: string) => void; // <-- NEW
}

export function Select({
  options,
  value,
  onChange,
  placeholder = 'Выберите...',
  isClearable = true,
  isSearchable = true,
  isDisabled = false,
  width = 'w-full',
  isLoading = false,
  onInputChange,
}: SelectProps) {
  const selected = value
    ? (options.find(o => o.value === value) ?? null)
    : null;

  return (
    <ReactSelect<OptionType, false>
      className={width}
      placeholder={placeholder}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      options={options}
      value={selected}
      onChange={(opt: SingleValue<OptionType>) => onChange(opt?.value ?? null)}
      onInputChange={input => onInputChange?.(input)}
      menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
      styles={{
        control: base => ({
          ...base,
          padding: '2px 4px',
          fontSize: '14px',
        }),
        menuPortal: base => ({
          ...base,
          zIndex: 9999,
        }),
      }}
    />
  );
}
