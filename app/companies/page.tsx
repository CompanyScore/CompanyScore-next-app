"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  CompaniesFilter,
  CompaniesTable,
  WriteCommentModal,
} from "./components";
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
  const [selectedRating, setSelectedRating] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  console.log(selectedRating);

  const fetchCompanies = async (
    searchedCompanyName: string,
    selectedCountry: string,
    selectedCity: string,
    selectedRating: string,
  ) => {
    try {
      const response = await axios.get<Company[]>(
        `http://localhost:8080/api/companies?name=${searchedCompanyName}&country=${selectedCountry}&city=${selectedCity}&rating=${selectedRating}`,
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

  const onSelectRating = (newValue: string) => {
    setSelectedRating(newValue);
  };

  useEffect(() => {
    fetchCompanies(
      searchedCompanyName,
      selectedCountry,
      selectedCity,
      selectedRating,
    );
  }, [searchedCompanyName, selectedCountry, selectedCity, selectedRating]);

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <Title text={`Компаний: ${companies.length}`} />
      <CompaniesFilter
        onSearchCompanyByName={onSearchCompanyByName}
        selectedCountry={selectedCountry}
        onSelectCountry={onSelectCountry}
        selectedCity={selectedCity}
        onSelectCity={onSelectCity}
        selectedRating={selectedRating}
        onSelectRating={onSelectRating}
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
      <WriteCommentModal />
    </section>
  );
}
