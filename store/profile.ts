import { create } from 'zustand';
import { useApi } from '@/api';

export type ProfileType = {
  id: string;
  name: string;
  avatar: string;
  position: string;
  description: string;
  comments: string[];
};

interface ProfileState {
  profile: ProfileType;
  loading: boolean;
  error: string;
  getProfile: () => Promise<void>;
  updateProfile: (formData: any) => Promise<void>;
}

export const useProfileStore = create<ProfileState>(set => ({
  profile: {
    id: '',
    name: '',
    avatar: '',
    position: '',
    description: '',
    comments: [],
  },
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: '',

  getProfile: async () => {
    set({ loading: true, error: '' });

    try {
      const { data } = await useApi.get(`/users/profile`);
      set({
        profile: data,
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateProfile: async formData => {
    set({ loading: true, error: '' });

    try {
      await useApi.patch(`/users`, formData);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Произошла ошибка';
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },
}));
