"use client";
import { Pagination } from "@/shared";
import { useCommentsStore, useUserStore } from "@/store";

export function ProfilePagination() {
  const { userId } = useUserStore();
  const { comments, getComments, page, limit, total } = useCommentsStore();

  const onPageChange = (newPage: number) => {
    if (userId) {
      getComments(userId, newPage, limit);
    }
  };

  if (!comments.length) {
    return;
  }

  return (
    <Pagination
      page={page}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    />
  );
}
