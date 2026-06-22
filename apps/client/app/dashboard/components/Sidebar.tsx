'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faBook,
  faBug,
  faGavel,
  faHistory,
  faHomeAlt,
  faKey,
  faQuestionCircle,
  faServer,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import React from 'react';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC<any> = ({ openSidebarMobile, func }) => {
  const router = usePathname();
  const isActive = (path: string) => router === path;

  return (
    <aside
      className={`mobileaside h-[100vh] absolute top-[63px] left-0 ${
        !openSidebarMobile ? 'w-[250px] opacity-1 ' : 'w-[0px] opacity-0'
      } bg-[#FFFFFF] dark:bg-[#0E0E23] transition-all duration-300 overflow-y-auto pb-4`}
    >
      {/* LINKS */}
      <article className="mt-3 px-5">
        {/* DASHBOARD LINKS */}
        <div className="">
          <h2 className="text-[#353f4fa4] dark:text-[#ffffff80] font-semibold text-xs uppercase mb-3">
            Dashboard
          </h2>
          <Link
            onClick={func}
            href={'/dashboard'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('/dashboard') ? 'bg-[#192330] text-[#7827E6]' : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faHomeAlt} />
            Dashboard
          </Link>
          <Link
            onClick={func}
            href={'/dashboard/activities'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('/dashboard/activities')
                ? 'bg-[#192330] text-[#7827E6]'
                : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faHistory} />
            Activities
          </Link>
          <Link
            onClick={func}
            href={'/dashboard/errors'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('/dashboard/errors') ? 'bg-[#192330] text-[#7827E6]' : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faBug} />
            API Errors
          </Link>
        </div>
        {/* INTERGRATIONS LINKS */}
        <div className="mt-4">
          <h2 className="text-[#353f4fa4] dark:text-[#ffffff80] font-semibold text-xs uppercase mb-3">
            Intergrations
          </h2>
          <Link
            onClick={func}
            href={'/dashboard/domains'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('/dashboard/domains')
                ? 'bg-[#192330] text-[#7827E6]'
                : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faServer} />
            Custom Domains
          </Link>
          <Link
            onClick={func}
            href={'/dashboard/gmail-accounts'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('/dashboard/gmail-accounts')
                ? 'bg-[#192330] text-[#7827E6]'
                : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faAt} />
            Gmail Accounts
          </Link>
        </div>
        {/* CREDENTIALS LINKS */}
        <div className="mt-4">
          <h2 className="text-[#353f4fa4] dark:text-[#ffffff80] font-semibold text-xs uppercase mb-3">
            Credentials
          </h2>
          <Link
            onClick={func}
            href={'/dashboard/api-keys'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('/dashboard/api-keys')
                ? 'bg-[#192330] text-[#7827E6]'
                : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faKey} />
            API Keys
          </Link>
          <Link
            onClick={func}
            href={'/dashboard/account'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('/dashboard/account')
                ? 'bg-[#192330] text-[#7827E6]'
                : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faUser} />
            Account
          </Link>
        </div>
        {/* REFERENCE LINKS */}
        <div className="mt-4">
          <h2 className="text-[#353f4fa4] dark:text-[#ffffff80] font-semibold text-xs uppercase mb-3">
            References
          </h2>
          <Link
            onClick={func}
            href={''}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('') ? 'bg-[#192330] text-[#7827E6]' : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faBook} />
            Documentation
          </Link>
          <Link
            onClick={func}
            href={'/help-center'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('') ? 'bg-[#192330] text-[#7827E6]' : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faQuestionCircle} />
            Help Center
          </Link>
          <Link
            onClick={func}
            href={'/terms'}
            className={`flex gap-5 items-center py-2 px-4 mb-2 ${
              isActive('') ? 'bg-[#192330] text-[#7827E6]' : ''
            }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
          >
            <FontAwesomeIcon icon={faGavel} />
            Terms of Service
          </Link>
        </div>
      </article>
      <div className="my-4">
        <p className="text-xs text-center text-gray-500">
          {new Date().getFullYear()}. Product of Pixelrart
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
