// export default function UsersPage() {
//   return <div className="text-6xl text-center mt-20">В разработке</div>;
// }

"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar } from "@/ui";
import moment from "moment";
import { useParams } from "next/navigation";
import { CompanyTable } from "../companies/[id]/components";
import { Pagination, ShowBy } from "@/shared";

type UserType = {
  id: number;
  name: string;
  avatar: string;
  createDate: Date;
};

type UsersResponse = {
  data: UserType[];
  page: number;
  total: number;
  limit: number;
};

export default function UsersPage() {
  // const { id } = useParams<{ id: string }>();

  const [users, setUsers] = useState<UserType[]>([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  const onLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    const fetchusers = async () => {
      try {
        // setLoading(true);

        const response = await axios.get<UsersResponse>(
          `http://localhost:8080/users?isDeleted=false&page=${page}&limit=${limit}`,
        );

        setUsers(response.data);
        // setTotal(response.data.total);
      } catch {
        console.log("Error fetching users");
      }
    };
    fetchusers();
  }, [page, limit]);

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-lg text-center border-b-2 border-gray-500">
              <th>Пользователь</th>
              <th>Дата создания</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="text-center align-middle border-b border-gray-500"
              >
                <td className="flex items-center gap-4">
                  {/* <Avatar
                    src={process.env.NEXT_PUBLIC_API_URL + user?.avatar}
                    width={70}
                  /> */}
                  <p>{user.name}</p>
                </td>
                <td> {moment(user.createDate).format("MMM Do YY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
