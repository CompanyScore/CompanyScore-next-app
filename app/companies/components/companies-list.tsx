'use client';

import { CompaniesCard } from './companies-card';
import { InfinityList, Loading } from '@/shared/ui';
import { GetCompaniesClient } from '@/api/companies/companies-client';
import { useSearchParams } from 'next/navigation';

export function CompaniesList() {
  const sp = useSearchParams();

  const sort = sp.get('sort') ?? undefined;
  const companyName = sp.get('companyName') ?? undefined;
  const countryId = sp.get('country') ?? undefined;
  const cityId = sp.get('city') ?? undefined;
  const industryId = sp.get('industry') ?? undefined;
  const stars = sp.get('stars') ?? undefined;

  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    GetCompaniesClient({
      companyName,
      countryId,
      cityId,
      stars,
      sort,
      industryId,
    });

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
