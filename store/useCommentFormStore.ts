import { create } from 'zustand';

interface FormType {
  companyId: string;
  suggestedCompanyName: string;
  location: {
    country: string;
    city: string;
  };
  position: string;
  grade: {
    years: number;
    months: number;
  };
  task: {
    isTask: boolean;
    text: string;
    rating: number;
  };
  interview: {
    isInterview: boolean;
    text: string;
    rating: number;
  };
  work: {
    isWork: boolean;
    rating: {
      team: number;
      management: number;
      stack: number;
      project: number;
      workFormat: number;
    };
    finance: {
      salary: number;
      medicine: number;
      premium: number;
      bonuses: number;
      stocks: number;
      dividends: number;
    };
    other: {
      education: number;
      events: number;
    };
  };
  recommendation: {
    isRecommended: number;
    reasonJoined: string;
    reasonLeft: string;
  };
}

interface CommentFormState {
  form: FormType;
  updateForm: (updatedFields: Partial<FormType>) => void;
}

export const useCommentFormStore = create<CommentFormState>(set => ({
  form: {
    companyId: '',
    suggestedCompanyName: '',
    location: {
      country: '',
      city: '',
    },
    position: '',
    grade: {
      years: 0,
      months: 0,
    },
    task: { isTask: false, text: '', rating: 0 },
    interview: { isInterview: false, text: '', rating: 0 },
    work: {
      isWork: false,
      text: '',
      rating: {
        management: 0,
        team: 0,
        project: 0,
        stack: 0,
        workFormat: 0,
      },
      finance: {
        salary: 0,
        medicine: 0,
        premium: 0,
        bonuses: 0,
        stocks: 0,
        dividends: 0,
      },
      other: {
        education: 0,
        events: 0,
      },
    },
    recommendation: {
      isRecommended: 1,
      reasonJoined: '',
      reasonLeft: '',
    },
  },
  updateForm: updatedFields =>
    set(state => ({
      form: { ...state.form, ...updatedFields },
    })),
}));
