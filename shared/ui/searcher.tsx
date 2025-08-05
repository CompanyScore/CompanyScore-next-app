'use client';
import { useState, useEffect } from 'react';
import { Input } from '@/shared/ui';
import { useDebounce } from '@/shared/hooks';

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
