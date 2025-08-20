'use client';

import { CompaniesCard } from './companies-card';
import { InfinityList, Loading } from '@/shared/ui';
import { GetCompaniesClient } from '@/api/companies/companies-client';
import { useCompaniesFilterStore } from '@/store/companies-filter.store';
import { useSearchParams } from 'next/navigation';

export function CompaniesList() {
  const sp = useSearchParams();

  const countryId = sp.get('country') ?? undefined;
  const cityId = sp.get('city') ?? undefined;

  const search = useCompaniesFilterStore(state => state.search); // Тут переделать как со страной скорее всего
  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    GetCompaniesClient({ search, countryId, cityId });

  const companies = data?.pages.flatMap(page => page.data) || [];

  if (isLoading) {
    return (
      <div className="mx-auto">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Ошибка загрузки: {String(error)}
      </div>
    );
  }

  return (
    <InfinityList loading={isFetchingNextPage} fetchNextPage={fetchNextPage}>
      {companies.map(company => {
        const { id, name, rating, logo, country, city } = company;

        return (
          <CompaniesCard
            key={id}
            name={name}
            rating={rating}
            logo={logo}
            country={country.name}
            city={city.name}
          />
        );
      })}
    </InfinityList>
  );
}
