"use client";

import { UsersTable } from "./components";

export default function UsersPage() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <UsersTable />
    </section>
  );
}
