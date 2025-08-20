'use client';

import { Searcher } from '@/shared/ui';
import { useUsersFilterStore } from '@/store/users-filter.store';

export const UsersFilter = () => {
  const setSearch = useUsersFilterStore(state => state.setSearch);

  return (
    <div className="mb-4">
      <Searcher onSearch={val => setSearch(val)} />
    </div>
  );
};
