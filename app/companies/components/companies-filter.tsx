"use client";
import { Searcher } from "@/shared";
import { Select } from "@/ui";
import React, { useState } from "react";

const ratingOptions = ["1", "2", "3", "4", "5"];
const countryOptions = ["Казахстан", "USA", "Кыргызстан", "Узбекистан"];
const cityOptions = ["Алматы", "Астана", "Караганда", "Шимкент"];

type CompaniesFilterType = {
  selectedCountry: string;
  selectedCity: string;
  onSelectCity: (selectedCity: string) => void;
  onSearchCompanyByName: (searchedName: string) => void;
  onSelectCountry: (selectedCountry: string) => void;
};

export function CompaniesFilter({
  selectedCountry,
  selectedCity,
  onSearchCompanyByName,
  onSelectCountry,
  onSelectCity,
}: CompaniesFilterType) {
  const [selectedRating, setSelectedRating] = useState("");

  const changeRatingValue = (newValue: string) => {
    setSelectedRating(newValue);
  };

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
        onSelect={changeRatingValue}
      />
    </div>
  );
}
