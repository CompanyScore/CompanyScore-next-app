import { create } from 'zustand';

type CommentInterviewFormType = {
  isInterview: boolean;
  correspondedPosition: number;
  clearlyStages: number;
  talkedPolitely: number;
  realWork: number;
  stages: string[];
  interviewTime: number;
  feedback: number;
};

type CommentInterviewFormState = {
  commentInterviewForm: CommentInterviewFormType;
  updateCommentInterviewForm: (
    updatedFields: Partial<CommentInterviewFormType>,
  ) => void;
};

export const useCommentInterviewForm = create<CommentInterviewFormState>(
  set => ({
    commentInterviewForm: {
      isInterview: false,
      correspondedPosition: 0,
      clearlyStages: 0,
      talkedPolitely: 0,
      realWork: 0,
      stages: [],
      interviewTime: 0,
      feedback: 0,
    },
    updateCommentInterviewForm: updatedFields =>
      set(state => ({
        commentInterviewForm: {
          ...state.commentInterviewForm,
          ...updatedFields,
        },
      })),
  }),
);
