import { create } from 'zustand';
import { useApi } from '@/api';

type UserType = {
  id: string;
  name: string;
  avatar: string;
  position: {
    id: string;
    title: number;
  };
  description: string;
  commentsIds: string[];
  createDate: Date;
  email: string;
};

type GetUsersParams = {
  page?: number;
  limit?: number;
};

type UsersState = {
  users: UserType[];
  user: UserType | null;
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getUsers: (params: GetUsersParams) => Promise<void>;
  getUser: (id: string) => Promise<void>;
};

export const useUserApi = create<UsersState>(set => ({
  users: [],
  user: null,
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: '',

  getUsers: async (params: GetUsersParams) => {
    set({ loading: true, error: '' });
    try {
      const { data } = await useApi.get(`/users`, {
        params: {
          isDeleted: false,
          page: params.page,
          limit: params.limit,
        },
      });
      set({
        users: data.data,
        page: data.page,
        total: data.total,
        limit: data.limit,
      });
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
  getUser: async (id: string) => {
    set({ loading: true, error: '' });
    try {
      const { data } = await useApi.get(`/users/${id}`);
      set({
        user: data,
      });
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
