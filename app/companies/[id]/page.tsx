'use client';

import React from 'react';
import { Container } from '@/shared/ui';
import { GetCompanyClient } from '@/api/companies/companies-client';
import { useParams } from 'next/navigation';

export default function CompanyDetail() {
  const params = useParams();
  const companyId = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!companyId) {
    return <div>Компании нет</div>;
  }

  const { data, isLoading } = GetCompanyClient({ id: companyId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <Container>
      <p>{data.name}</p>
    </Container>
  );
}
