"use client";
import { useState, useEffect, useCallback } from "react";
import { Input } from "@/ui";
import { useDebounce } from "@/hook";

type SearcherProps = {
  onSearch: (searchValue: string) => void;
};

export function Searcher({ onSearch }: SearcherProps) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500);

  // Обернём в useCallback, чтобы зависимость в useEffect не вызывала лишние ререндеры
  const stableOnSearch = useCallback(onSearch, []);

  useEffect(() => {
    // stableOnSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <Input placeholder="Поиск" value={searchValue} onChange={setSearchValue} />
  );
}
