"use client";

import {
  ProfileCard,
  ProfileEditModal,
  ProfilePagination,
  ProfileShowBy,
  ProfileTable,
} from "./components";
import { Title } from "@/ui";
import { useCommentsStore } from "@/store";

export default function ProfilePage() {
  const { comments } = useCommentsStore();

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <ProfileCard />
      {/* {comments.length ? ( */}
        <>
          <ProfileTable />
          <div className="flex justify-between">
            <ProfileShowBy />
            <ProfilePagination />
          </div>
        </>
      {/* ) : (
        <Title position="center">Оставьте свой первый отзыв!</Title>
      )} */}
      <ProfileEditModal />
    </section>
  );
}
