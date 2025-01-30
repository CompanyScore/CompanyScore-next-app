import { create } from "zustand";

interface AccessTokenState {
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  clearAccessToken: () => void;
}

export const useAccessTokenStore = create<AccessTokenState>(set => ({
  accessToken: null, // Изначально userId пуст
  setAccessToken: (accessToken: string) => set({ accessToken }), // Функция для установки userId
  clearAccessToken: () => set({ accessToken: null }), // Функция для очистки userId
}));
