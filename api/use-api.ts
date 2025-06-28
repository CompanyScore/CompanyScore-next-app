import axios from 'axios';

export const useApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK,
});

// 👉 Добавляем accessToken из localStorage
useApi.interceptors.request.use(
  config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

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

// 👉 Обновляем токен при 401
useApi.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry // чтобы избежать зацикливания
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('Нет refreshToken');

        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_BACK}/auth/refresh`,
          { refreshToken },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );

        localStorage.setItem('accessToken', data.accessToken);

        // Повторяем исходный запрос с новым токеном
        originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
        return useApi.request(originalRequest);
      } catch (refreshError) {
        console.error('Ошибка обновления токена:', refreshError);
        // можно удалить токены и перенаправить на login
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
