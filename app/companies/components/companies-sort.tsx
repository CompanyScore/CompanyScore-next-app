'use client';

import { Select } from '@/shared/ui';
import { useRouter, useSearchParams } from 'next/navigation';

export function CompaniesSort() {
  const router = useRouter();
  const sp = useSearchParams();
  const sort = sp.get('sort');

  const options = [
    { label: 'Дате', value: 'createDate' as const },
    { label: 'Рейтингу', value: 'rating' as const },
    { label: 'Имени', value: 'name' as const },
  ];

  return (
    <div className="flex items-center gap-4">
      <p>Сортировать по:</p>
      <div>
        <Select
          placeholder="Сортировка"
          isClearable={false}
          isSearchable={false}
          options={options}
          value={sort}
          onChange={val => {
            if (val) {
              const next = new URLSearchParams();
              next.set('sort', val);
              router.replace(`?${next.toString()}`);
            }
          }}
        />
      </div>
    </div>
  );
}
