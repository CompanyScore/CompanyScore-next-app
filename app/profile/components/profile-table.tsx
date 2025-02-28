"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ProfileEditCommentModal } from "../modals";
import { useUserIdStore, useCommentsStore } from "@/store";
import moment from "moment";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Avatar, Button, Tooltip, Error, Title } from "@/ui";
import Link from "next/link";

export type CommentType = {
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
};
export function ProfileTable() {
  const { userId } = useUserIdStore();
  const { comments, loading, error, getComments, deleteComment } =
    useCommentsStore();

  const [selectedComment, setSelectedComment] = useState<
    CommentType | undefined
  >(undefined);

  const openEditModal = (comment: CommentType) => {
    setSelectedComment(comment);
  };

  const handleDeleteComment = async (commentId: string) => {
    await deleteComment(commentId);
    if (userId) {
      getComments({ userId });
    }
  };

  useEffect(() => {
    if (userId) {
      getComments({ userId });
    }
  }, [userId, getComments]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (error) {
    return <Error text={error} />;
  }

  if (!comments.length) {
    return (
      <Button className="btn-link">
        <Title position="center">
          <Link href="/companies" className="underline">
            Оставьте свой первый отзыв!
          </Link>
        </Title>
      </Button>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-lg text-center border-b-2 border-gray-500">
            <th>Компания</th>
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
              className="text-center border-b border-gray-500"
            >
              <td className="flex items-center gap-4">
                {comment.company.logo ? (
                  <Avatar
                    src={process.env.NEXT_PUBLIC_API_URL + comment.company.logo}
                  />
                ) : (
                  <div className="skeleton h-32 w-32"></div>
                )}
                <p>{comment.company.name}</p>
              </td>
              <td>{comment.position}</td>
              <td>{comment.rating}</td>
              <td>{comment.text}</td>
              <td>{moment(comment.createDate).format("MMM Do YY")}</td>
              <td>
                <div className="space-x-2">
                  <Tooltip tip="Посмотреть">
                    <Button
                      className="btn-neutral"
                      onClick={() =>
                        redirect(`/companies/${comment.company.id}`)
                      }
                    >
                      <Image
                        src="/icons/file.svg"
                        alt="File"
                        width={25}
                        height={25}
                      />
                    </Button>
                  </Tooltip>
                  <Tooltip tip="Редактировать">
                    <Button
                      className="btn-warning"
                      onClick={() => openEditModal(comment)}
                    >
                      <label htmlFor="profile-edit-comment-modal">
                        <Image
                          src="/icons/pencil.svg"
                          alt="Pencil"
                          width={25}
                          height={25}
                        />
                      </label>
                    </Button>
                  </Tooltip>
                  <Tooltip tip="Удалить">
                    <Button
                      className="btn-error"
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      <IoIosCloseCircleOutline className="w-6 h-6 text-white" />
                    </Button>
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ProfileEditCommentModal comment={selectedComment} />
    </div>
  );
}
