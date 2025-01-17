"use client";
import { Searcher } from "@/shared";
import { Select } from "@/ui";
import React, { useState } from "react";

const ratingOptions = ["1", "2", "3", "4", "5"];
const countryOptions = ["Казахстан", "Россия", "Кыргызстан", "Узбекистан"];
const cityOptions = ["Алматы", "Астана", "Караганда", "Шимкент"];

type CompaniesFilterType = {
  onSearchCompanyByName: (newSearchedCompanyName: string) => void;
};

export function CompaniesFilter({
  onSearchCompanyByName,
}: CompaniesFilterType) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const changeCountryValue = (newValue: string) => {
    setSelectedCountry(newValue);
  };

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
        defaultValue="Страна"
        options={countryOptions}
        value={selectedCountry}
        changeValue={changeCountryValue}
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
