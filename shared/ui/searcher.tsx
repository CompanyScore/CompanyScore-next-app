'use client';
import { useState } from 'react';
import { Input } from '@/shared/ui';

type SearcherProps = {
  onClick: (searchValue: string) => void;
};

export function Searcher({ onClick }: SearcherProps) {
  const [searchValue, setSearchValue] = useState('');
  const handleClick = () => {
    onClick(searchValue);
  };

  return (
    <div className="flex">
      <Input
        placeholder="Поиск"
        type="search"
        value={searchValue}
        onChange={val => setSearchValue(String(val))}
        onKeyDown={handleClick}
        className="[&::-webkit-search-cancel-button]:cursor-pointer rounded-l-lg rounded-r-none"
      />
      <button
        className="btn btn-primary rounded-l-none rounded-r-lg text-lg"
        onClick={handleClick}
      >
        Поиск
      </button>
    </div>
  );
}
