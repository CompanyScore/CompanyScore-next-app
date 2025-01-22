"use client";

import React, { useEffect, useState } from "react";
import { ProfileCard, ProfileEditModal, ProfileTable } from "./components";
import axios from "axios";
import { Pagination, ShowBy } from "@/shared";
import { CommentType } from "./types/profile-type";

type CommentsResponse = {
  data: CommentType[];
  page: number;
  total: number;
  limit: number;
};

export default function ProfilePage() {
  const id = "1";
  const [comments, setComments] = useState<CommentType[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  const fetchComments = async (id: string) => {
    try {
      // setLoading(true);

      const response = await axios.get<CommentsResponse>(
        `http://localhost:8080/api/comments/?userId=${id}`,
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
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <ProfileCard />
      <ProfileTable comments={comments} />
      <div className="flex justify-between">
        <ShowBy limit={limit} onLimitChange={onLimitChange} />
        <Pagination
          currentPage={page}
          totalItems={total}
          itemsPerPage={limit}
          onPageChange={onPageChange}
        />
        <ProfileEditModal />
      </div>
    </section>
  );
}
