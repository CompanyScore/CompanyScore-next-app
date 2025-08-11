'use client';

import { CompaniesCard } from './companies-card';
import { InfinityList, Loading } from '@/shared/ui';
import { GetCompaniesClient } from '@/api/companies/companies-client';
import { useCompaniesFilterStore } from '@/store/companies-filter.store';

export function CompaniesList() {
  const search = useCompaniesFilterStore(state => state.search);
  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    GetCompaniesClient({ search });

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
