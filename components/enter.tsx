"use client";
import { Title } from "@/ui";
import axios from "axios";
import Image from "next/image";
import React from "react";

export default function Enter() {
  const getUser = async () => {
    const response = await axios.get("http://localhost:8080/auth/github", {
      withCredentials: true, // Для отправки и получения cookies
    });
    const data = response.data;
    console.log(data);
  };

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
            />
            <Image
              src="/icons/github.svg"
              alt="github"
              width={60}
              height={60}
              onClick={getUser}
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
