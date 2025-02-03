import { create } from "zustand";
import { useApi } from "@/hook";

export type CommentType = {
  id: number;
  rating: number;
  createDate: Date;
  text: string;
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
  errorMessage: string;
  fetchComments: (
    userId: number,
    page?: number,
    limit?: number,
  ) => Promise<void>;
  addComment: (userId: number, text: string) => Promise<void>;
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
  errorMessage: "",

  fetchComments: async (userId, page = 1, limit = 5) => {
    set({ loading: true, errorMessage: "" });
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
      set({ errorMessage: error.message });
    } finally {
      set({ loading: false });
    }
  },

  addComment: async (userId, text) => {
    try {
      await useApi.post("/comments", { userId, text });
    } catch (error: any) {
      set({ errorMessage: error.message });
    } finally {
      set({ loading: false });
    }
  },

  updateComment: async (commentId, text, rating, position) => {
    try {
      await useApi.patch(`/comments/${commentId}`, { text, rating, position });
    } catch (error: any) {
      set({ errorMessage: error.message });
    } finally {
      set({ loading: false });
    }
  },

  deleteComment: async commentId => {
    try {
      await useApi.delete(`/comments/${commentId}`);
    } catch (error: any) {
      set({ errorMessage: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
