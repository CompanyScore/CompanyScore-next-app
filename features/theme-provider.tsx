'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = Cookies.get('theme') || 'light';
    Cookies.set('theme', storedTheme); // Сохраняем значение в Cookies, если его нет
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme); // Устанавливаем атрибут для HTML
  }, []);

  if (!theme) return null; // Ожидание инициализации темы

  return <div className="min-h-screen flex flex-col">{children}</div>;
}
