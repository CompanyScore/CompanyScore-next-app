'use client';

import { ShowBy } from '@/shared';
import { useUsersStore } from '@/store/api';

export function UsersShowBy() {
  const { getUsers, users, limit } = useUsersStore();

  const onLimitChange = (newLimit: number) => {
    getUsers({ page: 1, limit: newLimit });
  };

  if (!users.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
