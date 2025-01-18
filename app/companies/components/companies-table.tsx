"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ErrorMessage, Loading } from "@/ui";
import CommentModal from "@/components/comment-modal/CommentModal";

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
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (company: Company) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCompany(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center max-w-[1200px] w-full m-auto">
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage text={`Ошибка: ${errorMessage}`} />
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
            {companies.map((company) => (
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
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(company)}
                  >
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
      {isModalOpen && selectedCompany && (
        <CommentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          companyId={selectedCompany.id}
          userId={1}
        />
      )}
    </div>
  );
}
