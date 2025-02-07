import { create } from "zustand";
import { useApi } from "@/hook";

export type ProfileType = {
  id: number;
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
  getProfile: (userId: number) => Promise<void>;
  updateProfile: (userId: number, formData: any) => Promise<void>;
  deleteProfile: (userId: number) => Promise<void>;
}

export const useProfileStore = create<ProfileState>(set => ({
  profile: {
    id: 0,
    name: "",
    avatar: "",
    position: "",
    description: "",
    comments: [],
  },
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: "",

  getProfile: async userId => {
    set({ loading: true, error: "" });

    try {
      const { data } = await useApi.get(`/users/${userId}`);
      set({
        profile: data,
      });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateProfile: async (userId, formData) => {
    try {
      await useApi.patch(`/users/${userId}`, formData);
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteProfile: async userId => {
    try {
      await useApi.delete(`/users/${userId}`);
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
