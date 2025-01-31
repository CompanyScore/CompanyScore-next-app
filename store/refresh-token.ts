import { create } from "zustand";

interface RefreshTokenState {
  refreshToken: string | null;
  setRefreshToken: (refreshToken: string) => void;
  clearRefreshToken: () => void;
}

export const useRefreshTokenStore = create<RefreshTokenState>(set => ({
  refreshToken: null, // Изначально userId пуст
  setRefreshToken: (refreshToken: string) => set({ refreshToken }), // Функция для установки userId
  clearRefreshToken: () => set({ refreshToken: null }), // Функция для очистки userId
}));
