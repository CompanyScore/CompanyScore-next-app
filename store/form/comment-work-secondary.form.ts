import { create } from 'zustand';

export type CommentWorkSecondaryFormType = {
  development: number;
  comfort: number;
  discrimination: number;
  ethics: number;
  performanceReview: number;
  events: number;

  isOnlineCoursesEdu: boolean;
  isOfflineCoursesEdu: boolean;
  isTrainingsEdu: boolean;
  isBusinessTripsEdu: boolean;
  isPartUniPayEdu: boolean;
  isFullUniPayEdu: boolean;
};

type CommentWorkSecondaryFormState = {
  commentWorkSecondaryForm: CommentWorkSecondaryFormType;
  updateCommentWorkSecondaryForm: (
    updatedFields: Partial<CommentWorkSecondaryFormType>,
  ) => void;
};

export const useCommentWorkSecondaryForm =
  create<CommentWorkSecondaryFormState>(set => ({
    commentWorkSecondaryForm: {
      isWork: false,

      development: 0,
      comfort: 0,
      discrimination: 0,
      ethics: 0,
      performanceReview: 0,
      events: 0,
      isOnlineCoursesEdu: false,
      isOfflineCoursesEdu: false,
      isTrainingsEdu: false,
      isBusinessTripsEdu: false,
      isPartUniPayEdu: false,
      isFullUniPayEdu: false,
    },

    updateCommentWorkSecondaryForm: updatedFields =>
      set(state => ({
        commentWorkSecondaryForm: {
          ...state.commentWorkSecondaryForm,
          ...updatedFields,
        },
      })),
  }));
