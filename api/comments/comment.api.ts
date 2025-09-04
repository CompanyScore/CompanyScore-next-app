import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentForm } from '@/store/form';

export type GetSingleCommentType = GetCommentType & {
  taskScore?: number;
  taskStars?: number;
  interviewScore?: number;
  interviewStars?: number;
  internshipScore?: number;
  internshipStars?: number;
  workPrimaryScore?: number;
  workPrimaryStars?: number;
  workSecondaryScore?: number;
  workSecondaryStars?: number;
  workFinanceScore?: number;
  workFinanceStars?: number;
};

export type GetCommentType = {
  id: string;
  isRecommended: number;
  reasonJoined: string;
  reasonLeft: string;
  createDate: Date;
  score: number;
  stars: number;

  user: {
    id: string;
    name: string;
    avatar: string;
    gradeYears: number;
    gradeMonths: number;
    position: {
      id: number;
      title: number;
    };
  };

  company: {
    id: string;
    name: string;
    logo: string;
  };
};

type GetCommentsParamsType = {
  page?: number;
  limit?: number;
  companyId?: string;
};

interface CommentsState {
  comment: GetSingleCommentType | null;
  comments: GetCommentType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getCommentById: (commentId: string) => Promise<void>;
  getComments: (params: GetCommentsParamsType) => Promise<void>;
  postComment: () => Promise<string>;
  deleteComment: (commentId: string) => Promise<string>;
}

export const useCommentApi = create<CommentsState>(set => ({
  comment: null,
  comments: [],
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: '',

  getCommentById: async (commentId: string) => {
    set({ loading: true, error: '', comment: null });

    try {
      const { data } = await useApi.get(`/comments/${commentId}`);
      set({ comment: data });
    } catch (error: unknown) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      const errorMessage =
        axiosError.response?.data?.message || 'Произошла ошибка';
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  getComments: async (params: GetCommentsParamsType) => {
    set({ loading: true, error: '' });

    try {
      const { data } = await useApi.get(`/comments`, {
        params: {
          companyId: params.companyId,
          page: params.page,
          limit: params.limit,
        },
      });

      set({
        comments: data.comments,
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

  postComment: async () => {
    const { commentForm } = useCommentForm.getState();

    set({ loading: true, error: '' });

    try {
      const { data } = await useApi.post('/comments', commentForm);
      return data;
    } catch (error: unknown) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      const errorMessage =
        (await axiosError.response?.data?.message) || 'Произошла ошибка';
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },

  deleteComment: async (commentId: string) => {
    set({ loading: true, error: '' });

    try {
      const { data } = await useApi.delete(`/comments/${commentId}`);
      return data;
    } catch (error: unknown) {
      const axiosError = error as {
        response?: { data?: { message?: string } };
      };
      const errorMessage =
        (await axiosError.response?.data?.message) || 'Произошла ошибка';
      set({ error: errorMessage });
      throw new Error(errorMessage);
    } finally {
      set({ loading: false });
    }
  },
}));
