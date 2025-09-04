import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentWorkFinanceForm } from '@/store/form';

interface CommentWorkFinanceFormApiState {
  createCommentWorkFinanceForm: (commentId: string) => Promise<void>;
}

export const useCommentWorkFinanceApi = create<CommentWorkFinanceFormApiState>(
  () => ({
    createCommentWorkFinanceForm: async (commentId: string) => {
      const { commentWorkFinanceForm } = useCommentWorkFinanceForm.getState();

      await useApi.post('/comment-work-finance', {
        commentId,
        ...commentWorkFinanceForm,
      });
    },
  }),
);
