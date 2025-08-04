'use client';

import { useEffect, useRef } from 'react';
import { Loading } from './loading';

type InfinityListProps = {
  limit: number;
  children: React.ReactNode;
  total: number;
  page: number;
  loading: boolean;
  getNewElements: (params: { page: number }) => void;
};

export const InfinityList = ({
  children,
  limit,
  total,
  page,
  loading,
  getNewElements,
}: InfinityListProps) => {
  const lastElement = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    if (!loading) {
      const callback = function (entries: IntersectionObserverEntry[]) {
        if (entries[0].isIntersecting && page < total / limit) {
          getNewElements({ page: page + 1 });
        }
      };

      observer.current = new IntersectionObserver(callback);
      if (lastElement.current) {
        observer.current.observe(lastElement.current);
      }
    }
  }, [loading]);

  return (
    <div className="flex flex-col gap-8 items-center">
      {children}
      {loading && <Loading />}
      <div style={{ height: '20px' }} ref={lastElement} />
    </div>
  );
};

export default InfinityList;
