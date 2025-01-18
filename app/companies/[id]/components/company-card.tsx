"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

type CompanyType = {
  id: number;
  name: string;
  logo: string;
  country: string;
  city: string;
  description: string;
  rating: number;
};

type CommentType = {
  id: number;
  text: string;
  rating: number;
};

export function CompanyCard() {
  const params = useParams<{ tag: string; id: string }>();

  const [company, setCompany] = useState<CompanyType>();
  const [comments, setComments] = useState<CommentType[]>([]);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/companies/${params.id}`,
      );

      setCompany(response.data);
    } catch {
      console.log("error");
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/comments?companyId=${params.id}`,
      );
      setComments(response.data);
    } catch {
      console.log("Error fetching comments");
    }
  };

  useEffect(() => {
    fetchUser();
    fetchComments();
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-start">
        <div className="flex flex-col items-center gap-4">
          <img src={company?.logo} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Total Page Views</div>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">{company?.name}</h1>
          <p className="pt-4">
            {company?.city}, {company?.country}
          </p>
          <p className="pt-4">{company?.description}</p>
          <button className="btn btn-secondary mt-4">
            <Image
              src="/icons/pencil.svg"
              alt="Pencil"
              width={25}
              height={25}
            />
          </button>
          <div className="mt-8">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Text</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((comment) => (
                    <tr key={comment.id}>
                      <td>{comment.text}</td>
                      <td>{comment.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
