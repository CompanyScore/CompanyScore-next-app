import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentWorkPrimaryForm } from '@/store/form';

interface CommentWorkPrimaryFormApiState {
  createCommentWorkPrimaryForm: (commentId: string) => Promise<void>;
}

export const useCommentWorkPrimaryApi = create<CommentWorkPrimaryFormApiState>(
  () => ({
    createCommentWorkPrimaryForm: async (commentId: string) => {
      const { commentWorkPrimaryForm } = useCommentWorkPrimaryForm.getState();

      await useApi.post('/comment-work-primary', {
        commentId,
        ...commentWorkPrimaryForm,
      });
    },
  }),
);
