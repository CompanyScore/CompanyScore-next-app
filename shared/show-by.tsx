import React from 'react';
import { Select } from '@/ui';
import { SingleValue } from 'react-select';
import { OptionType } from '@/ui/select';

const numberOptions: OptionType[] = [5, 10, 15, 20].map(n => ({
  label: n.toString(),
  value: n,
}));

type ShowByProps = {
  limit: number;
  onLimitChange: (newLimit: number) => void;
};

export function ShowBy({ limit, onLimitChange }: ShowByProps) {
  const handleSelect = (option: SingleValue<OptionType>) => {
    onLimitChange(Number(option?.value ?? 10));
  };

  return (
    <Select
      width="60px"
      options={numberOptions}
      value={{ label: limit.toString(), value: limit }}
      onChange={handleSelect}
      isClearable={false}
      isSearchable={false}
      placeholder="Показать по"
    />
  );
}
