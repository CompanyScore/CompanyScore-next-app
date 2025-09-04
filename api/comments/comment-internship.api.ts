import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentInternshipForm } from '@/store/form';

interface CommentInternshipFormApiState {
  createInternshipForm: (commentId: string) => Promise<void>;
}

export const useCommentInternshipApi = create<CommentInternshipFormApiState>(
  () => ({
    createInternshipForm: async commentId => {
      const { commentInternshipForm } = useCommentInternshipForm.getState();

      await useApi.post('/comment-internship', {
        commentId,
        ...commentInternshipForm,
      });
    },
  }),
);
