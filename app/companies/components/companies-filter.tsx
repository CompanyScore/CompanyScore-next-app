"use client";
import { useEffect, useState } from "react";
import { Searcher } from "@/shared";
import { Error, Dropdown, Button, Toast } from "@/ui";
import { useCompaniesStore } from "@/store";
import { CreateCompanyModal } from "@/app/companies/modals";

const ratingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export function CompaniesFilter() {
  const { getLocations, countryOptions, cityOptions, getCompanies, error } =
    useCompaniesStore();

  const [selectedRating, setSelectedRating] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    getLocations(selectedCountry);
  }, [getLocations, selectedCountry]);

  const onSearchCompanyByName = (searchedCompanyName: string) => {
    getCompanies({ searchedCompanyName });
  };

  const onSelectRating = (selectedRating: string) => {
    setSelectedRating(selectedRating);
    getCompanies({ selectedRating });
  };

  const onSelectCountry = async (selectedCountry: string) => {
    setSelectedCountry(selectedCountry);
    getCompanies({ selectedCountry });
  };

  const onSelectCity = async (selectedCity: string) => {
    setSelectedCity(selectedCity);
    getCompanies({ selectedCity });
  };

  const onReset = () => {
    onSearchCompanyByName("");
    setSelectedCountry("");
    setSelectedCity("");
    setSelectedRating("");
    getCompanies({});
  };

  if (error) return <Error text={error} />;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center flex-wrap gap-4 max-w-[750px] w-full">
          <Searcher onSearch={onSearchCompanyByName} />
          <div className="flex items-center gap-4">
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
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={onReset}>Сбросить</Button>
          <Button>
            <label htmlFor="create_company_modal">Предложить компанию</label>
          </Button>
        </div>
      </div>
      <CreateCompanyModal />
      <Toast />
    </div>
  );
}
