import { useApi } from '@/api';
import { create } from 'zustand';

type AuthData = {
  email: string;
  password: string;
  name?: string;
};

interface AuthState {
  isAuth: boolean;
  loading: boolean;
  error: string;
  registrationUser: (data: AuthData) => Promise<void>;
  loginUser: (data: AuthData) => Promise<void>;
}

export const useAuthStore = create<AuthState>(set => ({
  isAuth: false,
  error: '',
  loading: false,

  registrationUser: async (data: AuthData) => {
    set({ loading: true, error: '' });

    try {
      await useApi.post('auth/register', data);
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

  loginUser: async (data: AuthData) => {
    set({ loading: true, error: '' });

    try {
      await useApi.post('auth/login', data);
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
