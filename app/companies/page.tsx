import { Container } from '@/shared/ui';
import {
  CompaniesFilter,
  CompaniesHero,
  CompaniesList,
  CompaniesSearch,
  CompaniesSort,
} from './components';
import { GetIndustriesServer, GetLocationsServer } from '@/api';

export default async function CompaniesPage() {
  const [locations, industries] = await Promise.all([
    GetLocationsServer(),
    GetIndustriesServer(),
  ]);

  return (
    <>
      <CompaniesHero />
      <CompaniesSearch />
      <Container className="flex gap-[24px]">
        <CompaniesFilter locations={locations} industries={industries} />
        <div className="flex flex-col flex-1 gap-[32px] items-end">
          <CompaniesSort />
          <CompaniesList />
        </div>
      </Container>
    </>
  );
}
