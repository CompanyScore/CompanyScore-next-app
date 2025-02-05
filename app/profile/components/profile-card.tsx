"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ProfileEditModal } from "../modals";
import { useUserStore } from "@/store";
import { useApi } from "@/hook";
import { ProfileType } from "../types/profile-type";
import { ErrorMessage, Loading } from "@/ui";

export function ProfileCard() {
  const { userId, setUserId, clearUserId } = useUserStore(); // не удаляй пример
  const [user, setUser] = useState<ProfileType>();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const { data } = await useApi.get(`/users/${userId}`);
      setUser(data);
    } catch (err: any) {
      setErrorMessage(err.message || "Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  return (
    <div className="relative hero bg-base-200">
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage text={`Ошибка: ${errorMessage}`} />
      ) : (
        <div className="hero-content flex-col lg:flex-row items-start justify-start gap-20 w-full">
          <label
            htmlFor="profile_edit_modal"
            className="btn absolute top-4 right-10"
          >
            <Image
              src="/icons/settings.svg"
              alt="Settings Icon"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </label>
          {user?.avatar ? (
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${user.avatar}`}
              alt="Avatar"
              width={400}
              height={400}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          ) : (
            <div className="skeleton h-32 w-32"></div>
          )}

          <div className="w-full">
            <h1 className="text-5xl font-bold">{user?.name}</h1>
            <p className="mt-4">{user?.position}</p>
            <p className="mt-4">{user?.description}</p>
          </div>
        </div>
      )}
      <ProfileEditModal />
    </div>
  );
}
