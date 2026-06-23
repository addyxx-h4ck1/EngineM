'use client';
import { useActionState, useEffect } from 'react';
import { useNotification } from '@/app/context/NotiContext';
import { ssoLoginAction } from '@/app/(actions)/login-action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { useFormStatus } from 'react-dom';
import { redirect } from 'next/navigation';

export interface AuthReturnTypes {
  success: { message: string };
  error: { message: string };
}

const initialState: AuthReturnTypes = {
  success: { message: '' },
  error: { message: '' },
};

const Page = () => {
  const [state, action] = useActionState(
    ssoLoginAction,
    initialState as AuthReturnTypes,
  );
  const { setNotification, clearNotification } = useNotification();

  useEffect(() => {
    if (state?.success?.message) {
      setNotification('success', 'Success.. redirecting');
      setTimeout(() => {
        clearNotification();
        redirect('/dashboard');
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
      <article className="mt-[6rem] w-[100%] p-5 max-w-[400px] py-4 rounded-lg bg-[#ffffff]  flex flex-col gap-3 dark:bg-[#1f2b3a] dark:text-[#FFFFFF]">
        <h1 className="text-lg w-[100%] max-w-[300px]">Welcome Back!</h1>
        {/* FORM */}
        <form
          action={action}
          className="flex w-[100%] flex-col "
        >
          {/* email input */}
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="email"
              className="font-semibold text-[#1b1b1ba1] dark:text-[#818181cc] text-xs"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              name="email"
              placeholder="example@gmail.com"
              className="outline-none border dark:border-[#ffffff18] focus:border-[#5680FF] p-2  dark:focus:border-[#5680FF]  rounded-md text-xs"
            />
          </div>
          {/* new password input */}
          <div className="mb-3 flex flex-col gap-1">
            <label
              htmlFor="password"
              className="font-semibold text-[#1b1b1ba1] dark:text-[#818181cc] text-xs"
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="password"
              placeholder="password"
              className="outline-none border dark:border-[#ffffff18] focus:border-[#5680FF] p-2  dark:focus:border-[#5680FF]  rounded-md text-xs"
            />
          </div>
          {/* submit btn */}
          <SubmitButton />
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
            <p>Login</p>
          </>
        )}
      </button>
    </div>
  );
}

export default Page;
