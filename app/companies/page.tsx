"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { CompaniesFilter, CompaniesTable } from "./components";
import { Pagination, ShowBy } from "@/shared";
import { Title } from "@/ui";

type Company = {
  id: number;
  name: string;
  country: string;
  city: string;
  rating: number;
  logo: string;
  commentsIds: string[];
};

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchedCompanyName, setSearchedCompanyName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  // const [selectedRating, setSelectedRating] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  console.log(selectedCity);

  const fetchCompanies = async (
    searchedCompanyName: string,
    selectedCountry: string,
    selectedCity: string,
  ) => {
    try {
      const response = await axios.get<Company[]>(
        `http://localhost:8080/api/companies?name=${searchedCompanyName}&country=${selectedCountry}&city=${selectedCity}`,
      );
      setCompanies(response.data);
    } catch (err: any) {
      setErrorMessage(err.message || "Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  };

  const onSearchCompanyByName = (newValue: string) => {
    setSearchedCompanyName(newValue);
  };

  const onSelectCountry = (newValue: string) => {
    setSelectedCountry(newValue);
  };

  const onSelectCity = (newValue: string) => {
    setSelectedCity(newValue);
  };

  // const onSelectCityValue = (newValue: string) => {
  //   setSelectedRating(newValue);
  // };

  useEffect(() => {
    fetchCompanies(searchedCompanyName, selectedCountry, selectedCity);
  }, [searchedCompanyName, selectedCountry, selectedCity]);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col gap-8">
        <Title text={`Компаний: ${companies.length}`} />
        <CompaniesFilter
          onSearchCompanyByName={onSearchCompanyByName}
          selectedCountry={selectedCountry}
          selectedCity={selectedCity}
          onSelectCountry={onSelectCountry}
          onSelectCity={onSelectCity}
        />
        <CompaniesTable
          companies={companies}
          loading={loading}
          errorMessage={errorMessage}
        />
        <div className="flex justify-between">
          <ShowBy />
          <Pagination />
        </div>
      </div>
    </section>
  );
}
