import { create } from 'zustand';
import { useApi } from '@/api';

type PositionCategoryType = {
  id: string;
  name: string;
};

type PositionType = {
  id: string;
  title: string;
  category: PositionCategoryType;
};

type PositionStoreType = {
  positions: PositionType[];
  loading: boolean;
  getPositions: () => Promise<void>;
};

export const usePositionApi = create<PositionStoreType>(set => ({
  positions: [],
  loading: false,

  getPositions: async () => {
    set({ loading: true });
    try {
      const { data } = await useApi.get('/positions');
      set({ positions: data });
    } catch (e) {
      console.error('Ошибка при загрузке positions:', e);
    } finally {
      set({ loading: false });
    }
  },
}));
