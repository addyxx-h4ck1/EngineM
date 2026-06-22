import Navbar from '@/app/components/Navbar';
import React from 'react';
import HelpHero from '../components/HelpHero';
import Accordion from './components/Accordion';
import { FAQs } from '@/app/questions-answers';
import Footer from '@/app/components/Footer';
const page = () => {
  return (
    <main className="min-h-screen text-[#353F4F] text-sm bg-[#fff1e6] dark:bg-[#192330] dark:text-[#fdf2f2]">
      <Navbar />
      <HelpHero topic="Frequently Asked Questions & Answers" />
      <section className="mt-6 flex justify-center items-center px-4">
        <article className="flex flex-col w-full max-w-[1000px] gap-2">
          {FAQs.map((data, index) => {
            return <Accordion key={index} data={data} index={index} />;
          })}
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default page;
