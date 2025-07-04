import { create } from 'zustand'; // или определи прямо тут
import { useApi } from '@/api';

export interface InterviewStage {
  id: string; // Например: 'tech_interview'
  label: string; // Например: 'Техническое интервью'
}

interface InterviewStagesStore {
  stages: InterviewStage[];
  loading: boolean;
  error: string | null;
  getInterviewStages: () => Promise<void>;
}

export const useInterviewStageStore = create<InterviewStagesStore>(set => ({
  stages: [],
  loading: false,
  error: null,

  async getInterviewStages() {
    set({ loading: true, error: null });

    try {
      const { data } = await useApi.get('/interview-stage');
      set({ stages: data, loading: false });
    } catch (error: unknown) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      const errorMessage =
        axiosError.response?.data?.message || 'Произошла ошибка';
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },
}));
