import { create } from "zustand";
import { useApi } from "@/api";

// stores/useCommentFormStore.ts

interface FormType {
  companyId: string;
  suggestedCompanyName: string;
  location: {
    country: string;
    city: string;
  };
  position: string;
  grade: {
    years: number;
    months: number;
  };
  task: {
    isTask: boolean;
    text: string;
    rating: number;
  };
  interview: {
    isInterview: boolean;
    text: string;
    rating: number;
  };
  work: {
    isWork: boolean;
    text: string;
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
    reasonJoined: string;
    reasonLeft: string;
    recommendation: number;
  };
}

interface CommentFormState {
  form: FormType;
  updateForm: (updatedFields: Partial<FormType>) => void;
  resetForm: () => void;
}

export const useCommentFormStore = create<CommentFormState>((set) => ({
  form: {
    companyId: "",
    suggestedCompanyName: "",
    location: {
      country: "",
      city: "",
    },
    position: "",
    grade: {
      years: 0,
      months: 0,
    },
    task: { isTask: false, text: "", rating: 0 },
    interview: { isInterview: false, text: "", rating: 0 },
    work: {
      isWork: false,
      text: "",
      rating: {
        management: 0,
        team: 0,
        project: 0,
        stack: 0,
        workFormat: 0,
      },
      finance: {
        salary: 0,
        medicine: 0,
        premium: 0,
        bonuses: 0,
        stocks: 0,
        dividends: 0,
      },
      other: {
        education: 0,
        events: 0,
      },
      recommendation: 0,
      reasonJoined: "",
      reasonLeft: "",
    },
  },
  updateForm: (updatedFields) =>
    set((state) => ({
      form: { ...state.form, ...updatedFields },
    })),
  resetForm: () =>
    set({
      form: {
        suggestedCompanyName: "",
        companyId: "",
        location: {
          country: "",
          city: "",
        },
        position: "",
        grade: {
          years: 0,
          months: 0,
        },
        task: { isTask: false, text: "", rating: 0 },
        interview: { isInterview: false, text: "", rating: 0 },
        work: {
          isWork: false,
          text: "",
          rating: {
            management: 0,
            team: 0,
            project: 0,
            stack: 0,
            workFormat: 0,
          },
          finance: {
            salary: 0,
            medicine: 0,
            premium: 0,
            bonuses: 0,
            stocks: 0,
            dividends: 0,
          },
          other: {
            education: 0,
            events: 0,
          },
          reasonJoined: "",
          reasonLeft: "",
          recommendation: 0,
        },
      },
    }),
}));

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

interface CommentsState {
  comments: CommentType[];
  page: number;
  total: number;
  limit: number;
  loading: boolean;
  error: string;
  getComments: (params: GetCommentsParams) => Promise<void>;
  postComment: (formData: any) => Promise<void>;
  updateComment: (
    commentId: string,
    text: string,
    rating: number,
    position: string,
  ) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
}

export const useCommentsStore = create<CommentsState>((set) => ({
  comments: [],
  page: 1,
  total: 0,
  limit: 5,
  loading: false,
  error: "",

  getComments: async (params: GetCommentsParams) => {
    set({ loading: true, error: "" });

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
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
    } finally {
      set({ loading: false });
    }
  },

  postComment: async (formData) => {
    set({ loading: true, error: "" });

    try {
      await useApi.post("/comments", formData);
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Произошла ошибка";
      set({ error: errorMessage });
      throw new Error(errorMessage);
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

  deleteComment: async (commentId) => {
    try {
      await useApi.delete(`/comments/${commentId}`);
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
