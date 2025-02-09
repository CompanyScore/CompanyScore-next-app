"use client";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Searcher } from "@/shared";
import { Button, Error, Loading, Dropdown } from "@/ui";
import { useCompaniesStore } from "@/store";

const ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export function CompaniesFilter() {
  const { companies, loading, error, getCompanies } = useCompaniesStore();

  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [cityOptions, setCityOptions] = useState<string[]>([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  const fetchLocations = async () => {
    const response = await axios.get(
      `http://localhost:8080/companies/locations`,
    );
    const fetchedCountries = Object.keys(response.data);
    const fetchedCities = response.data[selectedCountry] || [];

    setCountryOptions(fetchedCountries);
    setCityOptions(fetchedCities);
  };

  useEffect(() => {
    fetchLocations();
  }, [selectedCountry]);

  const onReset = () => {
    getCompanies({});
    setSelectedCountry("");
    setSelectedCity("");
    setSelectedRating("");
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

  const onSelectCountry = async (selectedCountry: string) => {
    setSelectedCountry(selectedCountry);
    getCompanies({ selectedCountry });
  };

  const onSelectCity = async (selectedCity: string) => {
    setSelectedCity(selectedCity);
    getCompanies({ selectedCity });
  };

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
          text="Все страны"
          options={countryOptions}
          selectedValue={selectedCountry}
          onSelect={onSelectCountry}
        />
        <Dropdown
          text="Все города"
          options={cityOptions}
          selectedValue={selectedCity}
          onSelect={onSelectCity}
        />
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
