'use client';
import { Searcher } from '@/shared/ui';
import { useRouter, useSearchParams } from 'next/navigation';

export function CommentsSearcher() {
  const router = useRouter();
  const sp = useSearchParams();

  const onSearchCompanyByName = (q: string) => {
    const next = new URLSearchParams(sp.toString());
    const value = q.trim();

    if (value) next.set('companyName', value);
    else next.delete('companyName');

    next.delete('page'); // сброс пагинации на смене фильтра
    router.replace(`?${next.toString()}`, { scroll: false });
  };

  return <Searcher onSearch={onSearchCompanyByName} />;
}
