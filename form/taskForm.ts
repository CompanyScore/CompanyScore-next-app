import { create } from 'zustand';

interface TaskFormType {
  isTask: boolean;
  requirementsForTask: number;
  taskLevel: number;
  fairAssessment: number;
  taskSize: number;
  realWork: number;
  feedback: number;
}

interface TaskFormState {
  taskForm: TaskFormType;
  updateTaskForm: (updatedFields: Partial<TaskFormType>) => void;
}

export const taskFormStore = create<TaskFormState>(set => ({
  taskForm: {
    isTask: false,
    requirementsForTask: 0,
    taskLevel: 0,
    fairAssessment: 0,
    taskSize: 0,
    realWork: 0,
    feedback: 0,
  },

  updateTaskForm: updatedFields =>
    set(state => ({
      taskForm: { ...state.taskForm, ...updatedFields },
    })),
}));
