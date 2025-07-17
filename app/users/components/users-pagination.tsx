'use client';
import { Pagination } from '@/shared';
import { useUsers } from '@/store/api/user.api';
import { useState } from 'react';

export function UsersPagination() {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading } = useUsers({ page, limit });

  if (isLoading || !data?.users.length) {
    return null;
  }

  return (
    <Pagination
      page={page}
      limit={limit}
      total={data.total}
      onPageChange={setPage}
    />
  );
}
