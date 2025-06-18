'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useCompaniesStore } from '@/store';
import type { CompanyType } from '@/store/companies';
import { Button, ImageTable, Tooltip, Title, Table, Toast } from '@/ui';

export function CompaniesTable() {
  const { companies, loading } = useCompaniesStore();

  useEffect(() => {
    useCompaniesStore.getState().getCompanies({});
  }, []);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (!companies?.length) {
    return <Title>Список компаний пуст</Title>;
  }

  const columns = [
    {
      key: 'company',
      title: 'Компания',
      render: (company: CompanyType) => (
        <div className="flex max-[650px]:justify-center items-center space-x-2 ">
          <ImageTable
            className="max-[650px]:hidden"
            src={
              company?.logo
                ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${company?.logo}`
                : '/imgs/company-logo.jpg'
            }
          />
          <p className="text-center">{company.name}</p>
        </div>
      ),
    },
    { key: 'rating', title: 'Рейтинг' },
    { key: 'country', title: 'Страна' },
    { key: 'city', title: 'Город' },
    {
      key: 'comments',
      title: 'Отзывы',
      render: (company: CompanyType) => company.commentsIds?.length,
    },
    {
      key: 'actions',
      title: 'Действия',
      render: (company: CompanyType) => (
        <div className="flex justify-center items-center space-x-2 h-full">
          <Tooltip tip="Посмотреть">
            <Button
              className="btn-neutral"
              onClick={() => redirect(`/companies/${company.id}`)}
            >
              <Image src="/icons/file.svg" alt="File" width={25} height={25} />
            </Button>
          </Tooltip>
          <Tooltip tip="Оставить отзыв">
            <Button className="btn-success">
              <Image
                src="/icons/pencil.svg"
                alt="Pencil"
                width={25}
                height={25}
              />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} data={companies} />
      <Toast />
    </>
  );
}
