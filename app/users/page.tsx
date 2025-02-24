"use client";

import { useEffect } from "react";
import { Avatar, Error, Title } from "@/ui";
import moment from "moment";

import { useUsersStore, useUserStore } from "@/store";
import { redirect } from "next/navigation";

export default function UsersPage() {
  const { userId } = useUserStore();
  const { users, loading, error, getUsers } = useUsersStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (!userId) {
    redirect("/");
  }

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (error) {
    return <Error text={error} />;
  }

  if (!users.length) {
    return <Title position="center">Пользователей еще нет.</Title>;
  }

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-lg text-center border-b-2 border-gray-500">
              <th>Пользователь</th>
              <th>Дата создания</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr
                key={user.id}
                className="text-center align-middle border-b border-gray-500"
              >
                <td className="flex items-center gap-4">
                  <Avatar
                    src={process.env.NEXT_PUBLIC_API_URL + user?.avatar}
                  />
                  <p>{user.name}</p>
                </td>
                <td> {moment(user.createDate).format("MMM Do YY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
