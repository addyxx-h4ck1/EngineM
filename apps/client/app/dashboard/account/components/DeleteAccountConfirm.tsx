'use client';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeleteAccountConfirm: React.FC<any> = ({ disable, deleteAction }) => {
  return (
    <section className="w-full h-[100vh] fixed  m-auto inset-0 flex justify-center bg-[#2724245d] items-center">
      <section className="text-sm  p-3 w-[95%] max-w-[400px] h-[150px] bg-[#161635] rounded-lg flex gap-2 text-white">
        <div className="">
          <h2 className="font-semibold text-[#ffc862]">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            {'  '}
            Warning!
          </h2>
          <p className="text-xs my-2">
            This action cannot be reversed. To proceed please click confirm.
          </p>

          <div className="flex gap-3 justify-self-end w-full my-4">
            <button
              className="py-1 px-4 bg-transparent border-[1px] border-slate-600 rounded-md duration-300 hover:text-[royalblue] hover:border-[royalblue]"
              onClick={disable}
            >
              cancel
            </button>
            <button
              className="py-1 px-4 bg-[royalblue] duration-300 rounded-md hover:bg-[#7195ff]"
              onClick={deleteAction}
            >
              confirm
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DeleteAccountConfirm;
