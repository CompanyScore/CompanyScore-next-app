'use client';
import { Pagination } from '@/shared';
import { useUsersStore } from '@/store/api';

export function UsersPagination() {
  const { users, getUsers, page, limit, total } = useUsersStore();

  const onPageChange = (newPage: number) => {
    getUsers({ page: newPage, limit });
  };

  if (!users.length) {
    return;
  }

  return (
    <Pagination
      page={page}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    />
  );
}
