"use client";

import Image from "next/image";
import { redirect, useParams } from "next/navigation";

import { useCommentsStore } from "@/store";
import { Avatar, Button, Error, Title, Tooltip } from "@/ui";

import moment from "moment";
import { useEffect } from "react";

export function CompanyTable() {
  const { id } = useParams<{ id: string }>();
  const { comments, getComments, loading, error } = useCommentsStore();

  useEffect(() => {
    getComments({ companyId: id });
  }, [getComments, id]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (error) {
    return <Error text={error} />; // Toast
  }

  if (!comments.length) {
    return (
      <Title position="center">Оставьте первый отзыв для этой компании!</Title>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-lg text-center border-b-2 border-gray-500">
            <th>Пользователь</th>
            <th>Должность</th>
            <th>Рейтинг</th>
            <th>Комментарий</th>
            <th>Дата</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(comment => (
            <tr
              key={comment.id}
              className="text-center align-middle border-b border-gray-500"
            >
              <td className="flex items-center gap-4">
                {comment?.user?.avatar ? (
                  <Avatar
                    src={
                      process.env.NEXT_PUBLIC_API_URL + comment?.user?.avatar
                    }
                  />
                ) : (
                  <div className="skeleton h-32 w-32"></div>
                )}
                <p>{comment.user.name}</p>
              </td>
              <td>{comment.position}</td>
              <td>{comment.rating}</td>
              <td>{comment.text}</td>
              <td> {moment(comment.createDate).format("MMM Do YY")}</td>
              <td>
                <Tooltip tip="Посмотреть">
                  <Button onClick={() => redirect(`/users/${comment.user.id}`)}>
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
