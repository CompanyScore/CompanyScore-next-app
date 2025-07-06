import { create } from 'zustand';
import { useApi } from '@/api';
import { taskFormStore } from '@/store/form';

export type TaskStoreType = {
  isTask: boolean;
  requirementsForTask: number;
  taskLevel: number;
  fairAssessment: number;
  taskSize: number;
  realWork: number;
  feedback: number;
};

interface TaskStore {
  taskStore: TaskStoreType;
  postTaskStore: (commentId: string) => Promise<void>;
}

const initialState: TaskStoreType = {
  isTask: true,
  requirementsForTask: 0,
  taskLevel: 0,
  fairAssessment: 0,
  taskSize: 0,
  realWork: 0,
  feedback: 0,
};

export const useTaskStore = create<TaskStore>(() => ({
  taskStore: initialState,

  postTaskStore: async commentId => {
    const { taskForm } = taskFormStore.getState();

    await useApi.post(`/comment_task`, {
      commentId,
      ...taskForm,
    });
  },
}));
