'use client';

import { Searcher } from '@/shared/ui';
import { useRouter, useSearchParams } from 'next/navigation';

export function CompaniesSearch() {
  const router = useRouter();
  const sp = useSearchParams();

  const onSearchCompanyByName = (q: string) => {
    const next = new URLSearchParams(sp.toString());
    const value = q.trim();

    if (value) next.set('companyName', value);
    else next.delete('companyName');

    next.delete('page');
    router.replace(`?${next.toString()}`, { scroll: false });
  };

  return (
    <div className="px-16 py-14 bg-neutral-400 max-w-[880px] m-auto rounded-lg transform -translate-y-[50%]">
      <Searcher onSearch={val => onSearchCompanyByName(val)} />
    </div>
  );
}
