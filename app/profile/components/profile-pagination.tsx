'use client';
import { Pagination } from '@/shared';
import { useCommentApi } from '@/store/api';

export function ProfilePagination() {
  const { comments, getComments, page, limit, total } = useCommentApi();

  const onPageChange = (newPage: number) => {
    getComments({ page: newPage, limit });
  };

  if (!comments?.length) {
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
