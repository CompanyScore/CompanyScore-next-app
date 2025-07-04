import { create } from 'zustand';

interface InternshipFormType {
  isInternship: boolean;
  period: {
    from: string;
    to: string;
  };
  isUseful: number;
  clearlyOrganized: number;
  correspondedInternLevel: number;
  developingAssignment: number;
  supportSupervisor: number;
  isPaid: number;
  isOffer: number;
}

interface InternshipFormFormState {
  internshipForm: InternshipFormType;
  updateInternshipForm: (updatedFields: Partial<InternshipFormType>) => void;
}

export const internshipFormStore = create<InternshipFormFormState>(set => ({
  internshipForm: {
    isInternship: false,
    period: {
      from: '',
      to: '',
    },
    isUseful: 0,
    clearlyOrganized: 0,
    correspondedInternLevel: 0,
    developingAssignment: 0,
    supportSupervisor: 0,
    isPaid: 0,
    isOffer: 0,
  },
  updateInternshipForm: updatedFields =>
    set(state => ({
      internshipForm: { ...state.internshipForm, ...updatedFields },
    })),
}));
