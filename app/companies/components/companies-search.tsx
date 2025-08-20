'use client';

import { GetCompaniesClient } from '@/api/companies/companies-client';
import { Searcher } from '@/shared/ui';
import { useCompaniesFilterStore } from '@/store/companies-filter.store';

export function CompaniesSearch() {
  const search = useCompaniesFilterStore(state => state.search);
  const setSearch = useCompaniesFilterStore(state => state.setSearch);
  GetCompaniesClient({ search });

  return (
    <div className="px-16 py-14 bg-neutral-400 max-w-[880px] m-auto rounded-lg transform -translate-y-[50%]">
      <Searcher onSearch={val => setSearch(val)} />
    </div>
  );
}
