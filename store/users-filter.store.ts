// store/usersFilter.store.ts
import { create } from 'zustand';

type UsersFilterState = {
  search: string;
  setSearch: (search: string) => void;
};

export const useUsersFilterStore = create<UsersFilterState>(set => ({
  search: '',
  setSearch: search => set({ search }),
}));
