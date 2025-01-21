"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type UserType = {
  id: number;
  name: string;
  photo: string;
  position: string;
  description: string;
  comments: string[];
};

export function ProfileCard() {
  const id = "1";
  const [user, setUser] = useState<UserType>();

  const fetchUser = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/users/${id}`);

      setUser(response.data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-start gap-20">
        <img src={user?.photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{user?.name}</h1>
          <p className="mt-4">{user?.position}</p>
          <p className="mt-4">{user?.description}</p>
        </div>
      </div>
    </div>
  );
}
