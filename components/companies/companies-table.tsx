"use client";
import React from "react";
// import Image from "next/image";

type Company = {
  id: number;
  name: string;
  country: string;
  city: string;
  rating: number;
  logo: string;
  commentsIds: string[];
};

type CompaniesProps = {
  companies: Company[];
};

export default function CompaniesTable({ companies }: CompaniesProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Компания</th>
            <th>Страна</th>
            <th>Город</th>
            <th>Количество комментариев</th>
            <th>Рэйтинг</th>
            <th>Оставить комментарий</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.id}>
              {/* <td>
                <Image
                  src={company.logo}
                  alt="Company logo"
                  width={30}
                  height={30}
                />
                {company.name}
              </td> */}
              <td>{company.country}</td>
              <td>{company.city}</td>
              <td>{company.commentsIds.length}</td>
              <td>{company.rating}</td>
              <td>
                <button className="btn btn-primary">Оставить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
