"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Searcher } from "@/shared";
import { Button, ErrorMessage, Loading, Select } from "@/ui";

const ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchCountriesAndCities = async (selectedCountry: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/companies/countries-with-cities`,
      );
      const fetchedCountries = await Object.keys(response.data);
      const fetchedCities = await response.data[selectedCountry];

      setCountryOptions(fetchedCountries);
      setCityOptions(fetchedCities);
    } catch (err: any) {
      setErrorMessage(err.message || "Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountriesAndCities(selectedCountry);
  }, [selectedCountry]);

  const onReset = () => {
    onSearchCompanyByName("");
    onSelectCountry("");
    onSelectCity("");
    onSelectRating("");
  };

  return (
    <div className="flex items-center gap-4">
      <Searcher onSearch={onSearchCompanyByName} />

      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage text={`Ошибка: ${errorMessage}`} />
      ) : (
        <>
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
        </>
      )}
      <Select
        defaultValue="Все рэйтинги"
        options={ratingOptions}
        value={selectedRating}
        onSelect={onSelectRating}
      />
      <Button onClick={onReset}>Сбросить</Button>
    </div>
  );
}
