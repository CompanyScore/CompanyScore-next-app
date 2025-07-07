import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentWorkForm } from '../form';

interface CommentWorkFormApiState {
  createWorkForm: (commentId: string) => Promise<void>;
}

export const useCommentWorkApi = create<CommentWorkFormApiState>(() => ({
  createWorkForm: async (commentId: string) => {
    const { commentWorkForm } = useCommentWorkForm.getState();

    await useApi.post('/comment-work', {
      commentId,
      ...commentWorkForm,
    });
  },
}));
