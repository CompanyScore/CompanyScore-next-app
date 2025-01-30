"use client";

import moment from "moment";
import { Avatar, Button, Tooltip } from "@/ui";
import Image from "next/image";
import { useState } from "react";
import { CommentType } from "../types/profile-type";
import { ProfileEditCommentModal } from "./index";
import axios from "axios";
import { redirect } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";

type ProfileTableProps = {
  comments: CommentType[];
  refetch: (id: string) => void;
};

export function ProfileTable({ comments, refetch }: ProfileTableProps) {
  const [selectedComment, setSelectedComment] = useState<CommentType | null>(
    null,
  );

  const openEditModal = (comment: CommentType) => {
    setSelectedComment(comment);
  };

  const closeEditModal = () => {
    setSelectedComment(null);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/comments/${id}`);
      refetch("1");
    } catch (error) {
      console.log("Error:", error);
    }
  };

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
          {comments.map((comment) => (
            <tr
              key={comment.id}
              className="text-center border-b border-gray-500"
            >
              <td className="flex items-center gap-4">
                <Avatar src={comment.company.logo} />
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
                  {/* <Tooltip tip="Удалить">
                    <Button
                      color="danger"
                      onClick={() => handleDelete(comment.id)}
                    >
                      <Image
                        src="/icons/pencil.svg"
                        alt="Pencil"
                        width={25}
                        height={25}
                      />
                    </Button>
                  </Tooltip> */}
                  <Tooltip tip="Удалить">
                    <Button
                      color="danger"
                      onClick={() => handleDelete(comment.id)}
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
          refetch={refetch}
        />
      )}
    </div>
  );
}
