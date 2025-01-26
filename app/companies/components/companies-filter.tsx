"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Searcher } from "@/shared";
import { Button, ErrorMessage, Loading, DropdownFilter } from "@/ui";

const ratingOptions = ["1", "2", "3", "4", "5"];

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
        `http://localhost:8080/companies/locations`,
      );
      const fetchedCountries = Object.keys(response.data);
      const fetchedCities = response.data[selectedCountry] || [];

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
    <div className="flex items-center justify-between gap-4">
      <Searcher onSearch={onSearchCompanyByName} />
      <div className="space-x-3">
        {loading ? (
          <Loading />
        ) : errorMessage ? (
          <ErrorMessage text={`Ошибка: ${errorMessage}`} />
        ) : (
          <>
            <DropdownFilter
              label="Все страны"
              options={countryOptions}
              selectedValue={selectedCountry}
              onSelect={onSelectCountry}
            />
            <DropdownFilter
              label="Все города"
              options={cityOptions}
              selectedValue={selectedCity}
              onSelect={onSelectCity}
            />
            <DropdownFilter
              label="Все рейтинги"
              options={ratingOptions}
              selectedValue={selectedRating}
              onSelect={onSelectRating}
            />
          </>
        )}
        <Button onClick={onReset}>Сбросить</Button>
      </div>
    </div>
  );
}
