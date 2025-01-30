"use client";

import React, { useEffect, useState } from "react";
import { ProfileCard, ProfileEditModal, ProfileTable } from "./components";
import { CommentType, CommentsResponse } from "./types/profile-type";
import { Pagination, ShowBy } from "@/shared";
import axios from "axios";
import { useUserStore } from "@/store/userId";
import { ErrorMessage, Loading } from "@/ui";
import { useAccessTokenStore } from "@/store/accessToken";

export default function ProfilePage() {
  const { userId, setUserId, clearUserId } = useUserStore();
  const { accessToken } = useAccessTokenStore();

  const [comments, setComments] = useState<CommentType[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchComments = async () => {
    try {
      setLoading(true);

      const response = await axios.get<CommentsResponse>(
        `http://localhost:8080/comments/?userId=${userId}`,
        {
          headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : "", // Передаём токен
          },
        },
      );
      console.log(accessToken);

      setComments(response.data.data);
      setTotal(response.data.total);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
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
    if (userId && accessToken) {
      fetchComments();
    }
  }, [page, limit, userId, accessToken]);

  if (loading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <ErrorMessage text={errorMessage} />;
  }

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
