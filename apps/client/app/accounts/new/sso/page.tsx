'use client';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNotification } from '@/app/context/NotiContext';
import {
  faCircleNotch,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useFormStatus } from 'react-dom';
import { AuthReturnTypes } from '../../login/sso/page';
import { useActionState, useEffect } from 'react';
import { ssoSigninAction } from '@/app/(actions)/signin-action';
import { redirect } from 'next/navigation';

const initialState: AuthReturnTypes = {
  success: { message: '' },
  error: { message: '' },
};

const Page = () => {
  const [state, action] = useActionState(
    ssoSigninAction,
    initialState as AuthReturnTypes,
  );
  const { setNotification, clearNotification } = useNotification();

  useEffect(() => {
    if (state?.success?.message) {
      setNotification('success', 'Success.. redirecting');
      setTimeout(() => {
        clearNotification();
        redirect('/accounts/login/sso');
      }, 1000);
    }

    if (state?.error?.message) {
      setNotification(
        'error',
        state?.error?.message || 'Internal Server Error',
      );
      setTimeout(() => {
        clearNotification();
      }, 3000);
    }
  }, [state]);

  return (
    <section className="bg-[#ecebeb] text-sm text-[#353F4F] min-h-screen flex flex-col items-center px-3 dark:text-[#FFFFFF] dark:bg-[#192330]">
      <article className="mt-[6rem] w-[100%] p-5 max-w-[400px] py-4 rounded-lg bg-[#ffffff]  flex flex-col gap-3 dark:bg-[#1F2937] dark:text-[#FFFFFF]">
        <h1 className="text-lg w-[100%] max-w-[300px]">Create an Account</h1>
        {/* FORM */}
        <form
          action={action}
          className="flex w-[100%] flex-col "
        >
          <article className=" w-full grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3.5">
            {/* username input */}
            <div className="mb-3 flex flex-col gap-1">
              <label
                htmlFor="username"
                className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-xs"
              >
                Username
              </label>
              <input
                type="text"
                id="newUsername"
                name="userName"
                autoComplete="off"
                placeholder="create username"
                className="outline-none border dark:border-[#ffffff18] focus:border-[#5680FF] p-2  dark:focus:border-[#5680FF]  rounded-md text-xs bg-transparent"
              />
            </div>
            {/* email input */}
            <div className="mb-3 flex flex-col gap-1">
              <label
                htmlFor="email"
                className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-xs"
              >
                Email
              </label>
              <input
                type="email"
                id="newEmail"
                name="email"
                placeholder="example@gmail.com"
                className="outline-none border dark:border-[#ffffff18] focus:border-[#5680FF] p-2  dark:focus:border-[#5680FF]  rounded-md text-xs bg-transparent"
              />
            </div>
            {/* new password input */}
            <div className="mb-3 flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-xs"
              >
                Create password
              </label>
              <input
                type="password"
                id="newPassword"
                name="password"
                placeholder="password"
                className="outline-none border dark:border-[#ffffff18] focus:border-[#5680FF] p-2  dark:focus:border-[#5680FF]  rounded-md text-xs bg-transparent"
              />
            </div>
            {/* confirm password input */}
            <div className="mb-3 flex flex-col gap-1">
              <label
                htmlFor="password"
                className="font-semibold text-[#1b1b1ba6] dark:text-[#797878] text-xs"
              >
                Confirm password
              </label>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPasswod"
                autoComplete="off"
                placeholder="password"
                className="outline-none border dark:border-[#ffffff18] focus:border-[#5680FF] p-2  dark:focus:border-[#5680FF]  rounded-md text-xs bg-transparent"
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
          </article>
          <SubmitButton />
          {/* Terms */}
          <div className="flex gap-2 text-xs my-3">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-blue-700"
            />
            <p>
              By clicking sign up you, you 100% agree to our{' '}
              <Link
                href={'/terms'}
                className="text-blue-500 underline"
              >
                Terms of Service.
              </Link>{' '}
              If you do not please do not use our service
            </p>
          </div>
          {/* submit btn */}
        </form>
      </article>
    </section>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <div className="">
      <button
        className={`text-[white] font-semibold outline-0 rounded-md py-3 px-4 w-full hover:bg-[#688cf8] duration-300 ${pending ? 'bg-[#688cf8]' : 'bg-[royalblue]'}`}
      >
        {pending ? (
          <div className="text-xs tracking-widest flex justify-center items-center gap-2">
            <p>
              <FontAwesomeIcon
                icon={faCircleNotch}
                className="fa-spin"
              />
            </p>
            <p>please wait..</p>
          </div>
        ) : (
          <>
            <p>Sign in</p>
          </>
        )}
      </button>
    </div>
  );
}

export default Page;
