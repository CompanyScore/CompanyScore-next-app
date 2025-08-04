'use client';
import { Pagination } from '@/shared/ui';
import { useCommentApi } from '@/store/api';

export function CompanyPagination() {
  const { comments, getComments, limit, page, total } = useCommentApi();

  const onPageChange = (newPage: number) => {
    getComments({ limit, page: newPage });
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
