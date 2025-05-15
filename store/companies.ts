import { create } from "zustand";
import { useApi } from "@/api";

export type CompanyType = {
  id?: string;
  name: string;
  country: string;
  city: string;
  rating?: number;
  logo?: string;
  description?: string;
  commentsIds?: string[];
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
  company: CompanyType | null;
  companiesNew: CompanyType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  countryOptions: string[];
  cityOptions: string[];
  createCompany: (company: CompanyType) => Promise<string | undefined>;
  getCompanies: (params: GetCompaniesParams) => Promise<void>;
  getCompany: (id: string) => Promise<CompanyType>;
  getCompaniesNew: () => Promise<void>;
  getLocations: (selectedCountry: string) => Promise<void>;
}

export const useCompaniesStore = create<CompaniesState>((set, get) => ({
  companies: [],
  company: null,
  companiesNew: [],
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: "",
  countryOptions: [],
  cityOptions: [],

  createCompany: async (company: CompanyType) => {
    set({ loading: true, error: "" });

    try {
      const { data } = await useApi.post(`/companies/`, company);
      set({ companies: [...get().companies, data] });
      return data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

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
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  getCompany: async (id: string) => {
    set({ loading: true, error: "" });

    try {
      const { data } = await useApi.get(`/companies/${id}`);
      set({ company: data });
      return data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  getCompaniesNew: async () => {
    set({ loading: true, error: "" });

    try {
      const { data } = await useApi.get(`/companies/new/`);
      set({ companiesNew: data });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  getLocations: async (selectedCountry: string) => {
    try {
      const response = await useApi.get(`/companies/locations`);
      const fetchedCountries = Object.keys(response.data);
      const fetchedCities = response.data[selectedCountry] || [];

      set({
        countryOptions: fetchedCountries,
        cityOptions: fetchedCities,
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Не удалось загрузить локации";
      set({ error: errorMessage });
    }
  },
}));
