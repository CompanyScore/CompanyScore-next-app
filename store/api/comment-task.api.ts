import { create } from 'zustand';
import { useApi } from '@/api';
import { useCommentTaskForm } from '@/store/form';

interface TaskStore {
  postTaskStore: (commentId: string) => Promise<void>;
}

export const useCommentTaskApi = create<TaskStore>(() => ({
  postTaskStore: async commentId => {
    const { commentTaskForm } = useCommentTaskForm.getState();

    await useApi.post(`/comment_task`, {
      commentId,
      ...commentTaskForm,
    });
  },
}));
