'use client';

import { Button, FilterCard, Radio, Select } from '@/shared/ui';
import { OptionType } from '@/shared/ui/select';
import { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaStar } from 'react-icons/fa';

type City = { id: string; name: string };
type Location = { id: string; name: string; cities: City[] };

type CompaniesFilterProps = {
  locations: Location[];
};

export function CompaniesFilter({ locations }: CompaniesFilterProps) {
  // console.log(locations)

  return (
    <div className="w-[288px] flex flex-col gap-[20px]">
      <FilterLocations locations={locations} />
      <FilterStars />
      <Button className="text-lg btn-primary" onClick={() => {}}>
        Сбросить фильтры
      </Button>
    </div>
  );
}

function FilterLocations({ locations }: CompaniesFilterProps) {
  const router = useRouter();
  const sp = useSearchParams();

  const countryId = sp.get('country');
  const cityId = sp.get('city');

  const replaceParams = (changes: Record<string, string | null>) => {
    const next = new URLSearchParams(sp);
    Object.entries(changes).forEach(([k, v]) => {
      if (v) next.set(k, v);
      else next.delete(k);
    });
    next.delete('page');
    router.replace(`?${next.toString()}`, { scroll: false });
  };

  const countriesOptions = useMemo<OptionType[]>(
    () => locations.map(l => ({ value: l.name, label: l.name })), //потом на value:l.id изменить
    [locations],
  );

  const citiesOptions = useMemo<OptionType[]>(() => {
    if (!countryId) return [];
    const loc = locations.find(l => l.name === countryId); //потом на l.id изменить
    return (loc?.cities ?? []).map(c => ({ value: c.name, label: c.name })); //потом на value:c.id изменить
  }, [countryId, locations]);

  return (
    <FilterCard title="Компания">
      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Страна"
          isClearable
          options={countriesOptions}
          value={countryId}
          onChange={(opt: string | OptionType | null) => {
            const next = typeof opt === 'string' ? opt : (opt?.value ?? null);
            replaceParams({ country: next, city: null, company: null });
          }}
        />
      </div>

      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Город"
          isClearable
          isDisabled={!countryId}
          options={citiesOptions}
          value={cityId}
          onChange={(opt: string | OptionType | null) => {
            const next = typeof opt === 'string' ? opt : (opt?.value ?? null);
            replaceParams({ city: next, company: null });
          }}
        />
      </div>
    </FilterCard>
  );
}

function FilterStars() {
  const router = useRouter();
  const sp = useSearchParams();

  const selected = sp.get('stars') || 'all';

  const setStars = (v: string | number | boolean) => {
    const val = String(v);
    const next = new URLSearchParams(sp);
    if (val === 'all') next.delete('stars');
    else next.set('stars', val);
    next.delete('page');
    router.replace(`?${next.toString()}`, { scroll: false });
  };

  const Stars = ({ n }: { n: 1 | 2 | 3 | 4 | 5 }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => i + 1).map(i => (
        <FaStar
          key={i}
          className={`w-6 h-6 ${i <= n ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  const options = [
    { label: 'Все', value: 'all' },
    ...([5, 4, 3, 2, 1] as const).map(n => ({
      label: <Stars n={n} />,
      value: String(n),
    })),
  ];

  return (
    <FilterCard title="Рейтинг">
      <Radio
        className="flex-col gap-5 w-full px-7"
        options={options}
        selectedValue={selected}
        onChange={setStars}
      />
    </FilterCard>
  );
}

// import { useEffect, useState } from 'react';
// import { Searcher } from '@/shared/ui';
// import { Error, Button, Toast, Select } from '@/shared/ui';
// import { useCompanyStore } from '@/store/api';
// import { CreateCompanyModal } from '@/app/companies/modals';
// import { OptionType } from '@/shared/ui/select';

// const ratingOptions: OptionType[] = ['1', '2', '3', '4', '5'].map(r => ({
//   label: r,
//   value: r,
// }));

// export function CompaniesFilter() {
//   const { getLocations, countryOptions, cityOptions, getCompanies, error } =
//     useCompanyStore();

//   const [selectedRating, setSelectedRating] = useState('');
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   useEffect(() => {
//     getLocations(selectedCountry);
//   }, [getLocations, selectedCountry]);

//   const onSearchCompanyByName = (searchedCompanyName: string) => {
//     getCompanies({ searchedCompanyName });
//   };

//   const onSelectRating = (option: OptionType | null) => {
//     const value = option?.value != null ? String(option.value) : '';
//     setSelectedRating(value);
//     getCompanies({ selectedRating: value });
//   };

//   const onSelectCountry = (option: OptionType | null) => {
//     const value = option?.value ? String(option.value) : '';
//     setSelectedCountry(value);
//     getCompanies({ selectedCountry: value });
//   };

//   const onSelectCity = (option: OptionType | null) => {
//     const value = option?.value ? String(option.value) : '';
//     setSelectedCity(value);
//     getCompanies({ selectedCity: value });
//   };

//   const countryOptionsFormatted: OptionType[] = countryOptions.map(c => ({
//     label: c,
//     value: c,
//   }));

//   const cityOptionsFormatted: OptionType[] = cityOptions.map(c => ({
//     label: c,
//     value: c,
//   }));

//   const onReset = () => {
//     setSelectedCountry('');
//     setSelectedCity('');
//     setSelectedRating('');
//     getCompanies({});
//   };

//   const openModal = () => {
//     const modal = document.getElementById(
//       'create_company_modal',
//     ) as HTMLInputElement;
//     if (modal) {
//       modal.checked = true;
//     }
//   };

//   if (error) return <Error text={error} />;

//   return (
//     <div>
//       <div className="flex flex-wrap items-center justify-between gap-4">
//         <div className="flex items-center flex-wrap gap-4 max-w-[750px] w-full">
//           <Searcher onSearch={onSearchCompanyByName} />
//           <div className="flex items-center gap-4 w-full">
//             <Select
//               placeholder="Все страны"
//               isClearable
//               options={countryOptionsFormatted}
//               value={
//                 countryOptionsFormatted.find(
//                   opt => opt.value === selectedCountry,
//                 ) ?? null
//               }
//               onChange={onSelectCountry}
//             />

//             <Select
//               placeholder="Все города"
//               isClearable
//               isDisabled={!selectedCountry}
//               options={cityOptionsFormatted}
//               value={
//                 cityOptionsFormatted.find(opt => opt.value === selectedCity) ??
//                 null
//               }
//               onChange={onSelectCity}
//             />

//             <Select
//               placeholder="Все рейтинги"
//               isClearable
//               options={ratingOptions}
//               value={
//                 ratingOptions.find(opt => opt.value === selectedRating) ?? null
//               }
//               onChange={onSelectRating}
//             />
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <Button onClick={onReset}>Сбросить</Button>
//           <Button onClick={openModal}>Предложить компанию</Button>
//         </div>
//       </div>
//       <CreateCompanyModal />
//       <Toast />
//     </div>
//   );
// }
