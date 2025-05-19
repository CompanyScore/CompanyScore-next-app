'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { CompaniesPostCommentModal } from '@/app/companies/modals/index';
import { useCompaniesStore } from '@/store';
import type { CompanyType } from '@/store/companies';
import { Button, Avatar, Tooltip, Title, Table, Toast } from '@/ui';

export function CompaniesTable() {
  const { companies, loading } = useCompaniesStore();

  const [selectedCompany, setSelectedCompany] = useState<CompanyType | null>(
    null,
  );

  const openModal = (company: CompanyType) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    useCompaniesStore.getState().getCompanies({});
  }, []);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (!companies?.length) {
    return <Title position="center">Список компаний пуст</Title>;
  }

  const columns = [
    {
      key: 'company',
      title: 'Компания',
      render: (company: CompanyType) => (
        <div className="flex max-[650px]:justify-center items-center space-x-2 ">
          <Avatar
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
            <Button className="btn-success" onClick={() => openModal(company)}>
              <label htmlFor={'companies_add_comment_modal'}>
                <Image
                  src="/icons/pencil.svg"
                  alt="Pencil"
                  width={25}
                  height={25}
                />
              </label>
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} data={companies} />
      <CompaniesPostCommentModal companyId={selectedCompany?.id || ''} />
      <Toast />
    </>
  );
}
