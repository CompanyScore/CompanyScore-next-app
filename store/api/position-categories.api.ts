import { create } from 'zustand';
import { useApi } from '@/api';

type PositionCategoryType = {
  id: string;
  title: string;
};

type PositionCategoryStoreType = {
  categories: PositionCategoryType[];
  loading: boolean;
  getCategories: () => Promise<void>;
};

export const usePositionCategoryApi = create<PositionCategoryStoreType>(
  set => ({
    categories: [],
    loading: false,

    getCategories: async () => {
      set({ loading: true });
      try {
        const { data } = await useApi.get('/position-categories');
        set({ categories: data });
      } catch (e) {
        console.error('Ошибка при загрузке категорий должностей:', e);
      } finally {
        set({ loading: false });
      }
    },
  }),
);
