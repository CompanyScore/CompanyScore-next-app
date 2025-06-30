import { useApi } from '@/api';
import { create } from 'zustand';

interface AuthState {
  isAuth: boolean;
  loading: boolean;
  error: string;
  registrationUser: (formData: FormData) => Promise<void>;
  loginUser: (formData: FormData) => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  isAuth: false,
  error: '',
  loading: false,

  registrationUser: async formData => {
    set({ loading: true, error: '' });

    try {
      await useApi.post('auth/register', formData);
      set({ isAuth: true });
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

  loginUser: async formData => {
    set({ loading: true, error: '' });

    try {
      await useApi.post('auth/login', formData);
      set({ isAuth: true });
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
