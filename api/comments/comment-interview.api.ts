import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentInterviewForm } from '../../store/form';

interface CommentInterviewFormApiState {
  createInterviewForm: (commentId: string) => Promise<void>;
}

export const useCommentInterviewApi = create<CommentInterviewFormApiState>(
  () => ({
    createInterviewForm: async commentId => {
      const { commentInterviewForm } = useCommentInterviewForm.getState();

      await useApi.post(`/comment-interview/`, {
        commentId,
        ...commentInterviewForm,
      });
    },
  }),
);
