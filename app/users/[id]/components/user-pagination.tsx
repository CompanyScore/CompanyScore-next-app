'use client';
import { Pagination } from '@/shared/ui';
import { useCommentApi } from '@/store/api';

export function UserPagination() {
  const { comments, getComments, page, limit, total } = useCommentApi();

  const onPageChange = (newPage: number) => {
    getComments({ page: newPage, limit });
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
