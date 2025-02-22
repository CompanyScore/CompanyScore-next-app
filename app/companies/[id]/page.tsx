"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CompanyCard, CompanyTable } from "./components";
import { Pagination, ShowBy } from "@/shared";
import { Error, Loading } from "@/ui";

type CommentType = {
  id: number;
  rating: number;
  createDate: Date;
  text: string;
  user: {
    id: number;
    name: string;
    avatar: string;
  };
};

type CommentsResponse = {
  data: CommentType[];
  page: number;
  total: number;
  limit: number;
};

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>();

  const [comments, setComments] = useState<CommentType[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setErrorMessage] = useState("");

  const getComments = async (id: string) => {
    try {
      setLoading(true);

      const response = await axios.get<CommentsResponse>(
        `http://localhost:8080/comments/?companyId=${id}`,
      );

      setComments(response.data.data);
      setTotal(response.data.total);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    getComments(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error} />;
  }

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <CompanyCard total={total} />
      <CompanyTable comments={comments} />
      <div className="flex justify-between">
        <ShowBy limit={limit} onLimitChange={onLimitChange} />
        <Pagination
          page={page}
          total={total}
          limit={limit}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
}
