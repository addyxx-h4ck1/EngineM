import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero text-center flex flex-col justify-center items-center mt-[1rem] h-full px-2">
      {/* ALERT BANNER */}
      <div className="mb-4 w-full text-left text-[#ffa653] font-semibold text-sm max-w-[1000px] py-2 px-6 border-[1.1px] border-[#ffa653] rounded-md">
        <p className="flex gap-3 justify-center items-center">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          We will be launching soon!!!!!!!!
        </p>
      </div>
      <h1 className="heroh font-bold max-w-[1000px] w-full">
        <span className="text-[#7827E6]">Powerful</span> Email Engine for
        Seamless and <span className="text-[#7827E6]"> Reliable</span>{' '}
        Communication
      </h1>
      <p className="max-w-[700px] w-full mt-4">
        A free, secure, and easy-to-use email engine for seamless communication.
        Perfect for businesses and individuals, with a powerful API to ensure
        your emails always reach the inbox, elevating your email experience.
      </p>
      <div className="mt-4 w-full flex gap-4 flex-wrap justify-center items-center text-sm ">
        <Link href={'/accounts/new'}>
          <button className="py-3 px-4 rounded-md text-white bg-[#7827E6] font-semibold duration-300 hover:bg-[#9b5bf5] dark:text-white">
            Get started for free
          </button>
        </Link>
        <button className="py-3 px-4 rounded-md border-[#7827E6] border-[1px] font-semibold duration-300 hover:bg-[#7827E6] hover:text-white dark:text-white">
          Documentation
        </button>
      </div>
      {/* BIG GIF/IMAGE */}
      <div className="heroimg mt-9 w-full rounded-lg flex justify-center items-center ">
        <Image
          src={
            'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/choose-inbox_2.gif'
          }
          alt=""
          width={4192}
          height={1746}
          unoptimized
          className="w-[98%] h-[100%] object-cover rounded-lg"
        />
      </div>
      {/* SEMI-HERO SECTION*/}
      <section className="mt-[3rem] flex flex-col justify-center items-center w-full">
        <h2 className="herod font-semibold w-full max-w-[700px]">
          No Custom Domain? <span className="text-[#7827E6]"> No Problem!</span>
        </h2>
        <p className="max-w-[1000px] w-full mt-4">
          If you do not have a custom domain to integrate with our service, you
          can still set up your email engine using your Gmail account. Simply
          connect your Gmail account to enjoy reliable email delivery and
          management without any hassle. Our platform supports Gmail
          integration, so you can get started right away!
        </p>
        <button className="mt-3 py-3 px-4 rounded-md border-[#7827E6] border-[1px] font-semibold duration-300 hover:bg-[#7827E6] hover:text-white dark:text-white">
          Documentation
        </button>
      </section>
    </section>
  );
};

export default Hero;
