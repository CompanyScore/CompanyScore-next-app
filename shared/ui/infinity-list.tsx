'use client';

import { useEffect } from 'react';
import { Loading } from './loading';
import { useInView } from 'react-intersection-observer';

type InfinityListProps = {
  children: React.ReactNode;
  loading: boolean;
  fetchNextPage: () => void;
  isFetching?: boolean;
  className?: string;
};

export const InfinityList = ({
  children,
  loading,
  fetchNextPage,
  isFetching = true,
  className,
}: InfinityListProps) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isFetching]);

  return (
    <div className={`flex flex-col gap-2 items-center ${className}`}>
      {children}

      {loading && <Loading />}
      <div ref={ref} />
    </div>
  );
};

export default InfinityList;
