"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function ThemeController() {
  const [theme, setTheme] = useState(Cookies.get("theme") || "light");

  const handleChangeTheme = (value: string) => {
    Cookies.set("theme", value); // Сохраняем выбранную тему в Cookies
    setTheme(value.charAt(0).toUpperCase() + value.slice(1)); // Обновляем состояние
    document.documentElement.setAttribute("data-theme", value); // Устанавливаем тему напрямую
  };

  useEffect(() => {
    const storedTheme = Cookies.get("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme); // Применяем тему при загрузке
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {theme}
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-2xl rounded-box w-52 bg-neutral text-white"
      >
        {["light", "dark", "valentine"].map(themeOption => (
          <li key={themeOption}>
            <button
              className="btn btn-sm btn-block btn-ghost justify-start"
              onClick={() => handleChangeTheme(themeOption)}
            >
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
