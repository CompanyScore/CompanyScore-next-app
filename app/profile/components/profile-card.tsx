"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ProfileEditModal } from "../modals";
import { useProfileStore } from "@/store";
import { Error } from "@/ui";

export function ProfileCard() {
  const { profile, loading, error, getProfile } = useProfileStore();

  useEffect(() => {
    getProfile();
    console.log(process.env.NEXT_PUBLIC_S3_IMAGES);
  }, [getProfile]);

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
      <div className="hero-content flex-col-reverse lg:flex-row items-start justify-start gap-20 w-full">
        <label
          htmlFor="profile_edit_modal"
          className="btn btn-neutral absolute top-4 right-10 rounded-md"
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
          <img
            src={
              "https://companyscore-images.ams3.cdn.digitaloceanspaces.com/" +
              profile.avatar
            }
            alt="Avatar"
          />
        ) : (
          <div className="skeleton h-32 w-32"></div>
        )}
        {profile?.avatar ? (
          <Image
            src={process.env.NEXT_PUBLIC_S3_IMAGES + `/${profile.avatar}`}
            alt="Avatar"
            width={400}
            height={400}
            className="max-w-sm rounded-lg shadow-2xl w-full"
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
