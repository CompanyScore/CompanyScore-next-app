import { create } from 'zustand';

type CommentInternshipFormType = {
  isInternship: boolean;
  period: {
    from: Date | null;
    to: Date | null;
  };
  isUseful: number;
  clearlyOrganized: number;
  correspondedInternLevel: number;
  developingAssignment: number;
  supportSupervisor: number;
  isPaid: number;
  isOffer: number;
};

type CommentInternshipFormFormState = {
  commentInternshipForm: CommentInternshipFormType;
  updateCommentInternshipForm: (
    updatedFields: Partial<CommentInternshipFormType>,
  ) => void;
};

export const useCommentInternshipForm = create<CommentInternshipFormFormState>(
  set => ({
    commentInternshipForm: {
      isInternship: false,
      period: {
        from: null,
        to: null,
      },
      isUseful: 0,
      clearlyOrganized: 0,
      correspondedInternLevel: 0,
      developingAssignment: 0,
      supportSupervisor: 0,
      isPaid: 0,
      isOffer: 0,
    },
    updateCommentInternshipForm: updatedFields =>
      set(state => ({
        commentInternshipForm: {
          ...state.commentInternshipForm,
          ...updatedFields,
        },
      })),
  }),
);
