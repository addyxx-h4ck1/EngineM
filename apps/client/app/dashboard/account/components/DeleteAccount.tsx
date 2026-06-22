'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNotification } from '../../context/NotificationContext';
import axios, { AxiosResponse } from 'axios';
import Cookie from 'js-cookie';
import {
  faLock,
  faSpinner,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import DeleteAccountConfirm from './DeleteAccountConfirm';

const DeleteAccount = () => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { setNotification, clearNotification } = useNotification();
  const [inProgress, setInProgress] = useState<boolean>(false);

  const closeModal = () => {
    setConfirm(false);
  };

  const deleteAcc = async (e: any) => {
    setConfirm(false);
    try {
      setInProgress(true);
      setNotification('loading', 'Please wait...');
      const req: AxiosResponse = await axios.delete(
        process.env.NEXT_PUBLIC_DASHBOARD_DELETE_ACC as string,
        { headers: { Authorization: `Bearer ${Cookie.get('t')}` } }
      );
      setNotification(
        'success',
        'Account deleted. Thank you for using EngineM'
      );
      await Cookie.remove('t');
      setTimeout(() => {
        window.location.href = '/accounts/new';
        setInProgress(false);
        clearNotification();
      }, 4000);
    } catch (error: any) {
      setInProgress(false);
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
    <article className="w-full text-sm my-4 p-4 rounded-lg bg-[#FFFFFF] dark:bg-[#0E0E23]">
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <h2 className="font-semibold text-lg mb-1">
          Delete Account <FontAwesomeIcon icon={faLock} />
        </h2>
      </div>
      <p className="text-[gray]">
        We give our users 100% control of their account as mentioned in our{' '}
        <Link href={'/terms'} className="text-blue-600">
          Terms of Service.
        </Link>{' '}
        You can delete your account whenever you please, note that this action
        is irreversible and cannot be recovered.
      </p>
      {/* Delete account */}
      <div className="mt-4 text-sm">
        {inProgress ? (
          <>
            {' '}
            <button className="py-2 px-6 text-xs rounded-lg duration-300 font-semibold text-white text-center flex gap-2 items-center">
              <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
              <p>Please wait..</p>
            </button>
          </>
        ) : (
          <>
            {' '}
            <button
              className="py-2 px-6 rounded-lg bg-red-500 duration-300 font-semibold hover:bg-red-400 text-white text-center flex gap-2 items-center"
              onClick={() => setConfirm(true)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
              <p>Delete Account</p>
            </button>
          </>
        )}
      </div>
      {confirm ? (
        <DeleteAccountConfirm disable={closeModal} deleteAction={deleteAcc} />
      ) : null}
    </article>
  );
};

export default DeleteAccount;
