import React from 'react';
import { faAt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Accountcard: React.FC<any> = ({ acc }) => {
  return (
    <div className="pl-6 bg-[#e7e5e59d] dark:bg-[#192330] rounded-lg flex mb-3 justify-between items-center gap-4 duration-300 hover:bg-[#d4d4d4c0] dark:hover:dark:bg-[#151e29] cursor-pointer">
      <div className="flex gap-3 ">
        <div>
          <h2 className="">{acc?.usermail}</h2>
          <p className="text-[gray]">{acc?.emailSent || '0'} emails sent</p>
        </div>
      </div>
      <div>
        <button className="text-red-500 py-4 px-5 rounded-lg duration-300 hover:bg-[#ff9999]">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default Accountcard;
