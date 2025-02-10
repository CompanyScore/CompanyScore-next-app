"use client";
import { useCallback, useState } from "react";
import { Searcher } from "@/shared";
import { Button, Error, Loading, Dropdown } from "@/ui";
import { useCompaniesStore } from "@/store";

const ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export function CompaniesFilter() {
  const { companies, loading, error, getCompanies } = useCompaniesStore();

  const [selectedRating, setSelectedRating] = useState("");
  const [name, setName] = useState("");

  const onReset = () => {
    getCompanies({});
    setSelectedRating("");
    setName("");
  };

  // const onSearchCompanyByName = async (searchedCompanyName: string) => {
  //   getCompanies({ searchedCompanyName });
  // };

  // useCallback предотвращает создание новой функции при каждом ререндере
  const onSearchCompanyByName = useCallback(
    (searchedCompanyName: string) => {
      getCompanies({ searchedCompanyName });
    },
    [getCompanies],
  );

  const onSelectRating = (selectedRating: string) => {
    setSelectedRating(selectedRating);
    getCompanies({ selectedRating });
  };

  if (loading) return <Loading />;
  if (error) return <Error text={error} />;

  return (
    <div className="flex items-center justify-between gap-4">
      <Searcher onSearch={onSearchCompanyByName} />
      <div className="space-x-3">
        <Dropdown
          text="Все рейтинги"
          options={ratingOptions}
          selectedValue={selectedRating}
          onSelect={onSelectRating}
        />

        <Button onClick={onReset}>Сбросить</Button>
      </div>
    </div>
  );
}
