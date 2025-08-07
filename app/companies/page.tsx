'use client';

import { Container } from '@/shared/ui';
import {
  CompaniesFilter,
  CompaniesHero,
  CompaniesList,
  CompaniesSearch,
  CompaniesSort,
} from './components';
// import { useCompanyStore } from '@/store/api';

export default function CompaniesPage() {
  // const { total } = useCompanyStore();

  return (
    <>
      <CompaniesHero />
      <CompaniesSearch />
      <Container className="flex gap-[24px]">
        <CompaniesFilter />
        <div className="flex flex-col flex-1 gap-[32px]">
          <CompaniesSort />
          <CompaniesList />
        </div>
      </Container>

      {/* <section className="flex flex-col items-stretch justify-center gap-8 m-auto">
        <Title>{`Компаний: ${total}`}</Title>
        <CompaniesFilter />
        <CompaniesList />
      </section> */}
    </>
  );
}
