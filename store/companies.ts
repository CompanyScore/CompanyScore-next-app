import { create } from "zustand";
import { useApi } from "@/hook";

export type CompanyType = {
  id: number;
  name: string;
  country: string;
  city: string;
  rating: number;
  logo: string;
  description: string;
  commentsIds: string[];
};

type GetCompaniesParams = {
  page?: number;
  limit?: number;
  searchedCompanyName?: string;
  selectedCountry?: string;
  selectedCity?: string;
  selectedRating?: string;
};

interface CompaniesState {
  companies: CompanyType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getCompanies: (params: GetCompaniesParams) => Promise<void>;
}

export const useCompaniesStore = create<CompaniesState>((set) => ({
  companies: [],
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: "",

  getCompanies: async (params: GetCompaniesParams) => {
    set({ loading: true, error: "" });

    try {
      const { data } = await useApi.get(`/companies/`, {
        params: {
          name: params.searchedCompanyName,
          country: params.selectedCountry,
          city: params.selectedCity,
          rating: params.selectedRating,
          limit: params.limit,
          page: params.page,
        },
      });
      set({
        companies: data.data,
        page: data.page,
        total: data.total,
        limit: data.limit,
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
