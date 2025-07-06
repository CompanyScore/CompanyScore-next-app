import { create } from 'zustand';

interface InterviewFormType {
  isInterview: boolean;
  correspondedPosition: number;
  clearlyStages: number;
  talkedPolitely: number;
  realWork: number;
  stages: string[];
  interviewTime: number;
  feedback: number;
}

interface InterviewFormState {
  interviewForm: InterviewFormType;
  updateInterviewForm: (updatedFields: Partial<InterviewFormType>) => void;
}

export const interviewFormStore = create<InterviewFormState>(set => ({
  interviewForm: {
    isInterview: false,
    correspondedPosition: 0,
    clearlyStages: 0,
    talkedPolitely: 0,
    realWork: 0,
    stages: [],
    interviewTime: 0,
    feedback: 0,
  },
  updateInterviewForm: updatedFields =>
    set(state => ({
      interviewForm: { ...state.interviewForm, ...updatedFields },
    })),
}));
