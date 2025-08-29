'use client';

import { CompaniesCard } from './companies-card';
import { InfinityList, Loading } from '@/shared/ui';
import { GetCompaniesClient } from '@/api/companies/companies-client';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/api';

export function CompaniesList({
  companies: publicCompanies,
}: {
  companies: any[];
}) {
  const { isAuth, profileQuery } = useAuth();
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

  const dataCompanies = data?.pages.flatMap(page => page.data) || [];
  const companies = isAuth && dataCompanies ? dataCompanies : publicCompanies;

  if (isLoading || profileQuery.isLoading) {
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

  // console.log(companies, !companies.length)
  // if (!companies.length) {
  //   return <Title>Список компаний пуст</Title>;
  // }

  return (
    <div className="flex flex-col gap-10 w-full">
      <InfinityList
        loading={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        isFetching={isAuth}
      >
        {companies.map(company => {
          const {
            id,
            name,
            rating,
            logo,
            country,
            city,
            commentsIds,
            totalScore,
          } = company;

          return (
            <CompaniesCard
              key={id}
              name={name}
              rating={rating}
              logo={logo}
              country={country.name}
              city={city.name}
              commentsCount={commentsIds.length}
              totalScore={totalScore}
            />
          );
        })}
      </InfinityList>
      {!isAuth && (
        <div className="text-center text-sm text-gray-600 mt-4">
          Войдите, чтобы увидеть все отзывы
        </div>
      )}
    </div>
  );
}
