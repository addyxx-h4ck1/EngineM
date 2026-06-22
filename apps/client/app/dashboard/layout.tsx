'use client';
import { Roboto } from 'next/font/google';
import '../globals.css';
import ThemeContext, { ThemeProvider } from '../context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/app/lib/query-client'; // Adjust path as necessary
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faBars,
  faBook,
  faBug,
  faGavel,
  faHistory,
  faHomeAlt,
  faKey,
  faMoon,
  faQuestionCircle,
  faServer,
  faSun,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import Link from 'next/link';
import Sidebar from './components/Sidebar';
import Notification from './components/Notification';
import { usePathname } from 'next/navigation';
import withAuth from './utils/WithAuth';
import { SkeletonTheme } from 'react-loading-skeleton';
import Dropdown from './components/Dropdown';
config.autoAddCss = false;

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function getInitialTheme(): string {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return savedTheme || (prefersDarkMode ? 'dark' : 'light');
  }
  // Default to 'light' for server-side rendering
  return 'light';
}

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();
  const isActive = (path: string) => router === path;
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dark, setdark] = useState<boolean>(true);
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);
  const [openSideBarMobile, setOpenSideBarMobile] = useState<boolean>(false);

  const closeSideBar = () => {
    setTimeout(() => {
      setOpenSideBarMobile(false);
    }, 1000);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <SkeletonTheme
          baseColor={dark ? '#0E0E23' : '#FFFFFF'}
          highlightColor={dark ? '#353F4F' : '#EAEDF7'}
        >
          <main className="min-h-screen min-w-screen bg-[#EAEDF7] dark:bg-[#192330] text-[#353F4F] dark:text-white flex">
            <aside
              className={`scrollable-container desktopaside h-[100vh] sticky top-0 ${
                openSideBar ? 'w-[330px] opacity-1 ' : 'w-[0px] opacity-0'
              } bg-[#FFFFFF] dark:bg-[#0E0E23] transition-all duration-300 overflow-x-hidden`}
            >
              {/* LOGO */}
              <div className="py-3 px-6 w-full bg-[#FFFFFF] dark:bg-[#0E0E23] sticky top-0 flex justify-between items-center">
                <h1 className="text-2xl font-semibold font-serif mt-1">
                  Engine<span className="text-[#7827E6]">M</span>
                </h1>
              </div>
              {/* LINKS */}
              <article className="mt-3 px-5">
                {/* DASHBOARD LINKS */}
                <div className="">
                  <h2 className="text-[#353f4fa4] dark:text-[#ffffff80] font-semibold text-xs uppercase mb-3">
                    Dashboard
                  </h2>
                  <Link
                    href={'/dashboard'}
                    className={`flex gap-5 items-center py-2 px-4 mb-2 ${
                      isActive('/dashboard')
                        ? 'bg-[#192330] text-[#7827E6]'
                        : ''
                    }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
                  >
                    <FontAwesomeIcon icon={faHomeAlt} />
                    Dashboard
                  </Link>

                  <Link
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
                    href={'/dashboard/errors'}
                    className={`flex gap-5 items-center py-2 px-4 mb-2 ${
                      isActive('/dashboard/errors')
                        ? 'bg-[#192330] text-[#7827E6]'
                        : ''
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
                    href={''}
                    className={`flex gap-5 items-center py-2 px-4 mb-2 ${
                      isActive('') ? 'bg-[#192330] text-[#7827E6]' : ''
                    }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
                  >
                    <FontAwesomeIcon icon={faBook} />
                    Documentation
                  </Link>
                  <Link
                    href={'/help-center'}
                    className={`flex gap-5 items-center py-2 px-4 mb-2 ${
                      isActive('') ? 'bg-[#192330] text-[#7827E6]' : ''
                    }  hover:bg-[#192330] hover:text-[#7827E6] duration-300 rounded-lg`}
                  >
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    Help Center
                  </Link>
                  <Link
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
            {/* ========================== */}
            {/* NAVBAR TOP */}
            {/* ========================== */}

            <section className="w-full">
              <nav className="py-3 px-6 w-full bg-[#FFFFFF] dark:bg-[#0E0E23] sticky top-0 flex justify-between items-center mb-4">
                {/* NOTIFICATION */}
                <Notification />
                {/* NOTIFICATION */}

                {/* LEFT */}
                <article>
                  <button
                    type="button"
                    onClick={() => setOpenSideBar(!openSideBar)}
                    className={`desktoptoogle py-2 w-[40px] h-[40px] flex justify-center items-center rounded-full font-semibold duration-300 hover:bg-[#9b5bf5]`}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenSideBarMobile(!openSideBarMobile)}
                    className={`mobiletoogle py-2 w-[40px] h-[40px] flex justify-center items-center rounded-full font-semibold duration-300 hover:bg-[#9b5bf5]`}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                  {/* MOBILE SIDEBAR */}
                  {openSideBarMobile ? (
                    <Sidebar state={openSideBarMobile} func={closeSideBar} />
                  ) : null}
                </article>
                {/* RIGHT */}
                <article className="flex justify-center items-center gap-3">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setdark(!dark);
                    }}
                    className={`py-2 w-[40px] h-[40px] flex justify-center items-center rounded-full font-semibold duration-300 hover:bg-[#9b5bf5]`}
                  >
                    {theme === 'light' ? (
                      <>
                        <FontAwesomeIcon icon={faMoon} />
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faSun} />
                      </>
                    )}
                  </button>
                  <div className="profile">
                    <button
                      className="py-2 w-[40px] h-[40px] flex justify-center items-center rounded-full font-semibold duration-300  hover:bg-[#9b5bf5]"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <FontAwesomeIcon icon={faUserCircle} />
                    </button>
                  </div>
                </article>

                <Dropdown open={showDropdown} func={setShowDropdown} />
              </nav>
              {/* content */}
              <section className="px-2" onClick={() => setShowDropdown(false)}>
                <ThemeProvider>{children}</ThemeProvider>
              </section>
            </section>
          </main>
        </SkeletonTheme>
      </NotificationProvider>
    </QueryClientProvider>
  );
}

export default withAuth(RootLayout);
