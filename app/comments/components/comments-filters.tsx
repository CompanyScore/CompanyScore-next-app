'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Checkbox, FilterCard, Radio, Select } from '@/shared/ui';
import { OptionType } from '@/shared/ui/select';
import { useMemo } from 'react';
import { FaStar } from 'react-icons/fa';

type Props = {
  categories: { id: string; title: string }[];
  positions: { id: string; title: string; category: { id: string } }[];
  locations: Location[];
};

export function CommentsFilter({ categories, positions, locations }: Props) {
  return (
    <div className="hidden lg:block w-[288px] shrink-0 scrollbar-none">
      <div className="flex flex-col gap-5 max-w-[288px] w-full sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto scrollbar-none">
        <FilterLocations locations={locations} />

        <FilterPositions categories={categories} positions={positions} />

        <FilterInteraction />

        <FilterAnonym />

        <FilterStars />
      </div>
    </div>
  );
}

type City = { id: string; name: string };
type Location = { id: string; name: string; cities: City[] };

type CompaniesProps = {
  locations: Location[];
};

function FilterLocations({ locations }: CompaniesProps) {
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
    next.delete('page'); // сброс пагинации при смене фильтра
    router.replace(`?${next.toString()}`, { scroll: false });
  };

  const countriesOptions = useMemo<OptionType[]>(
    () => locations.map(l => ({ value: l.id, label: l.name })),
    [locations],
  );

  const citiesOptions = useMemo<OptionType[]>(() => {
    if (!countryId) return [];
    const loc = locations.find(l => l.id === countryId);
    // Если нужен id города — используй c.id
    return (loc?.cities ?? []).map(c => ({ value: c.id, label: c.name }));
  }, [countryId, locations]);

  return (
    <FilterCard title="Локация">
      {/* Страна */}
      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Страна"
          isClearable
          options={countriesOptions}
          value={countryId}
          onChange={(opt: string | OptionType | null) => {
            const next = typeof opt === 'string' ? opt : (opt?.value ?? null);
            // При смене страны сбрасываем город и компанию
            replaceParams({ country: next, city: null, company: null });
          }}
        />
      </div>

      {/* Город */}
      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Город"
          isClearable
          isDisabled={!countryId}
          options={citiesOptions}
          value={cityId}
          onChange={(opt: string | OptionType | null) => {
            const next = typeof opt === 'string' ? opt : (opt?.value ?? null);
            // При смене города сбрасываем компанию
            replaceParams({ city: next, company: null });
          }}
        />
      </div>
    </FilterCard>
  );
}

type PositionsProps = {
  categories: { id: string; title: string }[];
  positions: { id: string; title: string; category: { id: string } }[];
};

function FilterPositions({ categories, positions }: PositionsProps) {
  const router = useRouter();
  const sp = useSearchParams();

  const userPositionCategoryId = sp.get('position_category'); // строка или null
  const userPositionId = sp.get('position'); // строка или null

  const categoryOptions = useMemo(
    () => categories.map(c => ({ label: c.title, value: c.id })),
    [categories],
  );

  const positionOptions = useMemo(
    () =>
      positions
        .filter(
          p =>
            !userPositionCategoryId || p.category.id === userPositionCategoryId,
        )
        .map(p => ({ label: p.title, value: p.id })),
    [positions, userPositionCategoryId],
  );

  return (
    <FilterCard title={'Должность'}>
      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Сфера деятельности"
          isClearable
          options={categoryOptions}
          value={userPositionCategoryId}
          onChange={id => {
            const next = new URLSearchParams(sp);
            if (id) next.set('position_category', id);
            else next.delete('position_category');
            next.delete('position'); // сбросить должность при смене категории
            router.replace(`?${next.toString()}`);
          }}
        />
      </div>

      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Должность"
          isClearable
          isDisabled={!userPositionCategoryId}
          options={positionOptions}
          value={userPositionId}
          onChange={id => {
            const next = new URLSearchParams(sp);
            if (id) next.set('position', id);
            else next.delete('position');
            router.replace(`?${next.toString()}`);
          }}
        />
      </div>
    </FilterCard>
  );
}

function FilterInteraction() {
  const router = useRouter();
  const sp = useSearchParams();

  type Interaction = 'test' | 'interview' | 'internship' | 'work';

  const selectedSet = useMemo(() => {
    const raw = sp.get('interaction') || '';
    return new Set(raw.split(',').filter(Boolean) as Interaction[]);
  }, [sp]);

  const toggle = (key: Interaction) => {
    const next = new URLSearchParams(sp);
    const s = new Set(selectedSet);
    if (s.has(key)) s.delete(key);
    else s.add(key);

    if (s.size) next.set('interaction', Array.from(s).join(','));
    else next.delete('interaction');

    router.replace(`?${next.toString()}`);
  };

  return (
    <FilterCard title={'Тип взаимодействия'}>
      <div className="flex flex-col gap-5 w-full">
        <Checkbox
          value="test"
          label="Тестовое"
          selected={selectedSet.has('test')}
          onChange={() => toggle('test')}
        />
        <Checkbox
          value="interview"
          label="Собеседование"
          selected={selectedSet.has('interview')}
          onChange={() => toggle('interview')}
        />
        <Checkbox
          value="internship"
          label="Стажировка"
          selected={selectedSet.has('internship')}
          onChange={() => toggle('internship')}
        />
        <Checkbox
          value="work"
          label="Работа"
          selected={selectedSet.has('work')}
          onChange={() => toggle('work')}
        />
      </div>
    </FilterCard>
  );
}

type AnonymOption = 1 | 0 | 'all';

function FilterAnonym() {
  const router = useRouter();
  const sp = useSearchParams();

  const urlVal = sp.get('anonym');
  const selectedValue: AnonymOption =
    urlVal === '1' ? 1 : urlVal === '0' ? 0 : 'all';

  return (
    <FilterCard title="Анонимность">
      <Radio
        className="flex flex-col gap-5 w-full"
        options={[
          { label: 'Анонимные', value: 1 },
          { label: 'Не анонимные', value: 0 },
          { label: 'Все', value: 'all' },
        ]}
        selectedValue={selectedValue}
        onChange={(v: string | number | boolean) => {
          const val: AnonymOption =
            v === 1 || v === '1' ? 1 : v === 0 || v === '0' ? 0 : 'all';

          const next = new URLSearchParams(sp);
          if (val === 'all') next.delete('anonym');
          else next.set('anonym', String(val));
          next.delete('page');
          router.replace(`?${next.toString()}`, { scroll: false });
        }}
      />
    </FilterCard>
  );
}

// было: function FilterStars() { ... }
function FilterStars() {
  const router = useRouter();
  const sp = useSearchParams();

  // выбранное значение: "1" | "2" | ... | "5" | "all"
  const selected = sp.get('stars') || 'all';

  const setStars = (v: string | number | boolean) => {
    const val = String(v); // радио всегда вернёт то, что в options.value
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
    <FilterCard title="Оценка">
      <Radio
        className="flex-col gap-5 w-full px-7"
        options={options}
        selectedValue={selected}
        onChange={setStars}
      />
    </FilterCard>
  );
}
