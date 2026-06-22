import React from 'react';
import Navbar from '@/app/components/Navbar';
import HelpHero from '../components/HelpHero';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
const page = () => {
  return (
    <main className="min-h-screen text-[#353F4F] bg-[#fff1e6] dark:bg-[#192330] dark:text-[#fdf2f2]">
      <Navbar />
      <HelpHero topic="Getting Started Guide" />
      <section className="mt-[2rem] px-4 w-full flex justify-center items-center">
        <article className="text-left w-full max-w-[1000px] text-sm">
          <strong>
            Welcome to Engine<span className="text-[#9B5BF5]">M</span> Guides
          </strong>
          <div className="py-1"></div>
          <hr />
          <p className="my-4 text-center">
            Whether you are sending newsletters, transactional emails, or
            notifications, our platform makes it easy, efficient, and reliable.
            Follow these steps to start sending emails in no time.
          </p>
          {/* Creating an account */}
          <section className="w-full">
            <h1 className="font-semibold text-lg dark:text-[#b37cff]">
              1. Creating Your Account
            </h1>
            <h3 className="ml-[1rem] font-semibold my-4">
              Step-by-step guide to setting up your account:
            </h3>
            <ul className="list-disc ml-[1rem] mt-[1rem]">
              <li className="mb-3">
                <strong>Sign Up:</strong>
                <p>
                  Visit our{' '}
                  <Link href={'/accounts/new'} className="text-blue-600">
                    sign-up
                  </Link>{' '}
                  page and create your account using your email or social login.
                </p>
              </li>
              <li className="mb-3">
                <strong>Verification:</strong>
                <p>
                  Verify your email address by clicking the link sent to your
                  inbox.
                </p>
              </li>
              <li className="mb-3">
                <strong>Complete Your Profile:</strong>
                <p>
                  Fill out your profile with essential information to get
                  personalized recommendations and tips.
                </p>
              </li>
            </ul>
          </section>
          {/*  Integrating Gmail or Custom Domains */}
          <section className="w-full mt-6">
            <h1 className="font-semibold text-lg dark:text-[#b37cff]">
              2. Integrating Gmail or Custom Domains
            </h1>
            <h3 className="ml-[1rem] font-semibold my-4">
              Seamlessly integrate with Gmail or your own domain for sending
              emails:
            </h3>
            <ul className="list-disc ml-[1rem] mt-[1rem]">
              <li className="mb-3">
                <strong>Gmail Integration:</strong>
                <p>
                  Connect your Gmail account to start sending emails directly
                  from your Gmail address without needing a custom domain.
                </p>
              </li>
              <li className="mb-3">
                <strong>Custom Domain Setup:</strong>
                <p>
                  For a more professional look, set up your custom domain for
                  sending emails. Follow our step-by-step guide to authenticate
                  your domain using DKIM and SPF records.
                </p>
              </li>
            </ul>
          </section>
          {/*  Using Our Powerful API */}
          <section className="w-full mt-6">
            <h1 className="font-semibold text-lg dark:text-[#b37cff]">
              3. Using Our Powerful API
            </h1>
            <h3 className="ml-[1rem] font-semibold my-4">
              Start sending emails programmatically:
            </h3>
            <ul className="list-disc ml-[1rem] mt-[1rem]">
              <li className="mb-3">
                <strong>API Keys:</strong>
                <p>Locate your API key in the dashboard and keep it secure.</p>
              </li>
              <li className="mb-3">
                <strong>First API Call:</strong>
                <p>
                  Use our comprehensive API documentation to make your first
                  POST request.
                </p>
              </li>
              <li className="mb-3">
                <strong>Handling Responses:</strong>
                <p>
                  Learn how to handle responses and errors for seamless email
                  delivery.
                </p>
              </li>
            </ul>
          </section>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default page;
