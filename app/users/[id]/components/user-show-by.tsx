"use client";

import { ShowBy } from "@/shared";
import { useCommentsStore, useUserIdStore } from "@/store";

export function UserShowBy() {
  const { userId } = useUserIdStore();
  const { getComments, comments, limit } = useCommentsStore();

  const onLimitChange = (newLimit: number) => {
    if (userId) {
      getComments({ userId, page: 1, limit: newLimit });
    }
  };

  if (!comments.length) {
    return;
  }

  return <ShowBy limit={limit} onLimitChange={onLimitChange} />;
}
