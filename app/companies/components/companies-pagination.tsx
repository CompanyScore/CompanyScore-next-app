"use client";
import { Pagination } from "@/shared";
import { useCompaniesStore } from "@/store";

export function CompaniesPagination() {
  const { companies, getCompanies, limit, page, total } = useCompaniesStore();

  const onPageChange = (newPage: number) => {
    getCompanies({ limit, page: newPage });
  };

  if (!companies?.length) {
    return;
  }

  return (
    <Pagination
      page={page}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    />
  );
}
