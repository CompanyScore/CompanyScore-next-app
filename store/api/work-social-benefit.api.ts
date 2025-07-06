import { create } from 'zustand';
import { useApi } from '@/api';

interface WorkSocialBenefit {
  id: string;
  label: string;
}

interface WorkSocialBenefitStore {
  items: WorkSocialBenefit[];
  loading: boolean;
  getWorkSocialBenefits: () => void;
}

export const useWorkSocialBenefitApi = create<WorkSocialBenefitStore>(set => ({
  items: [],
  loading: false,

  async getWorkSocialBenefits() {
    set({ loading: true });
    try {
      const { data } = await useApi.get('/work-social-benefit');
      set({ items: data, loading: false });
    } catch (e) {
      console.error('Ошибка при загрузке work_social_benefit:', e);
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));
