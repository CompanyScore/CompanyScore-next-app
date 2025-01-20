"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("valentine");

  useEffect(() => {
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      Cookies.set("theme", "valentine");
    }
  }, []);

  return (
    <div data-theme={theme} className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
