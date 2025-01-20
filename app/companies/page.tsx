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

type CompaniesResponse = {
  data: Company[];
  total: number;
  page: number;
  limit: number;
};

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchedCompanyName, setSearchedCompanyName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  console.log(page, limit, total);

  const fetchCompanies = async (
    searchedCompanyName: string,
    selectedCountry: string,
    selectedCity: string,
    selectedRating: string,
    page: number,
    limit: number,
  ) => {
    try {
      setLoading(true);
      const response = await axios.get<CompaniesResponse>(
        `http://localhost:8080/api/companies`,
        {
          params: {
            name: searchedCompanyName,
            country: selectedCountry,
            city: selectedCity,
            rating: selectedRating,
            page,
            limit,
          },
        },
      );

      setCompanies(response.data.data);
      setTotal(response.data.total);
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
    setSelectedCity("");
  };

  const onSelectCity = (newValue: string) => {
    setSelectedCity(newValue);
  };

  const onSelectRating = (newValue: string) => {
    setSelectedRating(newValue);
  };

  const onLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Сбрасываем страницу при изменении лимита
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchCompanies(
      searchedCompanyName,
      selectedCountry,
      selectedCity,
      selectedRating,
      page,
      limit,
    );
  }, [
    searchedCompanyName,
    selectedCountry,
    selectedCity,
    selectedRating,
    page,
    limit,
  ]);

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
        <ShowBy limit={limit} onLimitChange={onLimitChange} />
        <Pagination
          currentPage={page}
          totalItems={total}
          itemsPerPage={limit}
          onPageChange={onPageChange}
        />
      </div>
      <WriteCommentModal />
    </section>
  );
}
