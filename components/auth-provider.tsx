// AuthProvider.tsx
"use client";

import React, { useEffect } from "react";
import { useApi } from "@/hook";
import {
  useUserStore,
  useAccessTokenStore,
  useRefreshTokenStore,
} from "@/store";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setUserId } = useUserStore();
  const { setAccessToken } = useAccessTokenStore();
  const { setRefreshToken } = useRefreshTokenStore();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await useApi.get("/auth/cookies");
        setUserId(data.userId);
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
      } catch (error) {
        console.error("Ошибка получения данных:", error);
      }
    };

    getUserData();
  }, [setUserId, setAccessToken, setRefreshToken]);

  return <>{children}</>;
};

export default AuthProvider;
