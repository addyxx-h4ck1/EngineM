import React from 'react';
import Securitycard from '../Securitycard';
import { data } from '../../cards-data';
const Security = () => {
  return (
    <section className="mt-[3rem] text-center flex flex-col justify-center items-center w-full px-2">
      <h2 className="herod font-semibold w-full max-w-[700px]">
        Security & <span className="text-[#7827E6]"> Compliance 🔒</span>
      </h2>
      <p className="max-w-[1000px] w-full mt-4">
        Our email engine is built with robust security features and adheres to
        strict compliance standards to ensure your data is protected and your
        emails are delivered securely.
      </p>
      {/* CARDS */}
      <article className="mt-4 w-full max-w-[1100px] securitycards">
        {data.map((el) => {
          return (
            <Securitycard
              img={el.img}
              title={el.title}
              desc={el.desc}
              key={el.img}
            />
          );
        })}
      </article>
    </section>
  );
};

export default Security;
