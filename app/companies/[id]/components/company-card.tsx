'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import { Button, Toast } from '@/ui';
import { useCommentsStore, useCompaniesStore } from '@/store';

export function CompanyCard() {
  const { id } = useParams<{ id: string }>();
  const { company, getCompany } = useCompaniesStore();
  const { total } = useCommentsStore();

  useEffect(() => {
    getCompany(id);
  }, [getCompany, id]);

  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content flex-col-reverse items-start justify-between w-full lg:flex-row">
        <div className="flex flex-col items-center gap-4 justify-center margin-auto">
          <Image
            width={420}
            height={70}
            alt="Company logo"
            src={
              company?.logo
                ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${company?.logo}`
                : '/imgs/company-logo.jpg'
            }
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
          <div className="stats shadow">
            <div className="stat flex flex-col items-center">
              <div className="stat-title">Средний балл:</div>
              <div className="stat-value">{company?.rating}</div>
              <div className="stat-desc">Общее число Отзывов: {total}</div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between items-start w-full">
            <h1 className="text-5xl font-bold">{company?.name}</h1>
            <Button className="btn-success">
              <label htmlFor={'companies_add_comment_modal'}>
                <Image
                  src="/icons/pencil.svg"
                  alt="Pencil"
                  width={25}
                  height={25}
                />
              </label>
            </Button>
          </div>
          <p className="pt-4">{company?.description}</p>
        </div>
      </div>
      <Toast />
    </div>
  );
}
