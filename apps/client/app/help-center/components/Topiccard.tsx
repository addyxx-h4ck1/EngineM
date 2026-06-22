import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface PropTypes {
  link: string;
  icon: any;
  name: string;
}

const Topiccard: React.FC<PropTypes> = ({ link, icon, name }) => {
  return (
    <Link href={link}>
      <div className="topic-card p-4 h-[150px] rounded-lg flex flex-col justify-center items-center gap-3 bg-[royalblue] hover:boder-0 duration-300 text-white hover:bg-[#6086f7]">
        {icon}
        <h1 className="text-xl font-semibold">{name}</h1>
      </div>
    </Link>
  );
};

export default Topiccard;
