'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import logo from '@/app/android-chrome-192x192.png';
import Image from 'next/image';

const Navbar = () => {
  const [showSideBar, setShowSidebar] = useState<boolean>(false);

  const showSideBarMenu = (): void => {
    setShowSidebar(!showSideBar);
  };

  const CloseSideBar = (): void => {
    setTimeout(() => {
      setShowSidebar(false);
    }, 1000);
  };

  return (
    <section className="navbar sticky top-0 z-50 bg-[#fff1e6] dark:bg-[#192330] sm:text-sm text-[#353F4F] w-full  flex justify-around items-center  dark:text-white">
      <div className="logo">
        <Link href={'/'}>
          <Image
            src={logo}
            unoptimized
            alt="EngineM"
            className="w-[60px] h-[35px] object-cover rounded-lg bg-none"
          />
          {/* <h1 className="text-2xl font-semibold font-serif">
            Engine<span className="text-[#7827E6]">M</span>
          </h1> */}
        </Link>
      </div>
      <article className="navlinks cursor-pointer flex justify-center items-center gap-6">
        <Link
          href={'/'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
        >
          Home
        </Link>
        <p className="hover:text-[#9b5bf5] duration-300 font-semibold">
          Features
        </p>
        <p className="hover:text-[#9b5bf5] duration-300 font-semibold">
          Documentation
        </p>
        <Link
          href={'/help-center/FAQs'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
        >
          FAQs
        </Link>

        <Link
          href={'/help-center'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
        >
          Help Center
        </Link>
        <Link
          href={'/accounts/login'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
        >
          Sign in
        </Link>
        <Link href={'/accounts/new'}>
          <button className="py-2 px-6 rounded-md text-white bg-[#7827E6] font-semibold duration-300 hover:bg-[#9b5bf5] dark:text-white">
            Sign up
          </button>
        </Link>
      </article>
      <div className="">
        <ThemeToggle classComp="themebtn"></ThemeToggle>
        <button className="hambager" onClick={showSideBarMenu}>
          {showSideBar ? (
            <>
              {' '}
              <FontAwesomeIcon icon={faX} />
            </>
          ) : (
            <>
              {' '}
              <FontAwesomeIcon icon={faBars} />
            </>
          )}
        </button>
      </div>
      {showSideBar ? (
        <>
          <Sidebar func={CloseSideBar} />
        </>
      ) : null}
    </section>
  );
};

export default Navbar;
