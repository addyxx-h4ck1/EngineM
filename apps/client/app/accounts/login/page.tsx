'use client';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/logo';
import { useNotification } from '@/app/context/NotiContext';
import axios, { AxiosResponse } from 'axios';

const Page = () => {
  const { setNotification, clearNotification } = useNotification();

  const requestUrl = async () => {
    try {
      setNotification('loading', 'Please wait');
      const req: AxiosResponse = await axios.get(
        process.env.NEXT_PUBLIC_GOOGLE_LOGIN_REDIRECT as string
      );
      window.location.href = req.data;
      clearNotification();
    } catch (error: any) {
      setNotification('error', 'There was an error');
    }
  };
  return (
    <section className="bg-[#ecebeb] text-sm text-[#353F4F] min-h-screen flex flex-col items-center px-2 dark:text-[#FFFFFF] dark:bg-[#192330]">
      <article className="mt-[6rem] w-[100%] p-3 max-w-[400px] py-4 rounded-lg bg-[#ffffff]  flex flex-col gap-3 dark:bg-[#1F2937] dark:text-[#FFFFFF]">
        <Logo />
        <h1 className="text-xl w-[100%] max-w-[300px]">Welcome back</h1>
        {/* social buttons */}
        <div className="mt-3 flex flex-col gap-5 text-nowrap">
          {/* SSO */}
          <Link href={'/accounts/login/sso'}>
            <div className="google rounded-2xl text-[#1b1b1b] flex justify-center items-center gap-3 py-2 px-6 border-[#cac8c8] border-[1.5px] cursor-pointer hover:text-[royalblue] hover:border-[royalblue] duration-300 dark:text-[#FFFFFF]">
              <Image
                src={'https://static.thenounproject.com/png/4171400-200.png'}
                alt=""
                width={20}
                height={20}
                className="object-cover block"
              />

              <p>Continue with SSO</p>
            </div>
          </Link>
          {/* google */}
          <button
            className="google rounded-2xl text-[#1b1b1b] flex justify-center items-center gap-3 py-2 px-6 border-[#cac8c8] border-[1.5px] cursor-pointer hover:text-[royalblue] hover:border-[royalblue] duration-300 dark:text-[#FFFFFF]"
            onClick={requestUrl}
          >
            <Image
              src={'https://www.svgrepo.com/show/475656/google-color.svg'}
              alt=""
              width={20}
              height={20}
              className="object-cover block"
            />

            <p>Continue with google</p>
          </button>
          {/* Github */}
          <div className="google rounded-2xl text-[#1b1b1b] flex justify-center items-center gap-3 py-2 px-6 border-[#cac8c8] border-[1.5px] cursor-pointer hover:text-[royalblue] hover:border-[royalblue] duration-300 dark:text-[#FFFFFF]">
            <Image
              src={
                'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
              }
              alt=""
              width={20}
              height={20}
              className="object-cover block rounded-full"
            />

            <p>Continue with github</p>
          </div>
        </div>
        {/* TERMS */}
        <div className="mt-5 text-center w-full flex justify-center items-center text-sm">
          <p className="flex gap-1 w-full justify-center items-center text-center">
            Do not have an account?
            <Link href={'/accounts/new'} className="text-[royalblue]">
              create one
            </Link>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Page;
