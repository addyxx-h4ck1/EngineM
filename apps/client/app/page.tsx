import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import AboutAPI from './components/sections/AboutAPI';
import Usecases from './components/sections/Usecases';
import Security from './components/sections/Security';
import Docssection from './components/sections/Documentation';
import Getstarted from './components/sections/Getstarted';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-[#353F4F] bg-[#fff1e6] dark:bg-[#192330] dark:text-[#fdf2f2]">
      <Navbar />
      <Hero />
      <AboutAPI />
      <div className="py-3"></div>
      <hr />
      <Usecases />
      <Security />
      <Docssection />
      <div className="py-3"></div>
      <hr />
      <Getstarted />
      <Footer />
    </main>
  );
}
