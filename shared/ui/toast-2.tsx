'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { create } from 'zustand';

type ToastState = {
  message: string | null;
  type?: 'success' | 'error' | 'warning' | 'info';
  id?: number;
  showToast: (
    message: string,
    type?: 'success' | 'error' | 'warning' | 'info',
  ) => void;
  clearToast: () => void;
};

export const useToast = create<ToastState>(set => ({
  message: null,
  type: 'success',
  id: 0,
  showToast: (message, type = 'success') =>
    set({ message, type, id: Date.now() }),
  clearToast: () => set({ message: null, id: 0 }), // Функция очистки
}));

export function Toast() {
  const { message, type, id, clearToast } = useToast();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        clearToast(); // ✅ Очищаем тост после скрытия
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [id]); // Зависимость по `id`

  if (!isVisible || !message) return null;

  return createPortal(
    <div className="toast toast-top toast-end">
      <div
        className={classNames('alert text-white', {
          'alert-success': type === 'success',
          'alert-error': type === 'error',
          'alert-warning': type === 'warning',
          'alert-info': type === 'info',
        })}
      >
        {message}
      </div>
    </div>,
    document.body,
  );
}
