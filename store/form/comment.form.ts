import { create } from 'zustand';

interface CommentFormType {
  companyId: string;
  companyLocation: {
    country: string;
    city: string;
  };
  userPosition: string;
  userGrade: {
    years: number;
    months: number;
  };
  isAnonym: number;

  isRecommended: number;
  reasonJoined: string;
  reasonLeft: string;
}

interface CommentFormState {
  commentForm: CommentFormType;
  updateCommentForm: (updatedFields: Partial<CommentFormType>) => void;
}

export const commentFormStore = create<CommentFormState>(set => ({
  commentForm: {
    companyId: '',
    companyLocation: {
      country: '',
      city: '',
    },
    userPosition: '',
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
