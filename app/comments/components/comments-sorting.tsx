'use client';

import { Select } from '@/shared/ui';
import { useRouter, useSearchParams } from 'next/navigation';

type Sort = 'date' | 'rating';
type Option = { label: string; value: string };

export function CommentsSorting() {
  const router = useRouter();
  const sp = useSearchParams();
  const sort = (sp.get('sort') as Sort) || 'date';

  const options = [
    { label: 'Дате', value: 'date' as const },
    { label: 'Рейтингу', value: 'rating' as const },
  ];

  const toSort = (v: unknown): Sort => (v === 'rating' ? 'rating' : 'date');

  return (
    <div className="self-end flex items-center gap-4">
      <p>Сортировать по:</p>
      <div>
        <Select
          placeholder="Сортировка"
          isClearable={false}
          isSearchable={false}
          options={options}
          value={options.find(o => o.value === sort) || options[0]}
          onChange={opt => {
            const s = toSort((opt as Option | null)?.value);
            const next = new URLSearchParams(sp);
            next.set('sort', s);
            router.replace(`?${next.toString()}`);
          }}
        />
      </div>
    </div>
  );
}
