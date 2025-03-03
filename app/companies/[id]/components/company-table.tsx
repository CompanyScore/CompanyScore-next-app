"use client";

import Image from "next/image";
import { redirect, useParams } from "next/navigation";

import { useCommentsStore } from "@/store";
import { Avatar, Button, Error, Table, Title, Tooltip } from "@/ui";

import moment from "moment";
import { useEffect } from "react";

type CommentType = {
  id: string;
  rating: number;
  createDate: Date;
  text: string;
  position: string;
  company: {
    id: number;
    logo: string;
    name: string;
  };
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};

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

  const columns = [
    {
      key: "user",
      title: "Пользователь",
      render: (comment: CommentType) => (
        <div className="flex items-center gap-4 max-[650px]:justify-center">
          {comment?.user?.avatar ? (
            <Avatar 
              className="max-[650px]:hidden"
              src={process.env.NEXT_PUBLIC_API_URL + comment?.user?.avatar}
            />
          ) : (
            <div className="skeleton h-32 w-32"></div>
          )}
          <p>{comment.user.name}</p>
        </div>
      ),
    },
    {
      key: "position",
      title: "Должность",
      render: (comment: CommentType) => comment.position,
    },
    {
      key: "rating",
      title: "Рейтинг",
      render: (comment: CommentType) => comment.rating,
    },
    {
      key: "text",
      title: "Комментарий",
      render: (comment: CommentType) => comment.text,
    },
    {
      key: "createDate",
      title: "Дата",
      render: (comment: CommentType) =>
        moment(comment.createDate).format("MMM Do YY"),
    },
    {
      key: "actions",
      title: "Действия",
      render: (comment: CommentType) => (
        <Tooltip tip="Посмотреть">
          <Button onClick={() => redirect(`/users/${comment.user.id}`)}>
            <Image src="/icons/file.svg" alt="File" width={25} height={25} />
          </Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table columns={columns} data={comments} />
    </div>
  );
}
