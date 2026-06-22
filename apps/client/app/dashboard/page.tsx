'use client';
import React from 'react';
import {
  faAt,
  faBarChart,
  faBug,
  faCircle,
  faDotCircle,
  faEnvelopeCircleCheck,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Activity from './components/Activity';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import SkeletonLoader from './components/SkeletonLoader';
import queryClient from '../lib/query-client';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import { fetchDashboardData } from './lib/fetchData';
import img from '@/public/29.png';

const Page = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'], //Array according to Documentation
  });

  //calculations
  let sentParcentage = data
    ? (Number(data?.data[0]?.successSent) / Number(data?.data[0]?.mailSent)) *
      100
    : 0;

  let failedParcentage = data
    ? (Number(data?.data[0]?.failedToBeSent) /
        Number(data?.data[0]?.mailSent)) *
      100
    : 0;

  console.log(sentParcentage);
  console.log(failedParcentage);

  //total emails sent bu gmail
  const totalEmailsSentByGmail = (
    data ? data?.data[0]?.GmailAccounts : []
  ).reduce((total: number, account: any) => {
    return total + (account.emailSent || 0);
  }, 0);

  return (
    <>
      <div className="top-welcome w-full flex justify-between items-center flex-wrap gap-3">
        <div className="w-full max-w-[300px]">
          <h1 className="font-semibold text-lg text-nowrap">
            Welcome To Dashboard
          </h1>
          <p className="mt-1 text-[#353f4fa4] dark:text-[#ffffff80]">
            Home / Dashboard
          </p>
        </div>
      </div>

      {/* main */}

      {isLoading ? (
        <>
          <SkeletonLoader />
        </>
      ) : (
        <>
          {data?.status !== 200 ? (
            <>
              <section className="w-full text-center flex flex-col justify-center items-center h-[70vh]">
                <div className="text-6xl mb-3">
                  <FontAwesomeIcon icon={faBug} />
                </div>
                <div className="mb-2">
                  <h2 className="text-lg font-semibold">OOPS!!!</h2>
                  <p>Hi, there was an unexpected error please try again</p>
                  <button
                    className="mt-4 w-full max-w-[150px] rounded-lg py-2 px-4 bg-[#9b5bf5] text-white font-semibold duration-300 hover:bg-[#b581ff]"
                    onClick={() => {
                      window.location.href = '/dashboard';
                      queryClient.invalidateQueries();
                    }}
                  >
                    Retry
                  </button>
                </div>
              </section>
            </>
          ) : (
            <>
              <main className="w-full text-sm mt-6 flex gap-4 justify-between flex-wrap mb-6">
                {/* Left===================== */}
                <section className="dashbord-left w-[500px] flex-grow">
                  <div className="dashboard-banner text-white p-4 bg-[#6259CA] rounded-xl flex flex-wrap-reverse">
                    <Image
                      src={img}
                      alt=""
                      width={150}
                      height={150}
                      className="w-[50%] object-cover"
                    />
                    <div>
                      <h1 className="font-semibold text-white text-xl">
                        {/* @ts-ignore */}
                        {data.data[0]?.userName || 'loading..'}
                      </h1>
                      <p className="text-xs">
                        Its good to have you on board, you have used our service
                        to send about{' '}
                        <span className="text-[#ffa970] font-semibold">
                          {data.data[0]?.mailSent || 0}
                        </span>{' '}
                        emails of which{' '}
                        <span className="text-green-400 font-semibold">
                          {sentParcentage.toFixed() + '%'}
                        </span>{' '}
                        were succesfully delivered in the inbox and about{' '}
                        <span className="text-red-500 font-semibold">
                          {failedParcentage.toFixed() + '%'}
                        </span>{' '}
                        failed.{' '}
                      </p>
                    </div>
                  </div>
                  {/* stats */}
                  <article className="statcard-parent mt-3">
                    {/* Total mails sent stat card */}
                    <div className="bg-[#FFFFFF] dark:bg-[#0E0E23] p-4 rounded-lg">
                      <h2 className="font-semibold uppercase">Total Emails</h2>
                      <p className="text-[gray]">Total emails sent</p>
                      <p className="text-2xl font-semibold my-1">
                        {data.data[0]?.mailSent || '00'}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-[gray]">
                          <span className="text-[#ff8c40]">100% </span> Sent
                          emails
                        </p>
                        <FontAwesomeIcon
                          icon={faBarChart}
                          className="text-2xl bg-[#dddcdcc5] dark:bg-[#171634] p-3 rounded-full text-[#ff8c40]"
                        />
                      </div>
                    </div>
                    {/* Total mails sent stat card */}
                    <div className="bg-[#FFFFFF] dark:bg-[#0E0E23] p-4 rounded-lg">
                      <h2 className="font-semibold uppercase">
                        Emails Delivered
                      </h2>
                      <p className="text-[gray]">Total emails delivered</p>
                      <p className="text-2xl font-semibold my-1">
                        {data.data[0]?.successSent || '00'}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-[gray]">
                          <span className="text-green-500">
                            {sentParcentage.toFixed() + '%'}{' '}
                          </span>{' '}
                          Delivered
                        </p>
                        <FontAwesomeIcon
                          icon={faEnvelopeCircleCheck}
                          className="text-2xl bg-[#dddcdcc5] dark:bg-[#171634] p-3 rounded-full text-green-400"
                        />
                      </div>
                    </div>
                    {/* Total mails sent stat card */}
                    <div className="bg-[#FFFFFF] dark:bg-[#0E0E23] p-4 rounded-lg">
                      <h2 className="font-semibold uppercase">Emails Failed</h2>
                      <p className="text-[gray]">Emails failed</p>
                      <p className="text-2xl font-semibold my-1">
                        {data.data[0]?.failedToBeSent || '00'}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-[gray]">
                          <span className="text-red-500">
                            {failedParcentage.toFixed() + '%'}{' '}
                          </span>{' '}
                          Failed
                        </p>
                        <FontAwesomeIcon
                          icon={faBug}
                          className="text-2xl bg-[#dddcdcc5] dark:bg-[#171634] p-3 rounded-full text-red-400"
                        />
                      </div>
                    </div>
                  </article>
                  {/* InterGrations */}
                  <article className="w-full mt-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
                    <h2 className="font-semibold text-lg mb-1">
                      Intergrations
                    </h2>
                    <p className="text-[gray]">
                      Accounts intergrated with EngineM
                    </p>
                    <section className="intergrations mt-2">
                      <div className="bg-[#eaedf793] dark:bg-[#171634af] p-3 rounded-lg flex-grow">
                        <h2 className="font-semibold">Gmail Accounts</h2>
                        <p className="text-xl font-semibold">
                          {'0' + data?.data[0]?.GmailAccounts?.length}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-[gray]">
                            {(totalEmailsSentByGmail || '00') +
                              ' ' +
                              'Emails sent'}
                          </p>
                          <FontAwesomeIcon
                            icon={faAt}
                            className="text-2xl dark:bg-[#0E0E23] p-2 rounded-full"
                          />
                        </div>
                        <Link
                          href={'/dashboard/gmail-accounts'}
                          className="w-full text-center py-1 px-4 border-[#6259CA] border-[1px] rounded-lg duration-300 hover:bg-[#6259CA] font-semibold hover:text-white"
                        >
                          Manage
                        </Link>
                      </div>
                      <div className="bg-[#eaedf793] dark:bg-[#171634af] p-3 rounded-lg flex-grow">
                        <h2 className="font-semibold">Custom Domains</h2>
                        <p className="text-xl font-semibold">
                          {'0' + data?.data[0]?.customDomains?.length}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="text-[gray]">00 Emails sent</p>
                          <FontAwesomeIcon
                            icon={faServer}
                            className="text-2xl dark:bg-[#0E0E23] p-2 rounded-full"
                          />
                        </div>
                        <Link
                          href={'/dashboard/domains'}
                          className="w-full text-center py-1 px-4 border-[#6259CA] border-[1px] rounded-lg duration-300 hover:bg-[#6259CA] font-semibold hover:text-white"
                        >
                          Manage
                        </Link>
                      </div>
                    </section>
                  </article>
                </section>
                {/* Right======================= */}
                <section className="dashbord-right flex-grow w-[320px]">
                  <div className="dashboard-recent  p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
                    <h2 className="font-semibold text-lg mb-1">
                      Recent Activities
                    </h2>
                    <p className="text-[gray]">
                      Recently sent emails using your account
                    </p>
                    <article className="scrollable-container mt-5 flex flex-col gap-4 text-nowrap overflow-x-hidden pb-4 max-h-[300px]">
                      {data?.data[0]?.activities?.length <= 0 ? (
                        <>
                          <div className="my-3 text-center">
                            <p className="text-gray-500 font-semibold">
                              No Activity recorded yet
                            </p>
                          </div>
                          <div className="mb-3 text-wrap">
                            <p className="text-gray-500 text-xs">
                              <FontAwesomeIcon
                                icon={faExclamationCircle}
                                className="text-blue-700"
                              />{' '}
                              Each activity will be reset after 24 hours. We
                              record activities (API Calls) send with your API
                              key to enable you to check and monitor your emails
                              sent from your app.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {data?.data[0]?.activities
                            .sort(
                              (a: any, b: any) =>
                                new Date(b.reqDate).getTime() -
                                new Date(a.reqDate).getTime()
                            )
                            .map((el: any) => {
                              return <Activity key={el._id} {...el} />;
                            })}
                        </>
                      )}
                    </article>
                    <div className="mt-4 flex justify-center items-center w-full">
                      <Link
                        href={'/dashboard/activities'}
                        className="w-full text-center py-2 px-4 border-[#6259CA] border-[1px] rounded-lg duration-300 hover:bg-[#6259CA] font-semibold hover:text-white"
                      >
                        See All
                      </Link>
                    </div>
                  </div>
                  {/* NEW FEATURES */}
                  <div className="dashboard-recent my-3  p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
                    <h2 className="font-semibold text-lg mb-1">
                      New Features{' '}
                      <span className="p-[.5px] rounded-md font-semibold px-2 bg-green-950 text-white">
                        New
                      </span>
                    </h2>
                    <div className="text-xs mb-2 flex flex-wrap gap-2">
                      <p>
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-green-600"
                        />{' '}
                        Released
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-orange-600"
                        />{' '}
                        Experimental
                      </p>
                    </div>
                    <div className="mt-6 w-full flex flex-col">
                      <Link
                        href={'/dashboard/gmail-accounts'}
                        className="py-3 px-4 mb-2 rounded-lg  bg-[#e9e8e8] dark:bg-[#121230] w-full text-sm duration-300 hover:text-[royalblue]"
                      >
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-green-600 text-xs"
                        />{' '}
                        Gmail Intergration
                      </Link>
                      <Link
                        href={'/dashboard/domains'}
                        className="py-3 px-4 mb-2 rounded-lg  bg-[#e9e8e8] dark:bg-[#121230] w-full text-sm duration-300 hover:text-[royalblue]"
                      >
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-orange-600 text-xs"
                        />{' '}
                        Domain Intergration
                      </Link>
                      <Link
                        href={'/dashboard/errors'}
                        className="py-3 px-4 mb-2 rounded-lg  bg-[#e9e8e8] dark:bg-[#121230] w-full text-sm duration-300 hover:text-[royalblue]"
                      >
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="text-green-600 text-xs"
                        />{' '}
                        API Errors
                      </Link>
                    </div>
                    <div className="my-3 text-wrap">
                      <p className="text-gray-500 text-xs">
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                          className="text-blue-700"
                        />{' '}
                        Explore new features both experimental and released.
                        Please note that not everyone will be given access to
                        experimental features.
                      </p>
                    </div>
                  </div>
                </section>
              </main>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Page;
