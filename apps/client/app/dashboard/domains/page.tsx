'use client';
import React from 'react';
import Accountcard from '../gmail-accounts/components/Accountcard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCancel,
  faExclamationCircle,
  faLock,
  faServer,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { fetchDashboardData } from '../lib/fetchData';
import { useQuery } from '@tanstack/react-query';
import { useNotification } from '../context/NotificationContext';

const Page = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'], //Array according to Documentation
  });

  const { setNotification, clearNotification } = useNotification();

  const checkSubmit = async (e: any) => {
    e.preventDefault();
    setNotification('warning', 'This feature is not available yet');
    setTimeout(() => {
      clearNotification();
    }, 2000);
  };

  return (
    <>
      <div className="w-full max-w-[300px] text-sm">
        <h1 className="font-semibold text-lg text-nowrap">Custom Domain</h1>
        <p className="mt-1 text-[#353f4fa4] dark:text-[#ffffff80]">
          Home / Dashboard / domains
        </p>
      </div>
      <section className="w-full text-sm flex gap-2 flex-wrap mb-5">
        {/*  */}
        <section className="w-[300px] flex-grow">
          <article className="w-full text-sm mt-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] flex-grow">
            <h2 className="font-semibold text-lg mb-1">
              Domain SMTP Intergrations{' '}
            </h2>
            <div className="my-2 rounded-lg bg-green-950 py-2 px-4 font-semibold text-white text-xs">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-blue-700"
              />{' '}
              {'  '}
              we are still experimenting domain intergrations
            </div>
            <p className="text-[gray]">
              Manage your domains SMTP intergrations here
            </p>
            <section className="mt-4 overflow-y-hidden"></section>
          </article>
          {/* Banned a/c */}
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Banned Domains</h2>
            <p className="text-[gray]">
              Domains banned or restricted due to spamming and other violations
              of our{' '}
              <Link href={'/terms'} className="text-blue-500">
                {' '}
                Terms of Service
              </Link>
            </p>
            <div className="mt-4">
              <h2 className="font-semibold text-lg">00 Custom Domains</h2>
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-500"></p>
                <FontAwesomeIcon
                  icon={faCancel}
                  className="text-xl text-red-400"
                />
              </div>
            </div>
          </article>
        </section>
        {/* Add new email */}
        <section className="w-[300px] flex-grow">
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Connect New Account</h2>
            <p className="text-[gray]">
              Use your domains SMPT credentials to Intergrate EngineM with your
              custom domain. Check the{' '}
              <Link href={'/terms'} className="text-blue-500">
                {' '}
                Documentation
              </Link>{' '}
              on how to connect your domain with our service.
            </p>
            <div className="w-full mt-4">
              <form className="w-full" onSubmit={(e) => checkSubmit(e)}>
                {/* INPUT */}
                <div className="w-full flex justify-between items-center flex-wrap gap-2 mb-4">
                  <div className="w-full max-w-[300px] flex gap-2 items-center">
                    <FontAwesomeIcon icon={faServer} />

                    <p>Host / Server</p>
                  </div>
                  <input
                    type="text"
                    className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                    placeholder="e.g mail.yourdomain.com"
                  />
                </div>
                {/* INPUT */}
                <div className="w-full flex justify-between items-center flex-wrap gap-2 mb-4">
                  <div className="w-full max-w-[300px] flex gap-2 items-center">
                    <FontAwesomeIcon icon={faUser} />

                    <p>Username / email</p>
                  </div>
                  <input
                    type="text"
                    className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                    placeholder="e.g contact@yourdomain.com"
                  />
                </div>
                {/* INPUT */}
                <div className="w-full flex justify-between items-center flex-wrap gap-2 mb-4">
                  <div className="w-full max-w-[300px] flex gap-2 items-center">
                    <FontAwesomeIcon icon={faLock} />

                    <p>Password</p>
                  </div>
                  <input
                    type="text"
                    className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                    placeholder="password"
                  />
                </div>
                {/* DISCLAIMER */}
                <div className="my-4 pl-3">
                  <p className="text-gray-500 text-xs">
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="text-blue-600"
                    />{' '}
                    By clicking connect you allow us the permission to send an
                    email to test if the credentials are correct, you also give
                    us the permission to securely store these credentials for
                    you.
                  </p>
                </div>
                {/* Connect btn */}
                <div className="w-full mt-4">
                  <button className="w-full py-3 px-6 rounded-lg bg-[royalblue] duration-300 font-semibold hover:bg-[#5680ff] text-white text-center">
                    Connect
                  </button>
                </div>
              </form>
            </div>
          </article>
          {/* Over view */}
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Total Accounts</h2>
            <p className="text-[gray]">
              Total domain SMTP accounts connected and emails sent
            </p>
            <div className="mt-4">
              <h2 className="font-semibold text-lg">00 Custom Domains</h2>
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-500">00 emails sent</p>
                <FontAwesomeIcon icon={faServer} className="text-xl" />
              </div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Page;
