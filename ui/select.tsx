'use client';

import React from 'react';
import ReactSelect, { SingleValue } from 'react-select';

export interface OptionType {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: OptionType[];
  value: OptionType | null;
  onChange: (option: SingleValue<OptionType>) => void;

  placeholder?: string;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  width?: string;
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
}: SelectProps) {
  return (
    <ReactSelect
      className={width}
      placeholder={placeholder}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      options={options}
      value={value}
      onChange={onChange}
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
