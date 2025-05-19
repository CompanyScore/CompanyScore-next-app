'use client';
import { useState, useEffect } from 'react';
import { Input } from '@/ui';
import { useDebounce } from '@/hook';

type SearcherProps = {
  onSearch: (searchValue: string) => void;
};

export function Searcher({ onSearch }: SearcherProps) {
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <Input
      placeholder="Поиск"
      type="search"
      value={searchValue}
      onChange={val => setSearchValue(String(val))}
      className="[&::-webkit-search-cancel-button]:cursor-pointer"
    />
  );
}
