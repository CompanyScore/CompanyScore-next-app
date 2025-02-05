"use client";

import {
  ProfileCard,
  ProfilePagination,
  ProfileShowBy,
  ProfileTable,
} from "./components";

export default function ProfilePage() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <ProfileCard />
      <ProfileTable />
      <div className="flex justify-between">
        <ProfileShowBy />
        <ProfilePagination />
      </div>
    </section>
  );
}
