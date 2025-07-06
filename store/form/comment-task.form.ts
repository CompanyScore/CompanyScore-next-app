import { create } from 'zustand';

type CommentTaskFormType = {
  isTask: boolean;
  requirementsForTask: number;
  taskLevel: number;
  fairAssessment: number;
  taskSize: number;
  realWork: number;
  feedback: number;
};

interface CommentTaskForm {
  commentTaskForm: CommentTaskFormType;
  updateCommentTaskForm: (updatedFields: Partial<CommentTaskFormType>) => void;
}

export const useCommentTaskForm = create<CommentTaskForm>(set => ({
  commentTaskForm: {
    isTask: false,
    requirementsForTask: 0,
    taskLevel: 0,
    fairAssessment: 0,
    taskSize: 0,
    realWork: 0,
    feedback: 0,
  },

  updateCommentTaskForm: updatedFields =>
    set(state => ({
      commentTaskForm: { ...state.commentTaskForm, ...updatedFields },
    })),
}));
