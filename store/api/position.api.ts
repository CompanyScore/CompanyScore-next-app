import { create } from 'zustand';
import { useApi } from '@/api';

type PositionType = {
  id: string;
  title: string;
};

type PositionStoreType = {
  positions: PositionType[];
  loading: boolean;
  getPositions: () => void;
};

export const usePositionApi = create<PositionStoreType>(set => ({
  positions: [],
  loading: false,

  async getPositions() {
    set({ loading: true });
    try {
      const { data } = await useApi.get('/positions');
      set({ positions: data, loading: false });
    } catch (e) {
      console.error('Ошибка при загрузке positions:', e);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
