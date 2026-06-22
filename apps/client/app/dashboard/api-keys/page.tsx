'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faKey } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import Keycard from './components/Keycard';
import { fetchDashboardData } from '../lib/fetchData';
import { useNotification } from '../context/NotificationContext';
import axios, { AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

const Page = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'],
    enabled: true, //Array according to Documentation
  });
  const [inProgress, setInProgress] = useState<boolean>(true);
  const { setNotification, clearNotification } = useNotification();

  const regenerateKey = async () => {
    try {
      setInProgress(true);
      setNotification('loading', 'Please wait...');
      const req: AxiosResponse = await axios.patch(
        process.env.NEXT_PUBLIC_KEYS_ENDPOINT as string,
        {},
        { headers: { Authorization: `Bearer ${Cookie.get('t')}` } }
      );
      setNotification('success', 'New key genenrated');
      setInProgress(false);
      refetch();
      setTimeout(() => {
        clearNotification();
      }, 2000);
    } catch (error: any) {
      setNotification('error', 'Please try again');
      setInProgress(false);
      setTimeout(() => {
        clearNotification();
      }, 2000);
    }
  };
  const deleteKey = async () => {
    try {
      setInProgress(true);
      setNotification('loading', 'Please wait...');
      const req: AxiosResponse = await axios.delete(
        process.env.NEXT_PUBLIC_KEYS_ENDPOINT as string,
        { headers: { Authorization: `Bearer ${Cookie.get('t')}` } }
      );
      setNotification('success', 'API key terminated');
      setInProgress(false);
      refetch();
      setTimeout(() => {
        clearNotification();
      }, 2000);
    } catch (error: any) {
      setNotification('error', 'Please try again');
      setInProgress(false);
      setTimeout(() => {
        clearNotification();
      }, 2000);
    }
  };

  return (
    <>
      <div className="w-full max-w-[300px] text-sm">
        <h1 className="font-semibold text-lg text-nowrap">API Keys</h1>
        <p className="mt-1 text-[#353f4fa4] dark:text-[#ffffff80]">
          Home / Dashboard / api-keys
        </p>
      </div>
      <section className="w-full text-sm flex gap-2 flex-wrap mb-5">
        {/*  */}
        <section className="w-[300px] flex-grow">
          <article className=" text-sm mt-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
            <h2 className="font-semibold text-lg mb-1">Your API keys</h2>
            <p className="text-[gray]">
              Manage your API keys from here. Do not share or make your keys
              public, someone might use them to access your account maliciously.
              Check the{' '}
              <Link href={''} className="text-blue-500">
                Docs
              </Link>{' '}
              for more info.
            </p>
            <section className="mt-4 overflow-y-hidden">
              {data ? (
                <>
                  {data?.data[0]?.key !== '' ? (
                    <Keycard value={data?.data[0].key} func={deleteKey} />
                  ) : (
                    <>
                      <div className="my-3 text-center text-gray-500">
                        <p className="font-semibold">
                          You do not have any active API key{' '}
                        </p>
                      </div>
                      <p className="text-xs my-4 text-gray-500">
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                          className="text-blue-600"
                        />{' '}
                        Please Re-generate a new API Key
                      </p>
                    </>
                  )}
                </>
              ) : null}
            </section>
          </article>
        </section>
        {/* Add new email */}
        <section className="w-[300px] flex-grow">
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1">Generate a New Key</h2>
            <p className="text-[gray]">
              Generate a new API Key and start using it right away in your
              applications.
            </p>

            <button
              className={`mt-6 w-full rounded-2xl text-[#1b1b1b] flex justify-center items-center gap-3 py-2 px-6 border-[#cac8c8] border-[1.5px] cursor-pointer hover:text-[royalblue] hover:border-[royalblue] duration-300 dark:text-[#FFFFFF] ${
                inProgress ? 'cursor-wait' : 'cursor-pointer'
              }`}
              onClick={regenerateKey}
              type={inProgress ? 'reset' : 'button'}
            >
              <FontAwesomeIcon icon={faKey} className="fa-solid text-xl" />

              <p>Regenerate API Key</p>
            </button>
            <p className="text-xs my-4 text-gray-500">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-blue-600"
              />{' '}
              Do not share or expose your keys to the public because during API
              calls the key is used to authorize the request and can be used to
              access your information.
            </p>
          </article>
          {/* Over view */}
          <article className="w-full text-sm mt-4 py-6 px-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23] ">
            <h2 className="font-semibold text-lg mb-1"> API Keys Overview</h2>
            <p className="text-[gray]">Overview of your API Keys.</p>
            <div className="mt-4">
              <h2 className="font-semibold text-lg">
                {data?.data[0].key !== '' ? '01 ' : '00'} API keys
              </h2>
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-500">All keys are active</p>
                <FontAwesomeIcon icon={faKey} className="text-xl" />
              </div>
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Page;
