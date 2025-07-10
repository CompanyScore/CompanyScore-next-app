'use client';
import { Pagination } from '@/shared';
import { useCompanyStore } from '@/store/api';

export function CompaniesPagination() {
  const { companies, getCompanies, limit, page, total } = useCompanyStore();

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
