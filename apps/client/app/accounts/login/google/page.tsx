'use client';
import React, { useEffect, useState, Suspense } from 'react';
import axios, { AxiosResponse } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faCheckCircle,
  faExclamationTriangle,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Cookie from 'js-cookie';

const Page = () => {
  const params = useSearchParams();
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [sucess, setSucess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [warning, setWarning] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('There was an error');

  useEffect(() => {
    const sendReq = async () => {
      if (!params.get('code'))
        return (window.location.href = '/accounts/login');
      try {
        setInProgress(true);
        const req: AxiosResponse = await axios.post(
          `${
            process.env.NEXT_PUBLIC_GOOGLE_LOGIN_REDIRECT_CB as string
          }${params.toString()}`
        );
        setInProgress(false);
        setSucess(true);
        await Cookie.set('t', req.data.token, { expires: 1 });
        setTimeout(() => {
          window.location.href = '/dashboard';
          setSucess(false);
        }, 2000);
        console.log(req.data);
      } catch (error: any) {
        console.log(error);

        setInProgress(false);
        if (error.status == 404) {
          setWarning(true);
          setTimeout(() => {
            window.location.href = '/accounts/login';
            setWarning(false);
          }, 2000);
          return;
        }
        setMessage(error.response.data.err || 'There was an error');
        setError(true);
        setTimeout(() => {
          window.location.href = '/accounts/login';
          setError(false);
        }, 2000);
      }
    };
    sendReq();
  }, []);

  return (
    <section className="bg-[#2d3744] text-sm min-h-screen">
      <section className="w-full h-[60vh] flex flex-col justify-center items-center">
        <article className="w-[90%] max-w-[400px] p-2 border-slate-900 border-[1px] rounded-lg">
          <div className="google rounded-2xl text-[#1b1b1b] flex justify-center items-center gap-3 py-2 px-6 duration-300 dark:text-[#FFFFFF]">
            <Image
              src={'https://www.svgrepo.com/show/475656/google-color.svg'}
              alt=""
              width={20}
              height={20}
              className="object-cover block"
            />
            <p>Google Oauth</p>
          </div>

          {inProgress ? (
            <>
              <div className="w-full p-2 text-xs flex gap-2 items-center justify-center rounded-lg">
                <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                <p>Please wait...</p>
              </div>
            </>
          ) : null}

          {/* Success */}
          {sucess ? (
            <>
              <div className="w-full p-2 text-xs flex gap-2 items-center justify-center rounded-lg text-green-400">
                <FontAwesomeIcon icon={faCheckCircle} className="" />
                <p>Success!!</p>
              </div>
              <p className="text-gray-500 my-4 text-center">redirecting...</p>
            </>
          ) : null}

          {/* ERROR */}
          {error ? (
            <>
              <div className="w-full p-2 text-xs flex gap-2 items-center justify-center rounded-lg text-red-400">
                <FontAwesomeIcon icon={faBug} className="" />
                <p>{message}</p>
              </div>
              <p className="text-gray-500 my-2 text-center">redirecting...</p>
            </>
          ) : null}

          {/* ACOUNT ALREADY REGISTERED */}
          {warning ? (
            <>
              <div className="w-full p-2 text-xs flex gap-2 items-center justify-center rounded-lg text-yellow-400">
                <FontAwesomeIcon icon={faExclamationTriangle} className="" />
                <p>This account is not registered</p>
              </div>
              <p className="text-gray-500 my-2 text-center">redirecting...</p>
            </>
          ) : null}
        </article>
      </section>
    </section>
  );
};

export default function SuspendedPage() {
  return (
    <Suspense
      fallback={<div className="bg-[#2d3744] text-center">Loading...</div>}
    >
      <Page />
    </Suspense>
  );
}
