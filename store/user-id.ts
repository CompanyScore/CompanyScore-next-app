import { create } from "zustand";

interface UserState {
  userId: number | null;
  setUserId: (userId: number) => void;
  clearUserId: () => void;
}

export const useUserStore = create<UserState>(set => ({
  userId: null, // Изначально userId пуст
  setUserId: (userId: number) => set({ userId }), // Функция для установки userId
  clearUserId: () => set({ userId: null }), // Функция для очистки userId
}));
