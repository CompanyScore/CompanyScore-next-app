"use client";

import { ShowBy } from "@/shared";
import { useCompaniesStore } from "@/store";

export function CompaniesShowBy() {
  const { companies, getCompanies, limit } = useCompaniesStore();

  const onLimitChange = (newLimit: number) => {
    getCompanies({ limit: newLimit });
  };

  if (!companies.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
