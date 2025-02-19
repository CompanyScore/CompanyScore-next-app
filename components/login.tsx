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

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Modal id="modal_enter" className="max-h-[450px] h-full">
      <Title position="center">Войти</Title>
      <div className="flex flex-col justify-around items-center w-full gap-10">
        <Image
          src="/icons/linkedin.svg"
          alt="linkedin"
          width={90}
          height={90}
          className="cursor-pointer"
          onClick={redirectToLinkedin}
        />

        <p className="text-center">
          Войдите с помощью LinkedIn, чтобы получить доступ к дополнительным
          функциям сайта и сохранить свои данные. Мы не будем использовать ваши личные
          данные. Вы сможете заполнить свой профиль своими или фейковыми
          данными.
        </p>
      </div>
    </Modal>
  );
}
