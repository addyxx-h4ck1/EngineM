import React from 'react';

const Termshero: React.FC<{ topic: string }> = ({ topic }) => {
  return (
    <section className="mt-[2rem] text-center px-2 flex flex-col justify-center items-center">
      <article className="max-w-[1000px] w-full flex flex-col justify-center items-center">
        <h1 className="heroh font-bold">Help Center</h1>
        <h2 className="mt-4">{topic}</h2>
      </article>
    </section>
  );
};

export default Termshero;
