// AuthProvider нужен для получения userId из куки и записи его в store при перезагрузке страницы.
"use client";

import React, { useEffect } from "react";
import { useApi } from "@/api";
import { useUserIdStore } from "@/store";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setUserId } = useUserIdStore();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await useApi.get("/auth/cookies", {
          withCredentials: true,
        });
        setUserId(data.userId);
      } catch (error) {
        console.error("Ошибка получения данных:", error);
      }
    };

    getUserData();
  }, [setUserId]);

  return <>{children}</>;
};

export default AuthProvider;
