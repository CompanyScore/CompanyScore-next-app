"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/ui";
import { CompaniesPostCommentModal } from "@/app/companies/components";
import { useUserStore } from "@/store";

type CompanyType = {
  id: string;
  name: string;
  logo: string;
  description: string;
  rating: number;
};

type CompanyProps = {
  total: number;
};

export function CompanyCard({ total }: CompanyProps) {
  const { id } = useParams<{ id: string }>();
  const { userId } = useUserStore();
  const [company, setCompany] = useState<CompanyType>();
  const [totalScore, setTotalScore] = useState(0);

  const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(
    null,
  );

  const openModal = (company: CompanyType) => {
    setSelectedCompany(company);
  };

  const fetchCompany = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8080/companies/${id}`);

      setCompany(response.data);
      setTotalScore(response.data.rating);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchCompany(id);
  }, [id]);

  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row items-start justify-between w-full">
        <div className="flex flex-col items-center gap-4">
          {company?.logo ? (
            <Image
              width={420}
              height={70}
              alt="Company logo"
              src={process.env.NEXT_PUBLIC_API_URL + company?.logo}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          ) : (
            <div className="skeleton h-32 w-32"></div>
          )}
          <div className="stats shadow">
            <div className="stat flex flex-col items-center">
              <div className="stat-title">Средний балл:</div>
              <div className="stat-value">{totalScore}</div>
              <div className="stat-desc">Общее число комментариев: {total}</div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-start w-full">
            <h1 className="text-5xl font-bold">{company?.name}</h1>
            <Button className="btn-success" onClick={() => openModal(company!)}>
              <label
                htmlFor={userId ? "companies_add_comment_modal" : "login_modal"}
              >
                <Image
                  src="/icons/pencil.svg"
                  alt="Pencil"
                  width={25}
                  height={25}
                />
              </label>
            </Button>
          </div>
          <p className="pt-4">{company?.description}</p>
        </div>
      </div>
      <CompaniesPostCommentModal companyId={selectedCompany?.id || ""} />
    </div>
  );
}
