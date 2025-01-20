"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import moment from "moment";
import { Avatar, Button, Tooltip } from "@/ui";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Pagination, ShowBy } from "@/shared";

type CommentType = {
  id: number;
  rating: number;
  createDate: Date;
  text: string;
  user: {
    id: number;
    name: string;
    photo: string;
  };
};

type CompaniesResponse = {
  data: CommentType[];
  total: number;
  page: number;
  limit: number;
};

export function CompanyTable() {
  const { id } = useParams<{ id: string }>();

  const [comments, setComments] = useState<CommentType[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  const fetchComments = async (id: string) => {
    try {
      // setLoading(true);

      const response = await axios.get<CompaniesResponse>(
        `http://localhost:8080/api/comments?companyId=${id}`,
      );

      setComments(response.data.data);
      setTotal(response.data.total);
    } catch {
      console.log("Error fetching comments");
    }
  };

  const onLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    fetchComments(id);
  }, [id]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="text-lg text-center border-b-2 border-gray-500">
            <th>Пользователь</th>
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
                <Avatar src={comment.user.photo} width={70} />
                <p>{comment.user.name}</p>
              </td>
              <td>{comment.rating}</td>
              <td>{comment.text}</td>
              <td> {moment(comment.createDate).format("MMM Do YY")}</td>
              <td>
                <Tooltip>
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
      <div className="flex justify-between mt-10">
        <ShowBy limit={limit} onLimitChange={onLimitChange} />
        <Pagination
          currentPage={page}
          totalItems={total}
          itemsPerPage={limit}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
