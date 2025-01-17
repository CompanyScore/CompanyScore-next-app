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

export default function Companies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get<Company[]>(
        "http://localhost:8080/api/companies",
      );
      setCompanies(response.data);
    } catch (err: any) {
      setErrorMessage(err.message || "Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-col gap-8">
        <Title text={`Компаний: ${companies.length}`} />
        <CompaniesFilter />
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
