'use client';

import { ShowBy } from '@/shared';
import { useCommentsStore } from '@/store';

export function CompanyShowBy() {
  const { comments, getComments, limit } = useCommentsStore();

  const onLimitChange = (newLimit: number) => {
    getComments({ limit: newLimit });
  };

  if (!comments.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
