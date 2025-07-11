import { useCompanyStore } from '@/store/api';
import { CompaniesCard } from './companies-card';
import { useEffect, useRef } from 'react';
import { Loading } from '@/ui';

export function CompaniesList() {
  const { companies, limit, total, page, getCompanies, loading } =
    useCompanyStore();
  const lastElement = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    if (!loading) {
      const callback = function (entries: IntersectionObserverEntry[]) {
        if (entries[0].isIntersecting && page < total / limit) {
          getCompanies({ page: page + 1 });
        }
      };

      observer.current = new IntersectionObserver(callback);
      if (lastElement.current) {
        observer.current.observe(lastElement.current);
      }
    }
  }, [loading]);

  return (
    <div className="flex gap-8 flex-wrap justify-center">
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
      {loading && <Loading />}
      <div style={{ height: '20px' }} ref={lastElement} />
    </div>
  );
}
