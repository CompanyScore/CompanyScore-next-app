'use client';

import { ShowBy } from '@/shared';
import { useCommentApi } from '@/store/api';

export function CompanyShowBy() {
  const { comments, getComments, limit } = useCommentApi();

  const onLimitChange = (newLimit: number) => {
    getComments({ limit: newLimit });
  };

  if (!comments.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
