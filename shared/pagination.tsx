import { Button } from "@/ui";
import React from "react";

type PaginationProps = {
  page: number;
  total: number;
  limit: number;
  onPageChange: (newPage: number) => void;
};

export function Pagination({
  page,
  total,
  limit,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / limit);

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex gap-2">
      <Button onClick={() => changePage(page - 1)} disabled={page == 1}>
        {"<"}
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          color={`${page == index + 1 ? "secondary" : "primary"}`}
          onClick={() => changePage(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => changePage(+page + 1)}
        disabled={page == totalPages}
      >
        {">"}
      </Button>
    </div>
  );
}
