import {
  faBook,
  faInbox,
  faPallet,
  faPlug,
  faShield,
  faUnlock,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutAPI = () => {
  return (
    <section className="mt-[3rem] flex flex-col justify-center items-center text-center px-2">
      <h3 className="herof w-full max-w-[1000px] text-[#2e496b font-semibold">
        Harness the Power of Our <span className="text-[#7827E6]"> API</span>{' '}
        for Effortless <span className="text-[#7827E6]"> Email Delivery</span>{' '}
        🚀
      </h3>
      <p className="max-w-[1000px] w-full mt-4">
        Our powerful API is designed to ensure that your emails reach the inbox
        reliably with just a single POST request. Simplify your email
        integration while benefiting from our robust delivery infrastructure
      </p>
      <h4 className="mt-4 text-[#7827E6] text-xl">Key Features of Our API</h4>
      <article className="mt-6 flex flex-wrap justify-center gap-3 w-[98%]">
        {/* POINT */}
        <div className="apifeature flex gap-4 w-[350px] text-left justify-center p-3 bg-[#e7e7e765] rounded-lg dark:bg-[#1C2836]">
          <p>
            <FontAwesomeIcon
              icon={faPlug}
              className="text-3xl mb-3 text-[#7827E6]"
            />
          </p>
          <div>
            <strong className="text-xl">Effortless Integration</strong>
            <p>
              Send emails with a straightforward POST request, no complex setup
              needed.
            </p>
          </div>
        </div>
        {/* POINT */}
        <div className="apifeature flex gap-4 w-[350px] text-left justify-center p-3 bg-[#e7e7e765] rounded-lg dark:bg-[#1C2836]">
          <p>
            <FontAwesomeIcon
              icon={faInbox}
              className="text-3xl mb-3 text-[#7827E6]"
            />
          </p>
          <div>
            <strong className="text-xl">Inbox Assurance</strong>
            <p>
              Advanced mechanisms to ensure your emails land in the inbox, not
              the spam folder.
            </p>
          </div>
        </div>
        {/* POINT */}
        <div className="apifeature flex gap-4 w-[350px] text-left justify-center p-3 bg-[#e7e7e765] rounded-lg dark:bg-[#1C2836]">
          <p>
            <FontAwesomeIcon
              icon={faShield}
              className="text-3xl mb-3 text-[#7827E6]"
            />
          </p>
          <div>
            <strong className="text-xl">Enhanced Security</strong>
            <p>
              Secure your communications with advanced encryption and
              protection.
            </p>
          </div>
        </div>
        {/* POINT */}
        <div className="apifeature flex gap-4 w-[350px] text-left justify-center p-3 bg-[#e7e7e765] rounded-lg dark:bg-[#1C2836]">
          <p>
            <FontAwesomeIcon
              icon={faUnlock}
              className="text-3xl mb-3 text-[#7827E6]"
            />
          </p>
          <div>
            <strong className="text-xl">Flexible Authentication</strong>
            <p>
              Integrate seamlessly with Gmail or other email providers, even
              without a custom domain.
            </p>
          </div>
        </div>
        {/* POINT */}
        <div className="apifeature flex gap-4 w-[350px] text-left justify-center p-3 bg-[#e7e7e765] rounded-lg dark:bg-[#1C2836]">
          <p>
            <FontAwesomeIcon
              icon={faBook}
              className="text-3xl mb-3 text-[#7827E6]"
            />
          </p>
          <div>
            <strong className="text-xl">Detailed Documentation</strong>
            <p>
              Access comprehensive API documentation and examples for quick
              implementation.
            </p>
          </div>
        </div>
        {/* POINT */}
        <div className="apifeature flex gap-4 w-[350px] text-left justify-center p-3 bg-[#e7e7e765] rounded-lg dark:bg-[#1C2836]">
          <p>
            <FontAwesomeIcon
              icon={faPallet}
              className="text-3xl mb-3 text-[#7827E6]"
            />
          </p>
          <div>
            <strong className="text-xl">Customizable Templates</strong>
            <p>
              Create and use dynamic email templates tailored to your audience.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutAPI;
