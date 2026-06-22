'use client';
import {
  faBug,
  faCheckCircle,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios, { AxiosResponse } from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useNotification } from '../../context/NotificationContext';
import Cookie from 'js-cookie';
import queryClient from '@/app/lib/query-client';

const Page = () => {
  const params = useSearchParams();
  var request = 0;
  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const [IsError, setIsError] = useState<boolean>(false);

  const connectGmail = async () => {
    setIsError(false);
    setInProgress(true);
    try {
      const req: AxiosResponse = await axios.post(
        (process.env.NEXT_PUBLIC_GMAIL_INTER as string) +
          '?' +
          params.toString(),
        {},
        { headers: { Authorization: `Bearer ${Cookie.get('t')}` } }
      );
      queryClient.invalidateQueries({
        queryKey: ['userData'],
      });
      setInProgress(false);
      setSuccess(true);
      setNotification('success', req.data?.msg || 'Intergration complete');
      setTimeout(() => {
        clearNotification();
        setSuccess(false);
        window.location.replace('/dashboard/gmail-accounts');
      }, 2000);
    } catch (error: any) {
      setInProgress(false);
      setSuccess(false);
      setIsError(true);
      setNotification(
        'error',
        error?.response?.data?.err || 'Internal server error'
      );
    }
    setTimeout(() => {
      clearNotification();
      setIsError(false);
      window.location.replace('/dashboard/gmail-accounts');
    }, 2000);
  };

  useEffect(() => {
    connectGmail();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full h-[60vh] p-4">
      {/* loading */}
      {inProgress ? (
        <div className="flex flex-col gap-4 text-center text-sm">
          <FontAwesomeIcon
            icon={faSpinner}
            className="fa-spin fa-solid text-blue-600 text-3xl"
          />
          <p>please wait..</p>
          <p>Authentication in progress</p>
        </div>
      ) : null}
      {/* success */}
      {success ? (
        <div className="flex flex-col gap-4 text-center text-sm">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="fa-solid text-green-500 text-5xl"
          />
          <p className="text-green-400">SUCCESS!</p>
          <p>Authentication successful, redirecting....</p>
        </div>
      ) : null}
      {/* Error */}
      {IsError ? (
        <div className="flex flex-col gap-4 text-center text-sm">
          <FontAwesomeIcon
            icon={faBug}
            className="fa-solid text-red-400 text-5xl"
          />
          <p className="text-red-400">FAILED!</p>
          <p>Authentication FAILED please try again, redirecting....</p>
        </div>
      ) : null}
    </section>
  );
};

export default Page;
