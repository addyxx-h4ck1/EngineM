'use client';
import {
  faExclamationCircle,
  faIdBadge,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '../lib/fetchData';
import Link from 'next/link';
import { useNotification } from '../context/NotificationContext';
import axios, { AxiosResponse } from 'axios';

const Page = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await fetchDashboardData(),
    queryKey: ['userData'],
    enabled: true, //Array according to Documentation
  });
  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(false);

  let fromRef = useRef<HTMLInputElement>(null);
  let toRef = useRef<HTMLTextAreaElement>(null);
  let subjectRef = useRef<HTMLInputElement>(null);
  let textRef = useRef<HTMLTextAreaElement>(null);

  //send
  const sendMail = async (e: any) => {
    e.preventDefault();
    if (!fromRef.current?.value) {
      setNotification('error', 'EMAIL field must not be empty');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }
    if (!toRef.current?.value) {
      setNotification('error', 'RECEPIENTS field must not be empty');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }
    if (!subjectRef.current?.value) {
      setNotification('error', 'SUBJECT field must not be empty');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }
    if (!textRef.current?.value) {
      setNotification('error', 'BODY field must not be empty');
      setTimeout(() => {
        clearNotification();
      }, 2000);
      return;
    }

    //create an Object of the values

    const recepients = toRef?.current?.value.split(' ');

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    //@ts-ignore
    formData.to = recepients;
    try {
      setInProgress(true);
      setNotification('loading', ' Sending, please wait');
      const req: AxiosResponse = await axios.post(
        process.env.NEXT_PUBLIC_TEST_INTERGRATION as string,
        formData,
        {
          headers: {
            Authorization: `Bearer ${data?.data[0]?.key} `,
          },
        }
      );
      setInProgress(false);
      setNotification('success', 'Email sent successfully');
      fromRef.current.value = '';
      toRef.current.value = '';
      subjectRef.current.value = '';
      textRef.current.value = '';
      setTimeout(() => {
        clearNotification();
        refetch();
      }, 2000);
    } catch (error: any) {
      setInProgress(false);
      setNotification(
        'error',
        error?.response?.data.err.response || 'There was an error'
      );
      setTimeout(() => {
        clearNotification();
        refetch();
      }, 2000);
    }
  };

  return (
    <>
      <div className="w-full max-w-[300px] gap-2 items-center text-sm">
        <h1 className="font-semibold text-2xl text-nowrap">Account</h1>
        <p className="mt-1 text-[#353f4fa4] dark:text-[#ffffff80]">
          Home / Dashboard / test-intergration
        </p>
      </div>
      <article className="w-full text-sm mt-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h2 className="font-semibold text-lg mb-1">Test Intergrations</h2>
        </div>
        <p className="text-[gray]">
          Test if your gmail or custom domain has been correctly intergrated
          with our service. Do not send any{' '}
          <span className="text-blue-600">SPAM</span> content.
        </p>
        <section className="mt-3 w-full">
          <form className="w-full flex flex-col gap-4" onSubmit={sendMail}>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faUser} />
                <p>Email</p>
              </div>
              <input
                type="text"
                name="from"
                ref={fromRef}
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                placeholder="The email you want to test"
              />
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faUser} />
                <p>Recepient(s)</p>
              </div>
              <textarea
                name="to"
                id="content"
                ref={toRef}
                placeholder="Add your recepients separated by a space e.g one@gmail.com two@gmail.com"
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
              ></textarea>
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faIdBadge} />
                <p>Subject</p>
              </div>
              <input
                type="text"
                name="subject"
                ref={subjectRef}
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
                placeholder="Subject"
              />
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <FontAwesomeIcon icon={faIdBadge} />
                <p>Body</p>
              </div>
              <textarea
                name="text"
                id="content"
                ref={textRef}
                placeholder="Type here email content "
                className="bg-transparent rounded-lg py-2 px-4 border-[1px] border-[gray] flex-grow outline-0"
              ></textarea>
            </div>
            {/* INPUT */}
            <div className="w-full flex justify-between items-center flex-wrap gap-1 mb-3">
              <div className="w-full max-w-[300px] flex gap-2 items-center">
                <button
                  type={inProgress ? 'button' : 'submit'}
                  className="py-2 px-8 rounded-lg bg-[royalblue] duration-300 hover:bg-[#6288f8] font-semibold"
                >
                  Submit
                </button>
              </div>
              <div className="mt-3 text-xs">
                <FontAwesomeIcon
                  icon={faExclamationCircle}
                  className="text-blue-700"
                />{' '}
                By clicking SUBMIT you comply with our{' '}
                <Link href={'/terms'} className="text-blue-600">
                  Terms of Service.{' '}
                </Link>{' '}
                Make sure your content is spam free to ensure your email reach
                the inbox, If we detect any spam content even if this is testing
                we will terminate our account without any WARNINGS.
              </div>
            </div>
          </form>
        </section>
      </article>
    </>
  );
};

export default Page;
