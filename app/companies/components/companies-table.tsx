"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, Avatar, Tooltip } from "@/ui";
import { redirect } from "next/navigation";
import { CompaniespostCommentModal } from "./index";
import { useUserStore } from "@/store/user-id";

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
  error: string | null;
  refetch: () => void;
};

export function CompaniesTable({
  companies,
  loading,
  error,
  refetch,
}: CompaniesProps) {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const { userId, setUserId, clearUserId } = useUserStore();

  const openModal = (company: Company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="flex flex-col items-center w-full m-auto">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{`Ошибка: ${error}`}</div>
      ) : (
        <table className="table">
          <thead>
            <tr className="text-lg text-center border-b-2 border-gray-500">
              <th>Компания</th>
              <th>Страна</th>
              <th>Город</th>
              <th>Комментарии</th>
              <th>Рейтинг</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {companies.map(company => (
              <tr
                key={company.id}
                className="text-center border-b border-gray-500"
              >
                <td>
                  <div className="flex items-center space-x-2">
                    {company?.logo ? (
                      <Avatar
                        src={process.env.NEXT_PUBLIC_API_URL + company?.logo}
                      />
                    ) : (
                      <div className="skeleton h-32 w-32"></div>
                    )}

                    <p>{company.name}</p>
                  </div>
                </td>
                <td>{company.country}</td>
                <td>{company.city}</td>
                <td>{company.commentsIds.length}</td>
                <td>{company.rating}</td>
                <td>
                  <div className="flex justify-center items-center space-x-2 h-full">
                    <Tooltip tip="Посмотреть">
                      <Button
                        onClick={() => redirect(`/companies/${company.id}`)}
                      >
                        <Image
                          src="/icons/file.svg"
                          alt="File"
                          width={25}
                          height={25}
                        />
                      </Button>
                    </Tooltip>
                    <Tooltip tip="Оставить отзыв">
                      <Button
                        color="success"
                        onClick={() => openModal(company)}
                      >
                        <label htmlFor="companies_add_comment_modal">
                          <Image
                            src="/icons/pencil.svg"
                            alt="Pencil"
                            width={25}
                            height={25}
                          />
                        </label>
                      </Button>
                    </Tooltip>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <CompaniespostCommentModal
        companyId={selectedCompany?.id}
        refetch={refetch}
      />
    </div>
  );
}
