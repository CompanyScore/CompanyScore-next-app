import { create } from 'zustand';

type CommentWorkPrimaryFormType = {
  isWork: boolean;

  dateFrom: Date | null;
  dateTo: Date | null;
  management: number;
  team: number;
  project: number;
  stack: number;
  workingSchedule: number;
  workFormat: number;
  stability: number;
  salaryPoints: number;
  salaryValue: number;
};

type CommentWorkPrimaryFormState = {
  commentWorkPrimaryForm: CommentWorkPrimaryFormType;
  updateCommentWorkPrimaryForm: (
    updatedFields: Partial<CommentWorkPrimaryFormType>,
  ) => void;
};

export const useCommentWorkPrimaryForm = create<CommentWorkPrimaryFormState>(
  set => ({
    commentWorkPrimaryForm: {
      isWork: false,

      dateFrom: null,
      dateTo: null,
      management: 0,
      team: 0,
      project: 0,
      stack: 0,
      workingSchedule: 0,
      workFormat: 0,
      stability: 0,
      salaryPoints: 0,
      salaryValue: 0,
    },

    updateCommentWorkPrimaryForm: updatedFields =>
      set(state => ({
        commentWorkPrimaryForm: {
          ...state.commentWorkPrimaryForm,
          ...updatedFields,
        },
      })),
  }),
);
