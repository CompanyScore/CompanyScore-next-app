"use client";

import moment from "moment";
import { Avatar, Button, Title, Tooltip } from "@/ui";
import Image from "next/image";
import { redirect } from "next/navigation";

type CommentType = {
  id: number;
  rating: number;
  createDate: Date;
  text: string;
  position: string;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
};

type CommentsProps = {
  comments: CommentType[];
};

export function CompanyTable({ comments }: CommentsProps) {
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
