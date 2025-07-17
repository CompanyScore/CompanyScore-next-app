'use client';

import { ShowBy } from '@/shared';
import { useUsers } from '@/store/api/user.api';
import { useState } from 'react';

export function UsersShowBy() {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useUsers({ page, limit });

  const onLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // сбрасываем на первую страницу при изменении лимита
  };

  if (isLoading || !data?.users.length) {
    return null;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
