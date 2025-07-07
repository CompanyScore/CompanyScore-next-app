import { create } from 'zustand';

type CommentWorkFormType = {
  isWork: boolean;
  primary: {
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
  secondary: {
    development: number;
    comfort: number;
    discrimination: number;
    ethics: number;
    performanceReview: number;
    events: number;
    educations: string[];
  };
  finance: {
    bonusesPoints: number;
    bonusesValue: number;
    medicinePoints: number;
    medicineValue: number;
    profitSharePoints: number;
    profitShareValue: number;
    socialBenefits: string[];
  };
};

type CommentWorkFormState = {
  commentWorkForm: CommentWorkFormType;
  updateCommentWorkForm: (updatedFields: Partial<CommentWorkFormType>) => void;
};

export const useCommentWorkForm = create<CommentWorkFormState>(set => ({
  commentWorkForm: {
    isWork: false,
    primary: {
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

    secondary: {
      development: 0,
      comfort: 0,
      discrimination: 0,
      ethics: 0,
      performanceReview: 0,
      events: 0,
      educations: [],
    },

    finance: {
      bonusesPoints: 0,
      bonusesValue: 0,
      medicinePoints: 0,
      medicineValue: 0,
      profitSharePoints: 0,
      profitShareValue: 0,
      socialBenefits: [],
    },
  },

  updateCommentWorkForm: updatedFields =>
    set(state => ({
      commentWorkForm: { ...state.commentWorkForm, ...updatedFields },
    })),
}));
