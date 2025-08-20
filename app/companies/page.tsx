import { Container } from '@/shared/ui';
import {
  CompaniesFilter,
  CompaniesHero,
  CompaniesList,
  CompaniesSearch,
  CompaniesSort,
} from './components';
import { GetLocationsServer } from '@/api';
// import { useCompanyStore } from '@/store/api';

export default async function CompaniesPage() {
  // const { total } = useCompanyStore();
  const locations = await GetLocationsServer();

  return (
    <>
      <CompaniesHero />
      <CompaniesSearch />
      <Container className="flex gap-[24px]">
        <CompaniesFilter locations={locations} />
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
