import { create } from 'zustand';
import { useApi } from '@/api';
import { interviewFormStore } from '../form';

interface CommentInterviewFormApiState {
  createInterviewForm: (commentId: string) => Promise<void>;
}

export const useCommentInterviewApi = create<CommentInterviewFormApiState>(
  () => ({
    createInterviewForm: async commentId => {
      const { interviewForm } = interviewFormStore.getState();

      await useApi.post(`/comment-interview/`, {
        commentId,
        ...interviewForm,
      });
    },
  }),
);
