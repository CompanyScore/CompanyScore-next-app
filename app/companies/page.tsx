import { Container } from '@/shared/ui';
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

export default async function CompaniesPage() {
  const [data, locations, industries] = await Promise.all([
    GetCompaniesServer(),
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
          <CompaniesList companies={data.data} />
        </div>
      </Container>
    </>
  );
}
