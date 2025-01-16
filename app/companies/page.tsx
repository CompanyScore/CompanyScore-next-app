"use client";
import CompaniesFilter from "@/components/companies/companies-filter";
import CompaniesTable from "@/components/companies/companies-table";
import Pagination from "@/components/general/pagination";
import ShowBy from "@/components/general/show-by";
import axios from "axios";
import { useEffect, useState } from "react";

type Company = {
  id: number;
  name: string;
  country: string;
  city: string;
  rating: number;
  logo: string;
  commentsIds: string[];
};

export default function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get<Company[]>(
        "http://localhost:8080/api/companies",
      );
      setCompanies(response.data);
    } catch (err: any) {
      setError(err.message || "Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {loading ? (
        <p className="text-center text-lg">Загрузка...</p>
      ) : error ? (
        <p className="text-center text-red-600 text-lg">Ошибка: {error}</p>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex justify-between"></div>
          <h1 className="text-4xl">Компаний: {companies.length}</h1>
          <CompaniesFilter />
          <CompaniesTable companies={companies} />
          <div className="flex justify-between">
            <ShowBy />
            <Pagination />
          </div>
        </div>
      )}
    </section>
  );
}
