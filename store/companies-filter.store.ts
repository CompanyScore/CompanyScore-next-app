import { create } from 'zustand';

type CompaniesFilterState = {
  search: string;
  setSearch: (search: string) => void;
};

export const useCompaniesFilterStore = create<CompaniesFilterState>(set => ({
  search: '',
  setSearch: search => set({ search }),
}));
