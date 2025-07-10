import { useCompanyStore } from '@/store/api';
import { CompaniesCard } from './companies-card';

export function CompaniesList() {
  const { companies } = useCompanyStore();

  console.log(companies);
  return (
    <div className="flex gap-8">
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
    </div>
  );
}
