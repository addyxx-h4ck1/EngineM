import Image from 'next/image';
import React from 'react';

const Docssection = () => {
  return (
    <section className="mt-[3rem] flex justify-center items-center px-2 ">
      <div className="usecasewrapper flex justify-center items-center w-full max-w-[1200px]">
        <article>
          <h4 className="mt-4 text-xl font-semibold">Documentation</h4>
          <h3 className="herof mt-3 w-full  text-[#2e496b font-semibold">
            Comprehensive <span className="text-[#7827E6]"> Documentation</span>{' '}
            for Seamless Integration
          </h3>
          <p className="max-w-[1000px] w-full mt-4">
            Our comprehensive documentation is designed to help you get the most
            out of our email engine. From initial setup to advanced features,
            you will find everything you need to integrate and utilize our
            powerful API.
          </p>
          <button className="mt-4 py-3 px-4 rounded-md border-[#7827E6] border-[1px] font-semibold duration-300 hover:bg-[#7827E6] hover:text-white dark:text-white">
            Documentation
          </button>
        </article>
        {/* IMAGE */}
        <div className="heroimg mt-9 w-full rounded-lg flex justify-center items-center ">
          <Image
            src={
              'https://miro.medium.com/v2/resize:fit:1358/0*YTLUwphSdWs08-dK.gif'
            }
            alt=""
            width={4192}
            height={1746}
            unoptimized
            className="w-[98%] h-[100%] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Docssection;
