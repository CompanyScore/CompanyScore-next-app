"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Company = {
  id: number;
  name: string;
  country: string;
  city: string;
  rating: number;
  logo: string;
  commentsIds: string[];
};

type CompaniesProps = {
  companies: Company[];
  loading: boolean;
  errorMessage: string | null;
};

export function CompaniesTable({ companies, loading, errorMessage }: CompaniesProps) {
  return (
    <div className="overflow-x-auto">
      {loading ? (
        <p className="text-center text-lg">Загрузка...</p>
      ) : errorMessage ? (
        <p className="text-center text-red-600 text-lg">Ошибка: {errorMessage}</p>
      ) : (
        <table className="table">
          <thead>
            <tr className="text-lg text-center border-b-2 border-gray-500">
              <th>Компания</th>
              <th>Страна</th>
              <th>Город</th>
              <th>Комментариии</th>
              <th>Рэйтинг</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr
                key={company.id}
                className="text-center border-b border-gray-500"
              >
                <td className="flex items-center gap-2">
                  <Link href={`/companies/${company.id}`}>
                    <img src={company.logo} alt="Company logo" width={100} />
                    <p>{company.name}</p>
                  </Link>
                </td>
                <td>{company.country}</td>
                <td>{company.city}</td>
                <td>{company.commentsIds.length}</td>
                <td>{company.rating}</td>
                <td>
                  <button className="btn btn-primary">
                    <Image
                      src="/icons/pencil.svg"
                      alt="Pencil"
                      width={25}
                      height={25}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
