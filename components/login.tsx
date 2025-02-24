"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useApi } from "@/hook";
import {
  useUserStore,
  useAccessTokenStore,
  useRefreshTokenStore,
} from "@/store";
import { Modal, Title } from "@/ui";

export default function Enter() {
  const { setUserId } = useUserStore();
  const { setAccessToken } = useAccessTokenStore();
  const { setRefreshToken } = useRefreshTokenStore();

  const redirectToLinkedin = async () => {
    window.location.href = "http://localhost:8080/auth/linkedin";
  };

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

  return (
    <Modal
      id="login_modal"
      className="max-h-[450px] h-full bg-gradient-to-b from-gray-50 to-gray-100 p-6 rounded-lg shadow-lg"
    >
      <Title position="center" className="text-xl font-semibold text-gray-600">
        Войти через LinkedIn
      </Title>

      <div className="flex flex-col items-center w-full gap-8">
        <Image
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          width={90}
          height={90}
          className="cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6"
          onClick={redirectToLinkedin}
        />

        <p className="text-center text-sm text-gray-600 leading-relaxed max-w-xs">
          Войдите через LinkedIn, чтобы воспользоваться дополнительными
          функциями сайта и сохранить свои данные. Мы не собираем и не
          используем вашу личную информацию, и вы сами решаете, какие данные
          добавить в профиль, включая вымышленные.
        </p>
      </div>
    </Modal>
  );
}
