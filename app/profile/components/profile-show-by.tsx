'use client';

import { ShowBy } from '@/shared';
import { useCommentApi } from '@/store/api';

export function ProfileShowBy() {
  const { getComments, comments, limit } = useCommentApi();

  const onLimitChange = (newLimit: number) => {
    getComments({ page: 1, limit: newLimit });
  };

  if (!comments?.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
