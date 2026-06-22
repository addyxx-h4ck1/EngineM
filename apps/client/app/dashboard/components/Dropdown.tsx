'use client';
import React, { useRef } from 'react';
import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useNotification } from '../context/NotificationContext';
import Cookie from 'js-cookie';
import { fetchDashboardData } from '../lib/fetchData';
import { useQuery } from '@tanstack/react-query';

const Dropdown: React.FC<any> = ({ open, func }) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'], //Array according to Documentation
    enabled: false,
  });

  const { setNotification, clearNotification } = useNotification();
  const dropdownRef = useRef<HTMLSelectElement>(null);

  const logoutFunc = async () => {
    func(false);
    setNotification('loading', 'Logging out');
    setTimeout(() => {
      Cookie.remove('t');
      window.location.href = '/dashboard';
      clearNotification();
    }, 2000);
  };

  return (
    <section
      className={`text-sm max-w-[250px] flex flex-col gap-2 w-full p-2 rounded-md bg-[#182636] absolute top-[70px] right-[10px] pb-3 text-white h-[fit-content] opacity-0 duration-300 ${
        open ? 'opacity-[1]' : ''
      }`}
      ref={dropdownRef}
    >
      {data ? (
        <>
          <div className="flex gap-2 my-2">
            <div className="w-[40px] h-[40px] text-lg rounded-full flex justify-center items-center bg-[royalblue] text-white font-semibold">
              P
            </div>
            <div className="">
              <p className="font-semibold">{data?.data[0]?.userName}</p>
              <p className="text-gray-500 text-xs">{data?.data[0]?.email}</p>
            </div>
          </div>
        </>
      ) : null}
      <Link
        href={'/dashboard/account'}
        className="py-2 px-4 w-full rounded-lg bg-slate-900 duration-200 text-white font-semibold  hover:text-[royalblue] text-center"
        onClick={func}
      >
        <FontAwesomeIcon icon={faUser} /> Account Settings
      </Link>
      <button
        className="py-2 px-4 w-full rounded-lg bg-red-500 duration-200 font-semibold text-white hover:bg-red-400"
        onClick={logoutFunc}
      >
        <FontAwesomeIcon icon={faPowerOff} /> Logout
      </button>
    </section>
  );
};

export default Dropdown;
