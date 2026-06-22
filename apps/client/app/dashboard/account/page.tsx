'use client';
import {
  faAt,
  faEnvelopeCircleCheck,
  faIdBadge,
  faLock,
  faMoon,
  faServer,
  faSun,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '../lib/fetchData';
import { useNotification } from '../context/NotificationContext';
import ThemeContext from '@/app/context/ThemeContext';
import Link from 'next/link';
import ChangePassword from './components/ChangePassword';
import CreatePassword from './components/CreatePassword';
import DeleteAccount from './components/DeleteAccount';

const Page = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'],
    enabled: true, //Array according to Documentation
  });

  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(false);

  return (
    <>
      <div className="w-full max-w-[300px] gap-2 items-center text-sm">
        <h1 className="font-semibold text-2xl text-nowrap">Account</h1>
        <p className="mt-1 text-[#353f4fa4] dark:text-[#ffffff80]">
          Home / Dashboard / Account
        </p>
      </div>
      <article className="w-full text-sm mt-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h2 className="font-semibold text-lg mb-1">Account Info</h2>
          <h2 className="text-green-500"> Verified</h2>
        </div>
        <p className="text-[gray]">Here you can edit or delete your account</p>
        <section className="mt-3 w-full">
          <form action="" className="w-full flex flex-col gap-4">
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faUser} />
                <p>A/C Username</p>
              </div>
              <input
                type="text"
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                placeholder={data?.data[0]?.userName || 'loading ...'}
              />
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faIdBadge} />
                <p>A/C ID</p>
              </div>
              <input
                type="text"
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                value={data?.data[0]?._id || 'loading ...'}
                readOnly
              />
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelopeSquare} />
                <p>A/C Email</p>
              </div>
              <input
                type="text"
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                placeholder={data?.data[0]?.email || 'loading ...'}
                readOnly
              />
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} />
                <p>Emails Sent</p>
              </div>
              <input
                type="text"
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                placeholder={`${data?.data[0]?.mailSent || 0} emails`}
                readOnly
              />
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faServer} />
                <p>Custom Domains</p>
              </div>
              <input
                type="text"
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                placeholder={
                  data?.data[0]?.customDomains.length + ' ' + 'Domains' ||
                  'loading ...'
                }
                readOnly
              />
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faAt} />
                <p>Gmail Accounts</p>
              </div>
              <input
                type="text"
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                placeholder={
                  data?.data[0]?.GmailAccounts.length + ' ' + 'Intergrations' ||
                  'loading ...'
                }
                readOnly
              />
            </div>
          </form>
        </section>
      </article>
      {/* Theme settings */}
      <article className="w-full text-sm my-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h2 className="font-semibold text-lg mb-1">Theme</h2>
        </div>
        <p className="text-[gray]">
          We provide two themes light mode and dark mode
        </p>
        <div className="w-full flex justify-between items-center flex-wrap gap-3 my-4">
          <div className="w-full max-w-[300px]">
            <p className="font-semibold">Theme preference</p>
            <p className="text-[gray]">
              Choose the theme that works best for you.
            </p>
          </div>
          <button
            onClick={() => {
              toggleTheme();
            }}
            className={`bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0 hover:bg-[#9b5bf5] hover:border-[#9b5bf5] hover:text-white duration-300 font-semibold`}
          >
            {theme === 'light' ? (
              <>
                Dark mode <FontAwesomeIcon icon={faMoon} />
              </>
            ) : (
              <>
                Light mode <FontAwesomeIcon icon={faSun} />
              </>
            )}
          </button>
        </div>
      </article>
      {/* API KEY */}
      <article className="w-full text-sm my-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h2 className="font-semibold text-lg mb-1">API Key</h2>
        </div>
        <p className="text-[gray]">
          This API key MUST be private, it is used to authenticate and authorize
          requests trying to access your information. Do not share it with
          anyone. This key can be deleted or regenerated incase of breaches in
          your apps. Manage API key{' '}
          <Link href={'/dashboard/api-keys'} className="text-blue-700">
            here
          </Link>
        </p>
        <div className="w-full flex justify-between items-center flex-wrap gap-3 my-4">
          <div className="w-full max-w-[300px]">
            <p className="font-semibold">Keys</p>
          </div>

          <Link
            href={'/dashboard/api-keys'}
            className={`text-center bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0 hover:bg-[#9b5bf5] hover:border-[#9b5bf5] hover:text-white duration-300 font-semibold`}
          >
            Manage
          </Link>
        </div>
      </article>
      {/* SECURITY */}
      <article className="w-full text-sm my-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h2 className="font-semibold text-lg mb-1">
            Account Security <FontAwesomeIcon icon={faLock} />
          </h2>
        </div>
        <p className="text-[gray]">
          Account security details. You can create a password for SSO login if
          you used google or github to create your account
        </p>
        {/*  */}
        <div className="w-full flex justify-between items-center flex-wrap gap-3 my-4">
          <div className="w-full max-w-[300px]">
            <p className="font-semibold">Auth By</p>
          </div>

          <input
            type="text"
            className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
            placeholder={data?.data[0]?.authby || 'loading ...'}
            readOnly
          />
        </div>
        {/* Create password */}
        <CreatePassword />

        {/* Change password */}
        <ChangePassword />
      </article>
      {/* delete account */}
      <DeleteAccount />
    </>
  );
};

export default Page;
