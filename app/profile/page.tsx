"use client";

import React, { useEffect, useState } from "react";
import { ProfileCard, ProfileEditModal, ProfileTable } from "./components";
import { CommentType, CommentsResponse } from "./types/profile-type";
import { Pagination, ShowBy } from "@/shared";
import axios from "axios";
import Cookies from "js-cookie";

export default function ProfilePage() {
  const [comments, setComments] = useState<CommentType[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  const fetchComments = async () => {
    const userId = Cookies.get("userId");

    try {
      // setLoading(true);

      const response = await axios.get<CommentsResponse>(
        `http://localhost:8080/comments/?userId=${userId}`,
      );

      setComments(response.data.data);
      setTotal(response.data.total);
    } catch {
      console.log("Ошибка при получении комментариев");
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
    fetchComments();
  }, [page, limit]);

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <ProfileCard />
      <ProfileTable refetch={fetchComments} comments={comments} />
      <div className="flex justify-between">
        <ShowBy limit={limit} onLimitChange={onLimitChange} />
        <Pagination
          currentPage={page}
          totalItems={total}
          itemsPerPage={limit}
          onPageChange={onPageChange}
        />
      </div>
      <ProfileEditModal />
    </section>
  );
}
