'use client';

import { CompaniesCard } from './companies-card';
import { InfinityList, Loading } from '@/shared/ui';
import { useCompaniesInfinity } from '@/api/companies/companies-client';

export function CompaniesList() {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    useCompaniesInfinity();

  const companies = data?.pages.flatMap(page => page.data) || [];
  console.log(companies);

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
    <InfinityList
      loading={isFetchingNextPage}
      fetchNextPage={fetchNextPage}
      className="flex-1"
    >
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
