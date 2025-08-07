import { Searcher } from '@/shared/ui';

export function CompaniesSearch() {
  return (
    <div className="px-16 py-14 bg-neutral-400 max-w-[880px] m-auto rounded-lg transform -translate-y-[50%]">
      <Searcher onSearch={() => {}} />
    </div>
  );
}
