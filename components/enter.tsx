"use client";
import { useApi } from "@/hook";
import {
  useUserStore,
  useAccessTokenStore,
  useRefreshTokenStore,
} from "@/store";
import { Title } from "@/ui";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Enter() {
  const { setUserId } = useUserStore();
  const { setAccessToken } = useAccessTokenStore();
  const { setRefreshToken } = useRefreshTokenStore();

  const redirectToGitHub = async () => {
    window.location.href = "http://localhost:8080/auth/github";
  };

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
    <div>
      <input type="checkbox" id="modal_enter" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col gap-10 w-full h-60">
          <Title position="center">Войти</Title>
          <div className="flex justify-around w-full">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={60}
              height={60}
              onClick={redirectToLinkedin}
            />
            <Image
              src="/icons/github.svg"
              alt="github"
              width={60}
              height={60}
              onClick={getUserData}
              className="cursor-pointer"
            />
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="modal_enter">
          Close
        </label>
      </div>
    </div>
  );
}
