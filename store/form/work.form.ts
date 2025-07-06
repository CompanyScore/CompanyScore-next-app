import { create } from 'zustand';

interface WorkFormType {
  isWork: boolean;
  primary: {
    period: {
      from: string;
      to: string;
    };
    management: number;
    team: number;
    project: number;
    stack: number;
    workingSchedule: number;
    workFormat: number;
    stability: number;
    salary: {
      points: number;
      value: number;
    };
  };
  secondary: {
    development: number;
    comfort: number;
    discrimination: number;
    ethics: number;
    performanceReview: number;
    events: number;
    education: string[];
  };
  finance: {
    bonusesAndPremium: {
      points: number;
      value: number;
    };
    medicine: {
      points: number;
      value: number;
    };
    profitShare: {
      points: number;
      value: number;
    };
    socialBenefits: string[];
  };
}

interface WorkFormState {
  workForm: WorkFormType;
  updateWorkForm: (updatedFields: Partial<WorkFormType>) => void;
}

export const workFormStore = create<WorkFormState>(set => ({
  workForm: {
    isWork: false,
    primary: {
      period: {
        from: '',
        to: '',
      },
      management: 0,
      team: 0,
      project: 0,
      stack: 0,
      workingSchedule: 0,
      workFormat: 0,
      stability: 0,
      salary: {
        points: 0,
        value: 0,
      },
    },

    secondary: {
      development: 0,
      comfort: 0,
      discrimination: 0,
      ethics: 0,
      performanceReview: 0,
      events: 0,
      education: [],
    },

    finance: {
      bonusesAndPremium: {
        points: 0,
        value: 0,
      },
      medicine: {
        points: 0,
        value: 0,
      },
      profitShare: {
        points: 0,
        value: 0,
      },
      socialBenefits: [],
    },
  },

  updateWorkForm: updatedFields =>
    set(state => ({
      workForm: { ...state.workForm, ...updatedFields },
    })),
}));
