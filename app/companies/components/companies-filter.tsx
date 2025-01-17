"use client";
import { Select, Input } from "@/ui";
import React, { useState } from "react";

const ratingOptions = ["1", "2", "3", "4", "5"];
const countryOptions = ["Казахстан", "Россия", "Кыргызстан", "Узбекистан"];
const cityOptions = ["Алматы", "Астана", "Караганда", "Шимкент"];

export function CompaniesFilter() {
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
      <Input />

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
