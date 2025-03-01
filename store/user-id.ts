// import { useApi } from "@/api";
// import { create } from "zustand";

// interface UserState {
//   userId: string;
//   setUserId: (userId: string) => void;
//   // clearUserId: () => void;
// }

// let userId = "";

// const getUserData = async () => {
//   try {
//     const { data } = await useApi.get("/auth/cookies", {
//       withCredentials: true,
//     });
//     userId = data.userId;
//   } catch (error) {
//     console.error("Ошибка получения данных:", error);
//   }
// };

// await getUserData();

// export const useUserIdStore = create<UserState>((set) => ({
//   userId: userId, // Изначально userId пуст
//   setUserId: (userId: string) => set({ userId }), // Функция для установки userId
//   // clearUserId: () => set({ userId: null }), // Функция для очистки userId
// }));
