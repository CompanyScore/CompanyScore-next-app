"use client";

import { ShowBy } from "@/shared";
import { useCommentsStore, useUserStore } from "@/store";

export function ProfileShowBy() {
  const { userId } = useUserStore();
  const { fetchComments, limit } = useCommentsStore();

  const onLimitChange = (newLimit: number) => {
    if (userId) {
      fetchComments(userId, 1, newLimit);
    }
  };

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
