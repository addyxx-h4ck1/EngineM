import React from 'react';
import Navbar from '../components/Navbar';
import Termshero from './components/Termshero';
import Termsmain from './components/Termsmain';
import Footer from '../components/Footer';

const page = () => {
  return (
    <main className="min-h-screen text-[#353F4F] text-sm bg-[#fff1e6] dark:bg-[#192330] dark:text-[#fdf2f2]">
      <Navbar />
      <Termshero />
      <Termsmain />
      <Footer />
    </main>
  );
};

export default page;
