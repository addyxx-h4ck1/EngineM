import Link from 'next/link';
import React from 'react';

const Getstarted = () => {
  return (
    <section className="mt-[3rem] flex flex-col justify-center items-center w-full text-center px-2">
      <h4 className="mt-4 text-[#7827E6] text-xl">Get Started Today</h4>
      <h2 className="herod font-semibold w-full max-w-[700px]">
        Start Your <span className="text-[#7827E6]"> Journey</span> Today
      </h2>
      <p className="max-w-[1000px] w-full mt-4">
        Ready to elevate your email communication? Getting started is quick,
        easy, and completely free.
      </p>
      <div className="mt-4 w-full flex gap-4 flex-wrap justify-center items-center text-sm ">
        <Link href={'/accounts/new'}>
          <button className="py-2 px-3 rounded-md text-white bg-[#7827E6] font-semibold duration-300 hover:bg-[#9b5bf5] dark:text-white">
            Get started for free
          </button>
        </Link>
        <Link href={'/terms'}>
          <button className="py-2 px-3 rounded-md border-[#7827E6] border-[1px] font-semibold duration-300 hover:bg-[#7827E6] hover:text-white dark:text-white">
            Terms of Service
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Getstarted;
