"use client";
import { useState } from "react";
import { Searcher } from "@/shared";
import { Button, Error, Dropdown } from "@/ui";
import { useCompaniesStore } from "@/store";

const ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export function CompaniesFilter() {
  const { error, getCompanies } = useCompaniesStore();

  const [selectedRating, setSelectedRating] = useState("");

  const onReset = () => {
    getCompanies({});
    setSelectedRating("");
  };

  const onSearchCompanyByName = (searchedCompanyName: string) => {
    getCompanies({ searchedCompanyName });
  };

  const onSelectRating = (selectedRating: string) => {
    setSelectedRating(selectedRating);
    getCompanies({ selectedRating });
  };

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

        {/* <Button onClick={onReset}>Сбросить</Button> */}
      </div>
    </div>
  );
}
