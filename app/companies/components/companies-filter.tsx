"use client";
import { Searcher } from "@/shared";
import { Select } from "@/ui";

const ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const countryOptions = ["Казахстан", "USA", "Кыргызстан", "Узбекистан"];
const cityOptions = ["Алматы", "Астана", "Караганда", "Шимкент"];

type CompaniesFilterType = {
  onSearchCompanyByName: (searchedName: string) => void;
  selectedCountry: string;
  onSelectCountry: (selectedCountry: string) => void;
  selectedCity: string;
  onSelectCity: (selectedCity: string) => void;
  selectedRating: string;
  onSelectRating: (selectedRating: string) => void;
};

export function CompaniesFilter({
  onSearchCompanyByName,
  selectedCountry,
  onSelectCountry,
  selectedCity,
  onSelectCity,
  selectedRating,
  onSelectRating,
}: CompaniesFilterType) {
  return (
    <div className="flex items-center gap-4">
      <Searcher onSearch={onSearchCompanyByName} />

      <Select
        defaultValue="Все страны"
        options={countryOptions}
        value={selectedCountry}
        onSelect={onSelectCountry}
      />
      <Select
        defaultValue="Все города"
        options={cityOptions}
        value={selectedCity}
        onSelect={onSelectCity}
      />
      <Select
        defaultValue="Все рэйтинги"
        options={ratingOptions}
        value={selectedRating}
        onSelect={onSelectRating}
      />
    </div>
  );
}
