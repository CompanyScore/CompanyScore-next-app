import { create } from 'zustand';
import { useApi } from '@/api';

interface WorkEducation {
  id: string;
  label: string;
}

interface WorkEducationStore {
  items: WorkEducation[];
  loading: boolean;
  getWorkEducation: () => void;
}

export const useWorkEducationStore = create<WorkEducationStore>(set => ({
  items: [],
  loading: false,

  async getWorkEducation() {
    set({ loading: true });
    try {
      const { data } = await useApi.get('/work-education');
      set({ items: data, loading: false });
    } catch (e) {
      console.error('Ошибка при загрузке work_education:', e);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
