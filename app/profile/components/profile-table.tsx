"use client";

import moment from "moment";
import { Avatar, Button, Tooltip } from "@/ui";
import Image from "next/image";
import { redirect } from "next/navigation";

type CommentType = {
  id: number;
  rating: number;
  createDate: Date;
  text: string;
  company: {
    id: number;
    logo: string;
    name: string;
  };
};

type CommentsProps = {
  comments: CommentType[];
};

export function ProfileTable({ comments }: CommentsProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-lg text-center border-b-2 border-gray-500">
            <th>Компания</th>
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
                <Avatar src={comment.company.logo} width={70} />
                <p>{comment.company.name}</p>
              </td>
              <td>{comment.rating}</td>
              <td>{comment.text}</td>
              <td> {moment(comment.createDate).format("MMM Do YY")}</td>
              <td>
                <Tooltip>
                  <Button
                    onClick={() => redirect(`/companies/${comment.company.id}`)}
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
