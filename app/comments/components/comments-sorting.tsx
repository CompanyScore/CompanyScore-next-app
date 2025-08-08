'use client';

import { Select } from '@/shared/ui';

export async function CommentsSorting() {
  const sortingOptions = [
    {
      label: 'Популярности',
      value: 1,
    },
    {
      label: 'Рейтингу',
      value: 2,
    },
    {
      label: 'Дате',
      value: 3,
    },
  ];

  return (
    <div className="self-end flex items-center gap-4">
      <p>Сортировать по:</p>
      <div>
        <Select
          placeholder="Компания"
          isClearable={false}
          isSearchable={false}
          options={sortingOptions}
          value={{
            label: 'Популярности',
            value: 1,
          }}
          onChange={() => console.log(1)}
        />
      </div>
    </div>
  );
}
