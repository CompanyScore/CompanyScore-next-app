"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ErrorMessage, Loading } from "@/ui";

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

export function CompaniesTable({
  companies,
  loading,
  errorMessage,
}: CompaniesProps) {
  return (
    <div className="flex flex-col items-center max-w-[1200px] w-full m-auto">
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage text={` Ошибка: ${errorMessage}`} />
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
                  <img src={company.logo} alt="Company logo" width={100} />
                  <p>{company.name}</p>
                </td>
                <td>{company.country}</td>
                <td>{company.city}</td>
                <td>{company.commentsIds.length}</td>
                <td>{company.rating}</td>
                <td className="flex justify-center items-center gap-2">
                  <button className="btn btn-primary">
                    <Link href={`/companies/${company.id}`}>
                      <Image
                        src="/icons/file.svg"
                        alt="File"
                        width={25}
                        height={25}
                      />
                    </Link>
                  </button>
                  <label htmlFor="modal_write_comment" className="btn btn-primary">
                    <Image
                      src="/icons/pencil.svg"
                      alt="Pencil"
                      width={25}
                      height={25}
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
