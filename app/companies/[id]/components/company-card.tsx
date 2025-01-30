"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/ui";

type CompanyType = {
  id: number;
  name: string;
  logo: string;
  country: string;
  city: string;
  description: string;
  rating: number;
};

export function CompanyCard() {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<CompanyType>();

  const fetchCompany = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8080/companies/${id}`);

      setCompany(response.data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchCompany(id);
  }, [id]);

  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col lg:flex-row items-start">
        <div className="flex flex-col items-center gap-4">
          <Image
            width={70}
            height={70}
            alt="Company logo"
            src={`${process.env.NEXT_PUBLIC_API_URL}${company?.logo}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="stats shadow">
            <div className="stat flex flex-col items-center">
              <div className="stat-title">Средний балл:</div>
              <div className="stat-value">5</div>
              <div className="stat-desc">Общее число комментариев: 25</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-5xl font-bold">{company?.name}</h1>
            <Button onClick={() => {}}>
              <Image
                src="/icons/pencil.svg"
                alt="Pencil"
                width={25}
                height={25}
              />
            </Button>
          </div>
          <p className="pt-4">
            {company?.city}, {company?.country}
          </p>
          <p className="pt-4">{company?.description}</p>
        </div>
      </div>
    </div>
  );
}
