'use client';

import { ShowBy } from '@/shared';
import { useCompanyStore } from '@/store/api';

export function CompaniesShowBy() {
  const { companies, getCompanies, limit } = useCompanyStore();

  const onLimitChange = (newLimit: number) => {
    getCompanies({ limit: newLimit });
  };

  if (!companies?.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
