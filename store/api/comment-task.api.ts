import { create } from 'zustand';
import { useApi } from '@/api';
import { taskFormStore } from '@/store/form';

interface TaskStore {
  postTaskStore: (commentId: string) => Promise<void>;
}

export const useCommentTaskApi = create<TaskStore>(() => ({
  postTaskStore: async commentId => {
    const { taskForm } = taskFormStore.getState();

    await useApi.post(`/comment_task`, {
      commentId,
      ...taskForm,
    });
  },
}));
