import { create } from "zustand";
import { useApi } from "@/hook";

type UserType = {
  id: number;
  name: string;
  avatar: string;
  createDate: Date;
};

interface CommentsState {
  users: UserType[];
  // page: number;
  // total: number;
  // limit: number;
  loading: boolean;
  error: string;
  getUsers: () => Promise<void>;
}

export const useUsersStore = create<CommentsState>(set => ({
  users: [],
  // page: 1,
  // total: 0,
  // limit: 5,
  loading: false,
  error: "",

  getUsers: async () => {
    set({ loading: true, error: "" });
    try {
      const { data } = await useApi.get(`/users?isDeleted=false`);
      set({
        users: data,
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
