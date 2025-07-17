import { useCompanyStore } from '@/store/api';
import { CompaniesCard } from './companies-card';
import InfinityList from '@/shared/infinity-list';

export function CompaniesList() {
  const { companies, limit, total, page, getCompanies, loading } =
    useCompanyStore();

  return (
    <div>
      <InfinityList
        limit={limit}
        total={total}
        page={page}
        getNewElements={getCompanies}
        loading={loading}
      >
        {companies.map(company => {
          const { id, name, rating, logo, country, city } = company;

          return (
            <CompaniesCard
              key={id}
              name={name}
              rating={rating}
              logo={logo}
              country={country}
              city={city}
            />
          );
        })}
      </InfinityList>
    </div>
  );
}
