import { create } from "zustand";

interface UserState {
  userId: string | null;
  setUserId: (userId: null) => void;
  clearUserId: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userId: null, // Изначально userId пуст
  setUserId: (userId: null) => set({ userId }), // Функция для установки userId
  clearUserId: () => set({ userId: null }), // Функция для очистки userId
}));
