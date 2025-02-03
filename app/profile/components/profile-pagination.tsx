"use client";
import { Pagination } from "@/shared";
import { useCommentsStore, useUserStore } from "@/store";

export function ProfilePagination() {
  const { userId } = useUserStore();
  const { fetchComments, page, limit, total } = useCommentsStore();

  const onPageChange = (newPage: number) => {
    if (userId) {
      fetchComments(userId, newPage, limit);
    }
  };

  return (
    <Pagination
      page={page}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    />
  );
}
