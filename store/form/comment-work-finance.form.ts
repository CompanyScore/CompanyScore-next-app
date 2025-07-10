import { create } from 'zustand';

export type CommentWorkFinanceFormType = {
  bonusesPoints: number;
  bonusesValue: number;
  medicinePoints: number;
  medicineValue: number;
  profitSharePoints: number;
  profitShareValue: number;

  isFreeMealsSocial: boolean;
  isTransportSocial: boolean;
  isHousingSocial: boolean;
  isHolidayBonusSocial: boolean;
  isEducationSocial: boolean;
  isChildAllowanceSocial: boolean;
  isFinancialAssistSocial: boolean;
};

type CommentWorkFinanceFormState = {
  commentWorkFinanceForm: CommentWorkFinanceFormType;
  updateCommentWorkFinanceForm: (
    updatedFields: Partial<CommentWorkFinanceFormType>,
  ) => void;
};

export const useCommentWorkFinanceForm = create<CommentWorkFinanceFormState>(
  set => ({
    commentWorkFinanceForm: {
      isWork: false,

      bonusesPoints: 0,
      bonusesValue: 0,
      medicinePoints: 0,
      medicineValue: 0,
      profitSharePoints: 0,
      profitShareValue: 0,

      isFreeMealsSocial: false,
      isTransportSocial: false,
      isHousingSocial: false,
      isHolidayBonusSocial: false,
      isEducationSocial: false,
      isChildAllowanceSocial: false,
      isFinancialAssistSocial: false,
    },

    updateCommentWorkFinanceForm: updatedFields =>
      set(state => ({
        commentWorkFinanceForm: {
          ...state.commentWorkFinanceForm,
          ...updatedFields,
        },
      })),
  }),
);
