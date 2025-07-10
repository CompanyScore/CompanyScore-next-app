'use client';
import {
  CompaniesFilter,
  CompaniesList,
  CompaniesPagination,
} from './components';
import { Container, Title } from '@/ui';
import { useCompanyStore } from '@/store/api';

export default function CompaniesPage() {
  const { total } = useCompanyStore();

  return (
    // <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
    //   {/* <CompaniesText />
    //   <Title>Новые компании</Title>
    //   <CompaniesCarousel />
    //   <Title>{`Компаний: ${total}`}</Title>
    //   <CompaniesFilter />
    //   <CompaniesTable />
    //   <div className="flex justify-between">
    //     <CompaniesShowBy />
    //     <CompaniesPagination />
    //   </div> */}
    //   <Title>{`Компаний: ${total}`}</Title>
    //   <CompaniesFilter />
    //   <CompaniesCard />
    //   <CompaniesTable />
    // </section>
    <Container>
      <section className="flex flex-col items-stretch justify-center gap-8 m-auto">
        <Title>{`Компаний: ${total}`}</Title>
        <CompaniesFilter />
        <CompaniesList />
        <CompaniesPagination />
      </section>
    </Container>
  );
}
