import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Usecases = () => {
  return (
    <section className="mt-[3rem] flex justify-center items-center px-2 ">
      <div className="usecasewrapper flex justify-center items-center w-full max-w-[1200px]">
        <article>
          <h4 className="mt-4 text-xl font-semibold">
            Engine<span className="text-[#7827E6]">M</span>
          </h4>
          <h3 className="herof mt-3 w-full  text-[#2e496b font-semibold">
            Use Cases and <span className="text-[#7827E6]"> Industries</span>
          </h3>
          <p className="max-w-[1000px] w-full mt-4">
            Our email engine is versatile and powerful, making it an ideal
            solution for various industries and use cases. Whether you are a
            developer, marketer, or business owner, our API ensures your emails
            reach the inbox, driving engagement and growth.
          </p>
          <Link href={'/accounts/new'}>
            <button className=" mt-4 py-3 px-4 rounded-md text-white bg-[#7827E6] font-semibold duration-300 hover:bg-[#9b5bf5] dark:text-white">
              Get started for free
            </button>
          </Link>
        </article>
        {/* IMAGE */}
        <div className="heroimg mt-9 w-full rounded-lg flex justify-center items-center ">
          <Image
            src={
              'https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2018/11/XX_tools-.gif'
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

export default Usecases;
