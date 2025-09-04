import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentWorkSecondaryForm } from '@/store/form';

interface CommentWorkSecondaryFormApiState {
  createCommentWorkSecondaryForm: (commentId: string) => Promise<void>;
}

export const useCommentWorkSecondaryApi =
  create<CommentWorkSecondaryFormApiState>(() => ({
    createCommentWorkSecondaryForm: async (commentId: string) => {
      const { commentWorkSecondaryForm } =
        useCommentWorkSecondaryForm.getState();

      await useApi.post('/comment-work-secondary', {
        commentId,
        ...commentWorkSecondaryForm,
      });
    },
  }));
