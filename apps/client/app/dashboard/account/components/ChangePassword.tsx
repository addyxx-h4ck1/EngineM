'use client';
import { faEye, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '../../lib/fetchData';
import { useNotification } from '../../context/NotificationContext';
import axios, { AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

const ChangePassword = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'],
    enabled: true, //Array according to Documentation
  });

  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(false);

  let password = useRef<HTMLInputElement>(null);
  let conPassword = useRef<HTMLInputElement>(null);

  const changePwd = async (e: any) => {
    e.preventDefault();
    if (!password.current?.value || !conPassword.current?.value) {
      setNotification('error', 'Please fill out all fields');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    try {
      setNotification('loading', 'Please wait...');
      const req: AxiosResponse = await axios.post(
        process.env.NEXT_PUBLIC_DASHBOARD_CHANGE_PWD_URL as string,
        formData,
        { headers: { Authorization: `Bearer ${Cookie.get('t')}` } }
      );
      setNotification('success', 'Password was changed');
      refetch();
      conPassword.current.value = '';
      password.current.value = '';
      setTimeout(() => {
        clearNotification();
      }, 2000);
    } catch (error: any) {
      console.log(error);
      setNotification(
        'error',
        error?.response?.data?.err || 'There was an error'
      );
      setTimeout(() => {
        clearNotification();
      }, 2000);
    }
  };

  return (
    <>
      {/*  */}
      <h2 className="Passwords mt-6 font-semibold border-t-[2px] border-slate-500 pt-3">
        Change Password{' '}
      </h2>
      <p className="text-slate-500 my-2">Change your password from here</p>
      <form className="w-full my-6" onSubmit={(e) => changePwd(e)}>
        <div className="w-full flex justify-between items-center flex-wrap gap-3 my-4">
          <div className="w-full max-w-[300px] flex gap-2 items-center">
            <FontAwesomeIcon icon={faLock} />
            <p className="font-semibold">New password</p>
          </div>
          <input
            type="password"
            name="password"
            ref={password}
            className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
            placeholder="create a password"
          />
        </div>
        <div className="w-full flex justify-between items-center flex-wrap gap-3 my-4">
          <div className="w-full max-w-[300px] flex gap-2 items-center">
            <FontAwesomeIcon icon={faEye} />
            <p className="font-semibold">Confirm password</p>
          </div>

          <input
            type="text"
            name="confirmPassword"
            ref={conPassword}
            autoComplete="off"
            className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
            placeholder="confirm password"
          />
        </div>
        {/* submit */}
        <div className="mt-4 text-sm">
          <button className="py-2 px-6 rounded-lg bg-[royalblue] duration-300 font-semibold hover:bg-[#5680ff] text-white text-center">
            change password
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
