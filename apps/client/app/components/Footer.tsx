import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/app/android-chrome-192x192.png';
const Footer = () => {
  return (
    <footer className="footer text-sm text-white mt-[4rem] p-6 box-border flex flex-col justify-center items-center bg-[#192330] dark:bg-[#111924]">
      <section className="footer-wrapper w-full max-w-[1200px]">
        {/* LOGO */}
        <div className="footer-logo">
          <Image
            src={logo}
            unoptimized
            alt="EngineM"
            className="w-[60px] h-[35px] object-cover rounded-lg bg-none mb-1"
          />
          <h1 className="text-2xl font-semibold font-serif">
            Engine<span className="text-[#7827E6]">M</span>
          </h1>
        </div>
        {/* COMPANY */}
        <div className="">
          <h6 className="font-semibold text-[17px] text-[#3c78c7] ">Company</h6>
          <div className="mt-2 flex flex-col gap-2">
            <Link href={'/'} className="hover:text-[#9b5bf5] duration-300 ">
              Home
            </Link>
            <Link
              href={'/accounts/new'}
              className="hover:text-[#9b5bf5] duration-300"
            >
              Get Started
            </Link>
            <p>About Us</p>
          </div>
        </div>
        {/* COMPANY */}
        <div className="">
          <h6 className="font-semibold text-[17px] text-[#3c78c7] ">
            API Reference
          </h6>
          <div className="mt-2 flex flex-col gap-2">
            <p>Start Guides</p>
            <p>Gmail</p>
          </div>
        </div>
        {/* COMPANY */}
        <div className="">
          <h6 className="font-semibold text-[17px] text-[#3c78c7] ">
            Reference
          </h6>
          <div className="mt-2 flex flex-col gap-2">
            <p>Documentation</p>
            <Link
              href={'/help-center'}
              className="hover:text-[#9b5bf5] duration-300"
            >
              Help Center
            </Link>
            <Link href={'/terms'} className="hover:text-[#9b5bf5] duration-300">
              Terms of Service
            </Link>
            <Link
              href={'/help-center/FAQs'}
              className="hover:text-[#9b5bf5] duration-300"
            >
              FAQs
            </Link>
          </div>
        </div>
      </section>
      <p className="text-center mt-6 text-xs text-[#808080be]">
        &copy; {new Date().getFullYear()}. Product of Pixelrart
      </p>
    </footer>
  );
};

export default Footer;
