'use client';
import Logo from '../../components/logo';
import { useRef, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNotification } from '@/app/context/NotiContext';
import nookies from 'nookies';

const Page = () => {
  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  //
  const submitForm = async (e: any) => {
    e.preventDefault();
    if (!emailRef.current?.value.trim()) {
      setNotification('error', 'Email field cannot be empty');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }
    if (!passwordRef.current?.value.trim()) {
      setNotification('error', 'Password field cannot be empty');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }
    //
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    try {
      setNotification('loading', 'Please wait');
      setInProgress(true);
      const req: AxiosResponse = await axios.post(
        process.env.NEXT_PUBLIC_LOGIN_URL as string,
        formData
      );
      setNotification('success', 'Login successful');
      nookies.set(null, 't', req.data.t, {
        maxAge: 24 * 60 * 60, // 1 day in seconds
        path: '/',
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'Lax', // Or 'Strict' based on your needs
      });
      setTimeout(() => {
        clearNotification();
        setInProgress(false);
        window.location.href = '/dashboard';
      }, 2000);
    } catch (error: any) {
      clearNotification();
      setNotification(
        'error',
        error.response.data.err || 'Internal server error'
      );
      setInProgress(false);
      setTimeout(() => {
        clearNotification();
      }, 2000);
    }
  };
  return (
    <section className="bg-[#ecebeb] text-sm text-[#353F4F] min-h-screen flex flex-col items-center px-1 dark:text-[#FFFFFF] dark:bg-[#192330]">
      <article className="mt-[6rem] w-[100%] p-3 max-w-[400px] py-4 rounded-lg bg-[#ffffff]  flex flex-col gap-3 dark:bg-[#1f2b3a] dark:text-[#FFFFFF]">
        <Logo />
        <h1 className="text-lg w-[100%] max-w-[300px]">Login</h1>
        {/* FORM */}
        <form
          className="flex w-[100%] flex-col "
          onSubmit={(e) => submitForm(e)}
        >
          {/* email input */}
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-semibold text-[#1b1b1ba1] dark:text-[#818181cc]"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              ref={emailRef}
              placeholder="example@gmail.com"
              className="outline-0 border-[1.5px] border-[gray] rounded-md py-2 px-4 w-full bg-transparent "
            />
          </div>
          {/* new password input */}
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-semibold text-[#1b1b1ba1] dark:text-[#818181cc]"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              ref={passwordRef}
              placeholder="password"
              className="outline-0 border-[1.5px] border-[gray] rounded-md py-2 px-4 w-full bg-transparent "
            />
          </div>
          {/* submit btn */}
          <div className="mb-3">
            <button
              type={inProgress ? 'button' : 'submit'}
              className={`text-[white] font-semibold outline-0 bg-[royalblue] rounded-md py-3 px-4 w-full hover:bg-[#688cf8] duration-300 ${
                inProgress ? 'cursor-wait' : ''
              }`}
            >
              sign in
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Page;
