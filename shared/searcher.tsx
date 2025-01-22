"use client";
import React, { useState } from "react";
import { Input } from "@/ui";
import { useDebounce } from "@/hook";

type SearcherProps = {
  onSearch: (searchValue: string) => void; // Функция, вызываемая при изменении значения после debounce
  debounceDelay?: number; // Время задержки в миллисекундах
};

export function Searcher({ onSearch, debounceDelay = 500 }: SearcherProps) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, debounceDelay);

  React.useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return <Input placeholder="Поиск" onChange={setSearchValue} />;
}
