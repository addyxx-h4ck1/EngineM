import { faBarChart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface propType {
  title: string;
  desc: string;
}

const Statcard: React.FC<propType> = ({ title, desc }) => {
  return (
    <div className="bg-[#FFFFFF] dark:bg-[#0E0E23] p-4 rounded-lg">
      <h2 className="font-semibold uppercase">{title}</h2>
      <p className="text-[gray]">{desc}</p>
      <p className="text-2xl font-semibold my-1">600</p>
      <div className="flex justify-between items-center">
        <p className="text-[gray]">
          <span className="text-green-500">90% </span> Delivered
        </p>
        <FontAwesomeIcon
          icon={faBarChart}
          className="text-2xl bg-[#dddcdcc5] dark:bg-[#171634] p-3 rounded-full"
        />
      </div>
    </div>
  );
};

export default Statcard;
