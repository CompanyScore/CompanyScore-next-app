import { create } from 'zustand';

type CommentFormType = {
  companyId: string;
  companyLocation: {
    country: string;
    city: string;
  };
  userPositionId: string;
  userGrade: {
    years: number;
    months: number;
  };
  isAnonym: number;

  isRecommended: number;
  reasonJoined: string;
  reasonLeft: string;
};

type CommentFormState = {
  commentForm: CommentFormType;
  updateCommentForm: (updatedFields: Partial<CommentFormType>) => void;
};

export const useCommentForm = create<CommentFormState>(set => ({
  commentForm: {
    companyId: '',
    companyLocation: {
      country: '',
      city: '',
    },
    userPositionId: '',
    userGrade: {
      years: 0,
      months: 0,
    },
    isAnonym: 0,

    isRecommended: 1,
    reasonJoined: '',
    reasonLeft: '',
  },

  updateCommentForm: updatedFields =>
    set(state => ({
      commentForm: { ...state.commentForm, ...updatedFields },
    })),
}));
