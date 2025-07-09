import { create } from 'zustand';

export type CommentInterviewFormType = {
  isInterview: boolean;
  correspondedPosition: number;
  clearlyStages: number;
  talkedPolitely: number;
  realWork: number;
  interviewTime: number;
  feedback: number;
  isTestStage: boolean;
  isVideoStage: boolean;
  isHrStage: boolean;
  isTaskStage: boolean;
  isTechStage: boolean;
  isTeamStage: boolean;
  isFinalStage: boolean;
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
      interviewTime: 0,
      feedback: 0,
      isVideoStage: false,
      isHrStage: false,
      isTestStage: false,
      isTaskStage: false,
      isTechStage: false,
      isTeamStage: false,
      isFinalStage: false,
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
