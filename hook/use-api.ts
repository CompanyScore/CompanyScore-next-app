import axios from "axios";
import { useAccessTokenStore, useRefreshTokenStore } from "@/store";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Создаем экземпляр axios
export const useApi = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Включаем куки (refreshToken)
});

const refreshApi = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Нужно, чтобы куки передавались
});

// Добавляем перехватчик для обновления accessToken
useApi.interceptors.request.use(
  config => {
    const { accessToken } = useAccessTokenStore.getState(); // Получаем актуальный токен

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Cache-Control"] = "no-cache";
    config.headers["Pragma"] = "no-cache";
    config.headers["Expires"] = "0";
    return config;
  },
  error => Promise.reject(error),
);

useApi.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      const { refreshToken } = useRefreshTokenStore.getState();
      const { accessToken } = useAccessTokenStore.getState();

      try {
        // Запрашиваем новый accessToken
        const refreshResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
          { refreshToken },
          { withCredentials: true },
        );
        console.log(refreshResponse);
        const newAccessToken = refreshResponse.data.accessToken;

        if (newAccessToken) {
          useAccessTokenStore.getState().setAccessToken(newAccessToken); // Обновляем токен в сторе
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return useApi.request(error.config); // Повторяем запрос
        }
      } catch (refreshError) {
        console.error("Ошибка обновления accessToken:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
