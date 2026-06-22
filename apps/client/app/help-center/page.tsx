import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Topiccard from './components/Topiccard';
import {
  faCode,
  faEnvelopeOpenText,
  faRocket,
  faPlugCircleCheck,
  faUserCircle,
  faPaperPlane,
  faShieldAlt,
  faTools,
  faCreditCard,
  faLifeRing,
  faQuestionCircle,
  faBullhorn,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const page = () => {
  return (
    <main className="min-h-screen text-[#353F4F] bg-[#fff1e6] dark:bg-[#192330] dark:text-[#fdf2f2]">
      <Navbar />
      <section className="mt-[2rem] text-center px-2 flex flex-col justify-center items-center">
        <article className="max-w-[1000px] w-full flex flex-col justify-center items-center">
          <h1 className="heroh font-bold">How Can We Help You?</h1>
          <p className="max-w-[700px] w-full mt-6">
            Pick a topic you wish to learn about , we will do our best to
            explain each and every step to make sure you get the best out of us.
          </p>

          <section className="topics mt-[3rem] w-full">
            <Topiccard
              link="/help-center/getting-started"
              icon={
                <>
                  <FontAwesomeIcon icon={faRocket} className="text-4xl" />
                </>
              }
              name="Getting Started"
            />
            <Topiccard
              link="/terms"
              icon={
                <>
                  <FontAwesomeIcon icon={faFileContract} className="text-4xl" />
                </>
              }
              name="Terms of Service"
            />
            <Topiccard
              link="/help-center/FAQs"
              icon={
                <>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="text-4xl"
                  />
                </>
              }
              name="FAQs"
            />
          </section>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default page;
