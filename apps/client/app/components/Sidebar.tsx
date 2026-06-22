import React, { useContext, useEffect, useRef } from 'react';
import ThemeContext from '../context/ThemeContext';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC<any> = ({ func }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const sidebarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        func();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [func]);

  return (
    <aside
      className="sidebar text-sm p-4 absolute right-[10px] top-[60px] rounded-lg bg-[#1F2937] w-[250px] text-white dark:text-white"
      ref={sidebarRef}
    >
      <article className="cursor-pointer flex flex-col  gap-6 mt-7">
        <Link
          href={'/'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          Home
        </Link>
        <p
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          About
        </p>
        <p
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          Features
        </p>
        <p
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          Documentation
        </p>
        <Link
          href={'/help-center/FAQs'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          FAQs
        </Link>

        <Link
          href={'/help-center'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          Help Center
        </Link>
        <Link
          href={'/terms'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          Terms of Service
        </Link>
        <Link
          href={'/accounts/login'}
          className="hover:text-[#9b5bf5] duration-300 font-semibold"
          onClick={() => {
            func();
          }}
        >
          Sign in
        </Link>

        <div className="w-full flex flex-col gap-3">
          <Link href={'/accounts/new'} className="w-full">
            <button className="py-2 px-6 w-full rounded-md bg-[#9B5BF5] font-semibold duration-300 hover:bg-[#9b5bf5] ">
              Sign up
            </button>
          </Link>

          <button
            onClick={() => {
              toggleTheme();
              func();
            }}
            className={`py-2 px-6 rounded-md  font-semibold duration-300 bg-[#9B5BF5] hover:bg-[#9b5bf5]`}
          >
            {theme === 'light' ? (
              <>
                Dark <FontAwesomeIcon icon={faMoon} />
              </>
            ) : (
              <>
                Light <FontAwesomeIcon icon={faSun} />
              </>
            )}
          </button>
        </div>
      </article>
    </aside>
  );
};

export default Sidebar;
