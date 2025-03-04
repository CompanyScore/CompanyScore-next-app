import { create } from "zustand";
import { useApi } from "@/api";

export type SuggestCompanyType = {
  name: string;
  description: string;
};

interface SuggestCompanyState {
  loading: boolean;
  error: string;
  postSuggestCompany: (formData: any) => Promise<void>;
}

export const useSuggestCompanyStore = create<SuggestCompanyState>((set) => ({
  loading: false,
  error: "",

  postSuggestCompany: async (formData) => {
    set({ loading: true, error: "" });

    try {
      await useApi.post("/suggest-company", formData);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },
}));
