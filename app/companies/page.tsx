import {
  CompaniesFilter,
  CompaniesHero,
  CompaniesList,
  CompaniesSearch,
  CompaniesSort,
} from './components';

import {
  GetCompaniesServer,
  GetIndustriesServer,
  GetLocationsServer,
} from '@/api';

import { Container } from '@/shared/ui';
import { Suspense } from 'react';

export default async function CompaniesPage() {
  const [data, locations, industries] = await Promise.all([
    GetCompaniesServer(),
    GetLocationsServer(),
    GetIndustriesServer(),
  ]);

  return (
    <>
      <CompaniesHero />
      <Container className="flex gap-[24px] pt-0 md:pt-0">
        <Suspense fallback={<div>Загрузка...</div>}>
          <CompaniesSearch />
          <CompaniesFilter locations={locations} industries={industries} />
          <div className="flex flex-col flex-1 gap-[32px] items-end">
            <CompaniesSort />
            <CompaniesList companies={data.data} />
          </div>
        </Suspense>
      </Container>
    </>
  );
}
