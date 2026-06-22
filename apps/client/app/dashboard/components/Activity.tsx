import { faCheck, faExchangeAlt, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React from 'react';

interface propTypes {
  createdAt: string;
  from: string;
  origin: string;
  recepients: string | number;
  reqDate: string | Date;
  status: string | number;
  sucess: true;
  _id: string;
}

const Activity: React.FC<propTypes> = ({ ...activity }) => {
  return (
    <div className="activity flex justify-between items-center text-xs gap-4 pb-2">
      <div className="flex gap-2">
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-3xl">
          <FontAwesomeIcon icon={faExchangeAlt} className="text-slate-700" />
        </div>
        <div className="max-w-[190px] w-full overflow-hidden ">
          <h3>{activity?.from}</h3>
          <p className="text-[gray]">{activity?.origin}</p>
        </div>
      </div>
      <div>
        <p> {activity?.recepients + ' ' + 'Recepiet(s)'}</p>
        <p className={`${activity.sucess ? 'text-green-400' : 'text-red-400'}`}>
          {!activity.sucess ? 'FAILED' : 'SUCCESS'}
        </p>
      </div>
      <div>
        <p>{format(activity?.createdAt, 'dd/MM/yyyy')}</p>
        <p className="text-[gray]">{format(activity?.createdAt, 'HH:mm:ss')}</p>
      </div>
      <div className="text-center">
        <p className={`${activity.sucess ? 'text-green-500' : 'text-red-500'}`}>
          {activity?.status}
        </p>
        <p className="text-[gray]">
          {activity.sucess ? (
            <FontAwesomeIcon icon={faCheck} className="text-green-400" />
          ) : (
            <FontAwesomeIcon icon={faX} className="text-red-400" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Activity;
