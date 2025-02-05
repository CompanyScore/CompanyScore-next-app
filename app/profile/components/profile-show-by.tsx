"use client";

import { ShowBy } from "@/shared";
import { useCommentsStore, useUserStore } from "@/store";

export function ProfileShowBy() {
  const { userId } = useUserStore();
  const { getComments, comments, limit } = useCommentsStore();

  const onLimitChange = (newLimit: number) => {
    if (userId) {
      getComments(userId, 1, newLimit);
    }
  };

  if (!comments.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
