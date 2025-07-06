import { create } from 'zustand';
import { useApi } from '@/api';

export type CommentType = {
  id: string;
  userPosition: string;
  userGrade: {
    years: number;
    months: number;
  };
  isRecommended: number;
  reasonJoined: string;
  reasonLeft: string;
  createDate: Date;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  company: {
    id: string;
    name: string;
    logo: string;
  };
};

type GetCommentsParams = {
  page?: number;
  limit?: number;
  companyId?: string;
};

export type PostComment = {
  companyId: string;
  userPosition: string;
  userGrade: {
    years: number;
    months: number;
  };
  isAnonym: number;

  isRecommended: number;
  reasonJoined: string;
  reasonLeft: string;
};

interface CommentsState {
  comments: CommentType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getComments: (params: GetCommentsParams) => Promise<void>;
  postComment: (commentForm: PostComment) => Promise<string>;
}

export const useCommentApi = create<CommentsState>(set => ({
  comments: [],
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: '',

  getComments: async (params: GetCommentsParams) => {
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
        comments: data.data,
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

  postComment: async commentForm => {
    const payload = {
      companyId: commentForm.companyId,
      userPosition: commentForm.userPosition,
      userGradeYears: commentForm.userGrade.years,
      userGradeMonths: commentForm.userGrade.months,
      isAnonym: commentForm.isAnonym,
      isRecommended: commentForm.isRecommended,
      reasonJoined: commentForm.reasonJoined,
      reasonLeft: commentForm.reasonLeft,
    };

    set({ loading: true, error: '' });

    try {
      const { data } = await useApi.post('/comments', payload);
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
