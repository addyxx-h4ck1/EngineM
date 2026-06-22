'use client';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface propType {
  index: string | number;
  data: { question: string; answer: string };
}

const Accordion: React.FC<propType> = ({ index, data }) => {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full">
      <button
        className="w-full text-left flex justify-between items-center py-4 px-6 bg-slate-300 dark:bg-slate-700 font-semibold duration-300 hover:bg-slate-200 dark:hover:bg-slate-600"
        onClick={() => setIsOpen(!open)}
      >
        <span className="flex gap-1">
          <p>{Number(index) + 1}.</p> {data.question}
        </span>
        <span>
          {open ? (
            <FontAwesomeIcon icon={faAngleRight} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </span>
      </button>
      <div
        className={`w-full grid ${
          open ? 'grid-rows-[1fr] opacity-1' : 'grid-rows-[0fr] opacity-0'
        } overflow-hidden transition-all duration-500`}
      >
        <div className="overflow-hidden mt-2">
          <ul className="list-disc px-8">
            <li className="">{data.answer}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
