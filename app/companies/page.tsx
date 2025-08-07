'use client';
import { CompaniesHero } from './components';
// import { useCompanyStore } from '@/store/api';

export default function CompaniesPage() {
  // const { total } = useCompanyStore();

  return (
    <>
      <CompaniesHero />
      {/* <section className="flex flex-col items-stretch justify-center gap-8 m-auto">
        <Title>{`Компаний: ${total}`}</Title>
        <CompaniesFilter />
        <CompaniesList />
      </section> */}
    </>
  );
}
