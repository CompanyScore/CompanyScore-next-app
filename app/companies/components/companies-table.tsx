"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { CompaniesPostCommentModal } from "./index";
import { useCompaniesStore } from "@/store";
import type { CompanyType } from "@/store/companies";
import { Button, Avatar, Tooltip, Error, Title } from "@/ui";

export function CompaniesTable() {
  const { companies, loading, error } = useCompaniesStore();

  const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(
    null,
  );

  const openModal = (company: CompanyType) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    useCompaniesStore.getState().getCompanies({});
  }, []);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (error) {
    return <Error text={error} />;
  }

  if (!companies.length) {
    return <Title position="center">Список компаний пуст</Title>;
  }

  return (
    <div className="flex flex-col items-center w-full m-auto">
      <table className="table">
        <thead>
          <tr className="text-lg text-center border-b-2 border-gray-500">
            <th>Компания</th>
            <th>Рейтинг</th>
            <th>Комментарии</th>
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
              <td>{company.rating}</td>
              <td>{company.commentsIds.length}</td>
              <td>
                <div className="flex justify-center items-center space-x-2 h-full">
                  <Tooltip tip="Посмотреть">
                    <Button
                      className="btn-neutral"
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
                    <Button className="btn-success" onClick={() => openModal(company)}>
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

      <CompaniesPostCommentModal companyId={selectedCompany?.id} />
    </div>
  );
}
