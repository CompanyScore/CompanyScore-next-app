import React from "react";
import { useEffect } from "react";
import { Avatar, Button, Title, Tooltip } from "@/ui";
import moment from "moment";

import { useUsersStore } from "@/store";
import { redirect } from "next/navigation";
import Image from "next/image";

export function UsersTable() {
  const { users, loading, getUsers } = useUsersStore();

  useEffect(() => {
    getUsers({});
  }, [getUsers]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (!users.length) {
    return <Title position="center">Пользователей еще нет</Title>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-lg text-center border-b-2 border-gray-500">
            <th>Пользователь</th>
            <th>Должность</th>
            <th>Комментарии</th>
            <th>Дата создания</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="text-center align-middle border-b border-gray-500"
            >
              <td className="flex items-center gap-4">
                {user?.avatar ? (
                  <Avatar
                    src={process.env.NEXT_PUBLIC_API_URL + user?.avatar}
                  />
                ) : (
                  <div className="skeleton h-32 w-32"></div>
                )}

                <p>{user.name}</p>
              </td>
              <td>{user.position}</td>
              <td>{user.commentsIds.length}</td>
              <td>{moment(user.createDate).format("MMM Do YY")}</td>
              <td>
                <Tooltip tip="Посмотреть">
                  <Button
                    className="btn-neutral"
                    onClick={() => redirect(`/users/${user.id}`)}
                  >
                    <Image
                      src="/icons/file.svg"
                      alt="File"
                      width={25}
                      height={25}
                    />
                  </Button>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
