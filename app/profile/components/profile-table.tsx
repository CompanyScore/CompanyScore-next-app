"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ProfileEditCommentModal } from "../modals";
import { useUserStore, useCommentsStore } from "@/store";
import moment from "moment";
import { CommentType } from "../types/profile-type";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Avatar, Button, Tooltip, Error, Loading, Title } from "@/ui";
import Link from "next/link";

export function ProfileTable() {
  const { userId } = useUserStore();
  const { comments, loading, error, getComments, deleteComment } =
    useCommentsStore();

  const [selectedComment, setSelectedComment] = useState<CommentType | null>(
    null,
  );

  const openEditModal = (comment: CommentType) => {
    setSelectedComment(comment);
  };

  const closeEditModal = () => {
    setSelectedComment(null);
  };

  const handleDeleteComment = async (commentId: number) => {
    await deleteComment(commentId);
    if (userId) {
      getComments(userId);
    }
  };

  useEffect(() => {
    if (userId) {
      getComments(userId);
    }
  }, [userId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error} />;
  }

  if (!comments.length) {
    return (
      <Title position="center">
        <Link href="/companies" className="underline">
          Оставьте свой первый отзыв!
        </Link>
      </Title>
    );
  }

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
              className="text-center border-b border-gray-500"
            >
              <td className="flex items-center gap-4">
                <Avatar
                  src={process.env.NEXT_PUBLIC_API_URL + comment.company.logo}
                />
                <p>{comment.company.name}</p>
              </td>
              <td>{comment.rating}</td>
              <td>{comment.text}</td>
              <td>{moment(comment.createDate).format("MMM Do YY")}</td>
              <td>
                <div className="space-x-2">
                  <Tooltip tip="Посмотреть">
                    <Button
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
                      color="warning"
                      onClick={() => openEditModal(comment)}
                    >
                      <Image
                        src="/icons/pencil.svg"
                        alt="Pencil"
                        width={25}
                        height={25}
                      />
                    </Button>
                  </Tooltip>
                  <Tooltip tip="Удалить">
                    <Button
                      color="danger"
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      <IoIosCloseCircleOutline className="w-6 h-6" />
                    </Button>
                  </Tooltip>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedComment && (
        <ProfileEditCommentModal
          comment={selectedComment}
          closeModal={closeEditModal}
        />
      )}
    </div>
  );
}
