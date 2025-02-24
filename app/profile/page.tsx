"use client";

import {
  ProfileCard,
  ProfilePagination,
  ProfileShowBy,
  ProfileTable,
} from "./components";
import { Title } from "@/ui";
import { useCommentsStore, useUserStore } from "@/store";
import { redirect } from "next/navigation";

export default function ProfilePage() {
  const { userId } = useUserStore();
  const { total } = useCommentsStore();

  if (!userId) {
    redirect("/");
  }

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <ProfileCard />
      <Title>{`Ваши отзывы: ${total}`}</Title>
      <ProfileTable />
      <div className="flex justify-between">
        <ProfileShowBy />
        <ProfilePagination />
      </div>
    </section>
  );
}
