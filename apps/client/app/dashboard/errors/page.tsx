'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faCancel,
  faExclamationCircle,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import Error from '../components/Error';
import { fetchDashboardData } from '../lib/fetchData';

const Page = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'],
    enabled: true, //Array according to Documentation
  });
  //console.log(data);

  //total emails sent bu gmail

  const totalEmailsSentByGmail = data?.data[0]?.GmailAccounts.reduce(
    (total: number, account: any) => {
      return total + (account.emailSent || 0);
    },
    0
  );

  return (
    <>
      <div className="w-full max-w-[300px] text-sm">
        <h1 className="font-semibold text-lg text-nowrap">Error Center</h1>
        <p className="mt-1 text-[#353f4fa4] dark:text-[#ffffff80]">
          Home / Dashboard / errors
        </p>
      </div>
      <section className="w-full text-sm flex gap-2 flex-wrap mb-5">
        {/*  */}
        <section className="w-[300px] flex-grow">
          <article className="w-full text-sm mt-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] flex-grow">
            <h2 className="font-semibold text-lg mb-1">Account Errors</h2>
            <p className="text-[gray]">
              Track your API errors and fix your application. We ony keep these
              the records per day, after 24 hours these records are reset{' '}
            </p>
            <section className="scrollable-container mt-4 flex flex-col gap-3 text-nowrap overflow-y-hidden pb-4">
              {data?.data[0]?.activities?.length <= 0 ? (
                <>
                  <div className="my-4">
                    <p className="text-center font-semibold text-gray-500">
                      No Activities recorded yet
                    </p>
                  </div>
                  <div className="mb-1 text-wrap">
                    <p className="text-gray-500 text-xs">
                      <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="text-blue-700"
                      />{' '}
                      Each activity will be reset after 24 hours. We record
                      activities (API Calls) send with your API key to enable
                      you to check and monitor your emails sent from your app.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {data?.data[0]?.activities
                    .filter((el: any) => el.sucess == false)
                    .map((el: any) => {
                      return <Error key={el._id} {...el} />;
                    })}
                </>
              )}
            </section>
          </article>
          {/* Banned a/c */}
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Banned Domains</h2>
            <div className="my-2 rounded-lg bg-green-950 py-2 px-4 font-semibold text-white text-xs">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-blue-700"
              />{' '}
              {'  '}
              we are still experimenting domain intergrations
            </div>
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
          {/* Over view */}
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Custom Domains</h2>
            <div className="my-2 rounded-lg bg-green-950 py-2 px-4 font-semibold text-white text-xs">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-blue-700"
              />{' '}
              {'  '}
              we are still experimenting domain intergrations
            </div>
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
          {/* Gmail */}
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Gmail Accounts</h2>
            <p className="text-[gray]">
              Gmail accounts intergrated with EngineM
            </p>
            <div className="mt-4">
              <h2 className="font-semibold text-lg">
                {'0' + data?.data[0]?.GmailAccounts?.length} Gmail Accounts
              </h2>
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-500">
                  {totalEmailsSentByGmail || '00'} emails sent
                </p>
                <FontAwesomeIcon icon={faAt} className="text-xl" />
              </div>
            </div>
          </article>
          {/* =============== */}
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
            <div className="w-full mt-4"></div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Page;
