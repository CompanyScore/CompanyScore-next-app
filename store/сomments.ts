import { create } from 'zustand';
import { useApi } from '@/api';

export type CommentType = {
  id: string;
  rating: number;
  createDate: Date;
  text: string;
  position: string;
  company: {
    id: number;
    logo: string;
    name: string;
  };
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};

type GetCommentsParams = {
  page?: number;
  limit?: number;
  userId?: string;
  companyId?: string;
};

export type PostComment = {
  companyId: string;
  position: string;
  grade: {
    year: number;
    month: number;
  };
  task: {
    text: string;
    rating: number;
  };
  interview: {
    text: string;
    rating: number;
  };
  work: {
    rating: {
      team: number;
      management: number;
      stack: number;
      project: number;
      workFormat: number;
    };
    finance: {
      salary: number;
      medicine: number;
      premium: number;
      bonuses: number;
      stocks: number;
      dividends: number;
    };
    other: {
      education: number;
      events: number;
    };
  };
  recommendation: {
    isRecommended: boolean;
    reasonJoined: string;
    reasonLeft: string;
  };
};

interface CommentsState {
  comments: CommentType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getComments: (params: GetCommentsParams) => Promise<void>;
  postComment: (formData: PostComment) => Promise<void>;
  updateComment: (
    commentId: string,
    text: string,
    rating: number,
    position: string,
  ) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
}

export const useCommentsStore = create<CommentsState>(set => ({
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

  postComment: async formData => {
    const newComment = {
      companyId: formData.companyId,
      position: formData.position,
      gradeYear: formData.grade.year,
      gradeMonth: formData.grade.month,
      taskText: formData.task.text,
      taskRating: formData.task.rating,
      interviewText: formData.interview.text,
      interviewRating: formData.interview.rating,
      workRatingTeam: formData.work.rating.team,
      workRatingManagement: formData.work.rating.management,
      workRatingStack: formData.work.rating.stack,
      workRatingProject: formData.work.rating.project,
      workRatingWorkFormat: formData.work.rating.workFormat,
      workRatingFinanceSalary: formData.work.finance.salary,
      workRatingFinanceMedicine: formData.work.finance.medicine,
      workRatingFinancePremium: formData.work.finance.premium,
      workRatingFinanceBonuses: formData.work.finance.bonuses,
      workRatingFinanceStocks: formData.work.finance.stocks,
      workRatingFinanceDividends: formData.work.finance.dividends,
      workRatingOtherEducation: formData.work.other.education,
      workRatingOtherEvents: formData.work.other.events,
      recommendationIsRecommended: formData.recommendation.isRecommended,
      recommendationReasonJoined: formData.recommendation.reasonJoined,
      recommendationReasonLeft: formData.recommendation.reasonLeft,
    };

    set({ loading: true, error: '' });

    try {
      const { data } = await useApi.post('/comments', newComment);
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

  updateComment: async (
    commentId: string,
    text: string,
    rating: number,
    position: string,
  ) => {
    try {
      await useApi.patch(`/comments/${commentId}`, { text, rating, position });
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

  deleteComment: async (commentId: string) => {
    try {
      await useApi.delete(`/comments/${commentId}`);
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
