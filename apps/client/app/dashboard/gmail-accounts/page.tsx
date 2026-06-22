'use client';
import React, { useState } from 'react';
import Accountcard from './components/Accountcard';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelopeCircleCheck,
  faExclamationCircle,
  faTasksAlt,
} from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosResponse } from 'axios';
import { useNotification } from '../context/NotificationContext';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '../lib/fetchData';
import Link from 'next/link';

const Page = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'],
    enabled: true, //Array according to Documentation
  });

  // console.log(data);

  //total emails sent bu gmail
  const totalEmailsSentByGmail = data?.data[0]?.GmailAccounts.reduce(
    (total: number, account: any) => {
      return total + (account.emailSent || 0);
    },
    0
  );

  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(false);

  const requestRedirect = async () => {
    try {
      setNotification('loading', 'please wait..');
      setInProgress(true);
      const req: AxiosResponse = await axios.get(
        process.env.NEXT_PUBLIC_REGISTER_GMAIL_URL as string
      );
      window.location.href = req.data;
      setTimeout(() => {
        clearNotification();
        setInProgress(false);
      }, 2000);
    } catch (error: any) {
      setInProgress(false);
      setNotification('error', 'There was an error, try again');
      setTimeout(() => {
        clearNotification();
      }, 2000);
    }
  };

  return (
    <>
      <div className="w-full max-w-[300px] text-sm">
        <h1 className="font-semibold text-lg text-nowrap">Gmail Accounts</h1>
        <p className="mt-1 text-[#353f4fa4] dark:text-[#ffffff80]">
          Home / Dashboard / gmail-accounts
        </p>
      </div>
      <section className="w-full text-sm flex gap-2 flex-wrap mb-5">
        {/*  */}
        <section className="w-[300px] flex-grow">
          <article className="text-sm mt-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
            <h2 className="font-semibold text-lg mb-1">Gmail Intergrations</h2>
            <p className="text-[gray]">Manage your gmail intergrations here</p>
            <section className="mt-4 overflow-y-hidden">
              {data?.data[0]?.GmailAccounts.length <= 0 ? (
                <>
                  <div className="my-3 text-gray-500 text-sm font-semibold text-center">
                    <p>0 Gmails Accounts intergrated</p>
                  </div>
                  <div className="text-xs text-gray-500 my-4">
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="text-blue-700"
                    />{' '}
                    Please note that you can only intergrate upto 3 gmail
                    accounts with our service. We do not read, change or share
                    your emails we only provide and allow you to use our service
                    to send emails from your app.
                  </div>
                </>
              ) : (
                <>
                  {data?.data[0]?.GmailAccounts.map((acc: any) => {
                    return (
                      <React.Fragment key={acc?.usermail}>
                        <Accountcard acc={acc} />
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            </section>
          </article>
        </section>
        {/* Add new email */}
        <section className="w-[300px] flex-grow">
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Connect New Account</h2>
            <p className="text-[gray]">Intergrate a new account</p>
            <button
              className={`mt-6 w-full rounded-2xl text-[#1b1b1b] flex justify-center items-center gap-3 py-2 px-6 border-[#cac8c8] border-[1.5px] cursor-pointer hover:text-[royalblue] hover:border-[royalblue] duration-300 dark:text-[#FFFFFF] ${
                inProgress ? 'cursor-wait' : ''
              }`}
              onClick={requestRedirect}
            >
              <Image
                src={'https://www.svgrepo.com/show/475656/google-color.svg'}
                alt=""
                width={20}
                height={20}
                className="object-cover block"
              />

              <p>Connect with google</p>
            </button>
            <Link href={'/dashboard/test-intergration'} className="w-full">
              <button
                className={`mt-6 w-full rounded-2xl text-[#1b1b1b] flex justify-center items-center gap-3 py-2 px-6 border-[#cac8c8] border-[1.5px] cursor-pointer hover:text-[royalblue] hover:border-[royalblue] duration-300 dark:text-[#FFFFFF] `}
              >
                <FontAwesomeIcon icon={faTasksAlt} />
                <p>Test Intergrations</p>
              </button>
            </Link>
          </article>
          {/* Over view */}
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Total Accounts</h2>
            <p className="text-[gray]">
              Total gmail accounts connected and emails sent
            </p>
            <div className="mt-4">
              <h2 className="font-semibold text-lg">
                {'0' + data?.data[0]?.GmailAccounts.length} Gmail Accounts
              </h2>
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-500">
                  {(totalEmailsSentByGmail || '0') + ' ' + 'Emails sent'}
                </p>
                <FontAwesomeIcon
                  icon={faEnvelopeCircleCheck}
                  className="text-xl"
                />
              </div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Page;
