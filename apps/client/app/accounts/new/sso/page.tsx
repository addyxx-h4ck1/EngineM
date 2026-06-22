'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import Logo from '../../components/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNotification } from '@/app/context/NotiContext';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const conPasswordRef = useRef<HTMLInputElement>(null);

  // submit func
  const submitForm = async (e: any) => {
    e.preventDefault();
    if (!usernameRef.current?.value.trim()) {
      setNotification('error', 'Username field cannot be empty');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }
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
    if (
      passwordRef.current?.value.trim() !== conPasswordRef.current?.value.trim()
    ) {
      setNotification('warning', 'Passwords did not match');
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
        process.env.NEXT_PUBLIC_NEW_USER_URL as string,
        formData
      );

      setNotification('success', 'Account created succesfully');

      setTimeout(() => {
        clearNotification();
        setInProgress(false);
        window.location.href = '/accounts/login/sso';
      }, 2000);
    } catch (error: any) {
      console.log(error);

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
      <article className="mt-[6rem] w-[100%] p-3 max-w-[400px] py-4 rounded-lg bg-[#ffffff]  flex flex-col gap-3 dark:bg-[#1F2937] dark:text-[#FFFFFF]">
        <Logo />
        <h1 className="text-lg w-[100%] max-w-[300px]">Create an Account</h1>
        {/* FORM */}
        <form className="flex w-[100%] flex-col " onSubmit={submitForm}>
          {/* username input */}
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="username"
              className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-sm"
            >
              Username
            </label>
            <input
              type="text"
              id="newUsername"
              name="userName"
              autoComplete="off"
              ref={usernameRef}
              placeholder="create username"
              className="outline-0 border-[1.5px] border-[gray] rounded-md py-2 px-4 w-full bg-transparent "
            />
          </div>
          {/* email input */}
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="newEmail"
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
              className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-sm"
            >
              Create password
            </label>
            <input
              type="password"
              id="newPassword"
              name="password"
              ref={passwordRef}
              placeholder="password"
              className="outline-0 border-[1.5px] border-[gray] rounded-md py-2 px-4 w-full bg-transparent "
            />
          </div>
          {/* confirm password input */}
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-sm"
            >
              Confirm password
            </label>
            <input
              type="text"
              id="confirmPassword"
              name="confirmPasswod"
              ref={conPasswordRef}
              autoComplete="off"
              placeholder="password"
              className="outline-0 border-[1.5px] border-[gray] rounded-md py-2 px-4 w-full bg-transparent "
            />
          </div>
          {/* method hidden input password input */}
          <div className="">
            <input
              type="text"
              id="method"
              name="method"
              value={'sso'}
              readOnly
              hidden
              placeholder=""
              className=""
            />
          </div>
          {/* Terms */}
          <div className="flex gap-2 text-xs my-3">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-blue-700"
            />
            <p>
              By clicking sign up you, you 100% agree to our{' '}
              <Link href={'/terms'} className="text-blue-500 underline">
                Terms of Service.
              </Link>{' '}
              If you do not please do not use our service
            </p>
          </div>
          {/* submit btn */}
          <div className="mb-3">
            <button
              type={inProgress ? 'button' : 'submit'}
              className={`text-[white] font-semibold outline-0 bg-[royalblue] rounded-md py-3 px-4 w-full hover:bg-[#688cf8] duration-300 ${
                inProgress ? 'cursor-wait' : ''
              }`}
            >
              sign up
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Page;
