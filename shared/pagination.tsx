import { Button } from "@/ui";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
};

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const changePage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          color={`${currentPage === index + 1 ? "secondary" : ""}`}
          onClick={() => changePage(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </Button>
    </div>
  );
}
