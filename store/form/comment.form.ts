import { create } from 'zustand';

type CommentFormType = {
  companyId: string;
  companyLocation: {
    country: string;
    city: string;
  };
  userPositionCategoryId: string;
  userPositionId: string;
  userGradeYears: number;
  userGradeMonths: number;
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
    userPositionCategoryId: '',
    userPositionId: '',
    userGradeYears: 0,
    userGradeMonths: 0,
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
