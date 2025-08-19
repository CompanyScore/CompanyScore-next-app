'use client';

import { Select } from '@/shared/ui';
import { useRouter, useSearchParams } from 'next/navigation';

type Sort = 'date' | 'rating';

export function CommentsSorting() {
  const router = useRouter();
  const sp = useSearchParams();
  const sort = (sp.get('sort') as Sort) || 'date';

  const options = [
    { label: 'Дате', value: 'date' as const },
    { label: 'Рейтингу', value: 'rating' as const },
  ];

  return (
    <div className="flex items-center gap-4 w-full">
      <p>Сортировать по:</p>
      <div>
        <Select
          placeholder="Сортировка"
          isClearable={false}
          isSearchable={false}
          options={options}
          value={sort}
          onChange={val => {
            const s: Sort = val === 'rating' ? 'rating' : 'date';
            const next = new URLSearchParams(sp);
            next.set('sort', s);
            router.replace(`?${next.toString()}`);
          }}
        />
      </div>
    </div>
  );
}
