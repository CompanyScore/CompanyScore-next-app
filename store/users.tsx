import { create } from "zustand";
import { useApi } from "@/hook";

type UserType = {
  id: string;
  name: string;
  avatar: string;
  position: string;
  commentsIds: string[];
  createDate: Date;
};

type GetUsersParams = {
  page?: number;
  limit?: number;
};

type CommentsState = {
  users: UserType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getUsers: (params: GetUsersParams) => Promise<void>;
};

export const useUsersStore = create<CommentsState>(set => ({
  users: [],
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: "",

  getUsers: async (params: GetUsersParams) => {
    set({ loading: true, error: "" });
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
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },
}));
