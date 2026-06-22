import Image from 'next/image';
import React from 'react';

interface propTypes {
  img: string;
  title: string;
  desc: string;
}

const Securitycard: React.FC<propTypes> = ({ img, title, desc }) => {
  return (
    <div className="securitycard bg-[#dfdcdc69] p-4 rounded-lg dark:bg-[#1c2836]">
      <Image
        src={img}
        alt=""
        width={4192}
        height={1746}
        unoptimized
        className="w-[100%] h-[200px] object-cover rounded-lg"
      />
      <h5 className="font-semibold text-lg my-2">{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default Securitycard;
