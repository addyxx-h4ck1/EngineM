import Image from 'next/image';
import React from 'react';
import LogoPng from '@/app/android-chrome-192x192.png';

const Logo = () => {
  return (
    <Image
      src={LogoPng}
      alt=""
      width={50}
      unoptimized
      height={50}
      className="object-cover rounded-lg block w-[60px] h-[40px]"
    />
  );
};

export default Logo;
