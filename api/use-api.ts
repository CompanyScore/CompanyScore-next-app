import axios from 'axios';

// Создаем экземпляр axios
export const useApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK,
  withCredentials: true, // Включаем куки (refreshToken)
});

// Добавляем перехватчик для обновления accessToken
useApi.interceptors.request.use(
  config => {
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    } else {
      config.headers['Content-Type'] = 'application/json';
    }

    config.headers['Cache-Control'] = 'no-cache';
    config.headers['Pragma'] = 'no-cache';
    config.headers['Expires'] = '0';
    return config;
  },
  error => Promise.reject(error),
);

useApi.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      try {
        // Запрашиваем новый accessToken
        await axios.post(
          process.env.NEXT_PUBLIC_BACK + `/auth/refresh`,
          {},
          {
            withCredentials: true,
          },
        );

        return useApi.request(error.config); // Повторяем запрос
      } catch (refreshError) {
        console.error('Ошибка обновления accessToken:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
