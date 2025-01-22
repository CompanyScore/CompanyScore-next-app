"use client";

import { ErrorMessage, Loading } from "@/ui";
import Image from "next/image";
import { ProfileType } from "../types/profile-type";
import { useEffect, useState } from "react";
import axios from "axios";

export function ProfileCard() {
  const id = "1";
  const [user, setUser] = useState<ProfileType>();
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchProfile = async (id: string) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/users/${id}`);

      setUser(response.data);
    } catch (err: any) {
      setErrorMessage(err.message || "Ошибка загрузки данных");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile(id);
  }, [id]);

  return (
    <div className="relative hero bg-base-200 min-h-screen">
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage text={`Ошибка: ${errorMessage}`} />
      ) : (
        <div className="hero-content flex-col lg:flex-row items-start gap-20 w-full">
          <label
            htmlFor="profile_edit_modal"
            className="btn absolute top-10 right-10"
          >
            <Image
              src="/icons/settings.svg"
              alt="Settings Icon"
              width={30}
              height={30}
              className="cursor-pointer"
            />
          </label>
          {user?.avatar ? (
            <Image
              src={"http://localhost:8080" + user?.avatar}
              alt="Avatar"
              width={400}
              height={400}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          ) : (
            <div className="skeleton h-32 w-32"></div>
          )}

          <div className=" w-[500px]">
            <h1 className="text-5xl font-bold">{user?.name}</h1>
            <p className="mt-4">{user?.position}</p>
            <p className="mt-4">{user?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
