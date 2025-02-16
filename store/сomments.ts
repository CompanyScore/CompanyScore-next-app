import { create } from "zustand";
import { useApi } from "@/hook";

export type CommentType = {
  id: number;
  rating: number;
  createDate: Date;
  text: string;
  position: string;
  company: {
    id: number;
    logo: string;
    name: string;
  };
};

interface CommentsState {
  comments: CommentType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getComments: (userId: number, page?: number, limit?: number) => Promise<void>;
  postComment: (formData: any) => Promise<void>;
  updateComment: (
    commentId: number,
    text: string,
    rating: number,
    position: string,
  ) => Promise<void>;
  deleteComment: (commentId: number) => Promise<void>;
}

export const useCommentsStore = create<CommentsState>(set => ({
  comments: [],
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: "",

  getComments: async (userId, page = 1, limit = 5) => {
    set({ loading: true, error: "" });
    try {
      const { data } = await useApi.get(
        `/comments/?userId=${userId}&page=${page}&limit=${limit}`,
      );
      set({
        comments: data.data,
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

  postComment: async formData => {
    try {
      await useApi.post("/comments", formData);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  updateComment: async (commentId, text, rating, position) => {
    try {
      await useApi.patch(`/comments/${commentId}`, { text, rating, position });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteComment: async commentId => {
    try {
      await useApi.delete(`/comments/${commentId}`);
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
