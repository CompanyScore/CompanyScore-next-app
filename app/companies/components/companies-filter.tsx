"use client";
import { Searcher } from "@/shared";
import { Select } from "@/ui";
import React, { useState } from "react";

const ratingOptions = ["1", "2", "3", "4", "5"];
const countryOptions = ["Казахстан", "USA", "Кыргызстан", "Узбекистан"];
const cityOptions = ["Алматы", "Астана", "Караганда", "Шимкент"];

type CompaniesFilterType = {
  selectedCountry: string;
  onSearchCompanyByName: (newSearchedCompanyName: string) => void;
  onSelectCountryValue: (selectedCompanyCountry: string) => void;
};

export function CompaniesFilter({
  selectedCountry,
  onSearchCompanyByName,
  onSelectCountryValue,
}: CompaniesFilterType) {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const changeCityValue = (newValue: string) => {
    setSelectedRating(newValue);
  };

  const changeRatingValue = (newValue: string) => {
    setSelectedCity(newValue);
  };

  return (
    <div className="flex items-center gap-4">
      <Searcher onSearch={onSearchCompanyByName} />

      <Select
        defaultValue="Все страны"
        options={countryOptions}
        value={selectedCountry}
        changeValue={onSelectCountryValue}
      />
      <Select
        defaultValue="Город"
        options={cityOptions}
        value={selectedCity}
        changeValue={changeCityValue}
      />
      <Select
        defaultValue="Рэйтинг"
        options={ratingOptions}
        value={selectedRating}
        changeValue={changeRatingValue}
      />
    </div>
  );
}
