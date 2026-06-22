'use client';
import { faExchangeAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React from 'react';

const Activity: React.FC<any> = ({ ...err }) => {
  return (
    <div className="activity flex justify-between items-center text-xs gap-4 pb-2">
      <div className="flex gap-2">
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-3xl">
          <FontAwesomeIcon icon={faExchangeAlt} className="text-slate-700" />
        </div>
        <div>
          <h3>{err?.from || 'loadi..'}</h3>
          <p className="text-[gray]">{err?.origin || 'loadi..'}</p>
        </div>
      </div>
      <div>
        <p>{err?.recepients || 'loadi..'} Recepiet(s)</p>
        <p className="text-red-400">FAILED REQ..</p>
      </div>
      <div>
        <p>{format(err?.createdAt, 'dd/MM/yyyy')}</p>
        <p className="text-[gray]">{format(err?.createdAt, 'HH:mm:ss')}</p>
      </div>
      <div>
        <p className="text-gray-500">Error code</p>
        <p className="text-red-400 text-center">{err?.status || 'loadi..'}</p>
      </div>
      {/* <div>
        <p className="text-red-500">Unauthorized</p>
        <p className="text-[gray] text-center">
          <FontAwesomeIcon icon={faX} className="text-red-400" />{' '}
        </p>
      </div> */}
    </div>
  );
};

export default Activity;
