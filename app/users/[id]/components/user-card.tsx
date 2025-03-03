"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useUsersStore } from "@/store";

export function UserCard() {
  const { id } = useParams<{ id: string }>();

  const { user, loading, getUser } = useUsersStore();

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id, getUser]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  return (
    <div className="relative hero bg-base-200">
      <div className="hero-content flex-col-reverse items-start justify-start gap-20 w-full lg:flex-row">
        {user?.avatar ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${user.avatar}`}
            alt="Avatar"
            width={400}
            height={400}
            className="max-w-sm rounded-lg shadow-2xl w-full"
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
    </div>
  );
}
