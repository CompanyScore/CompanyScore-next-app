"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ProfileEditModal } from "../modals";
import { useProfileStore, useUserStore } from "@/store";
import { Error } from "@/ui";

export function ProfileCard() {
  const { userId } = useUserStore();
  const { profile, loading, error, getProfile } = useProfileStore();

  useEffect(() => {
    if (userId) {
      getProfile(userId);
    }
  }, [userId, getProfile]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (error) {
    return <Error text={error} />;
  }

  return (
    <div className="relative hero bg-base-200">
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
        {profile?.avatar ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${profile.avatar}`}
            alt="Avatar"
            width={400}
            height={400}
            className="max-w-sm rounded-lg shadow-2xl"
          />
        ) : (
          <div className="skeleton h-32 w-32"></div>
        )}

        <div className="w-full">
          <h1 className="text-5xl font-bold">{profile?.name}</h1>
          <p className="mt-4">{profile?.position}</p>
          <p className="mt-4">{profile?.description}</p>
        </div>
      </div>

      <ProfileEditModal />
    </div>
  );
}
