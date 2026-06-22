import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <>
      <section className="loader-skeleton w-full mt-6 flex gap-2 flex-wrap">
        <article className="skeleton-left">
          <div className="w-full h-[200px] flex-grow">
            <Skeleton height={200} className="" containerClassName="flex-1" />
          </div>
        </article>
        <article className="skeleton-right">
          <div className="w-full h-[200px] flex-grow">
            <Skeleton height={200} containerClassName="flex-1" />
          </div>
        </article>
      </section>
      <article className="mt-5 w-full">
        <Skeleton height={90} count={1} />
      </article>
    </>
  );
};

export default SkeletonLoader;
