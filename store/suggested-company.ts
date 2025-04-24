import { create } from "zustand";
import { useApi } from "@/api";

export type SuggestedCompanyType = {
  name: string;
  country: string;
  city: string;
};

interface SuggestedCompanyState {
  loading: boolean;
  error: string;
  suggestedCompany: SuggestedCompanyType;
  updateSuggestedCompany: (
    updatedFields: Partial<SuggestedCompanyType>,
  ) => void;
  postSuggestedCompany: (formData: any) => Promise<void>;
}

export const useSuggestedCompanyStore = create<SuggestedCompanyState>(
  (set) => ({
    loading: false,
    error: "",

    suggestedCompany: {
      name: "",
      country: "",
      city: "",
    },

    updateSuggestedCompany: (updatedFields) =>
      set((state) => ({
        suggestedCompany: { ...state.suggestedCompany, ...updatedFields },
      })),

    postSuggestedCompany: async (formData) => {
      set({ loading: true, error: "" });

      try {
        await useApi.post("/suggest-company", formData);
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message || "Произошла ошибка";
        set({ error: errorMessage });
        throw new Error(errorMessage);
      } finally {
        set({ loading: false });
      }
    },
  }),
);
