"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState(Cookies.get("theme") || "valentine");

  useEffect(() => {
    const storedTheme = Cookies.get("theme");
    if (!storedTheme) Cookies.set("theme", "valentine");
  }, [Cookies.get("theme")]);

  return (
    <div data-theme={theme} className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
