"use client";

import { ShowBy } from "@/shared";
import { useCommentsStore } from "@/store";

export function ProfileShowBy() {
  const { getComments, comments, limit } = useCommentsStore();

  const onLimitChange = (newLimit: number) => {
    getComments({ page: 1, limit: newLimit });
  };

  if (!comments?.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
