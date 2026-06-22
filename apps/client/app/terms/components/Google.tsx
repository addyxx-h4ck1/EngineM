import React from 'react';

const Google = () => {
  return (
    <>
      <h2 className="mt-[2rem] mb-4 font-semibold text-2xl text-blue-700 text-center">
        Gmail and Google Authentication
      </h2>
      {/* Google API Services Usage */}
      <article className="mt-[2rem]">
        <h2 className="text-lg font-semibold mb-3">
          1. Google API Services Usage
        </h2>
        <ul className=" ml-[2rem]">
          <li className="mb-3">
            Our email engine integrates with Google API services, including
            Gmail, to allow users to authenticate and send emails using their
            Gmail accounts. By using our service, you agree to comply with
            Googles API Services User Data Policy and any additional terms or
            conditions that Google may impose.
          </li>
        </ul>
      </article>
      {/* Limited Use of Google Data */}
      <article className="mt-[2rem]">
        <h2 className="text-lg font-semibold mb-3">
          2. Limited Use of Google Data
        </h2>
        <ul className=" ml-[2rem]">
          <li className="mb-3">
            We only access, use, and store information from your Google account
            as necessary to provide the email services you request, such as
            sending emails via Gmail. We do not sell or share your Google data
            with third parties.
          </li>
        </ul>
      </article>
      {/* OAuth 2.0 Authentication */}
      <article className="mt-[2rem]">
        <h2 className="text-lg font-semibold mb-3">
          3. OAuth 2.0 Authentication
        </h2>
        <ul className=" ml-[2rem]">
          <li className="mb-3">
            To integrate your Gmail account with our service, you will be
            required to authenticate via Googles OAuth 2.0 protocol. This
            ensures that your credentials are securely handled, and only
            necessary permissions are granted for the functioning of the
            service.
          </li>
        </ul>
      </article>
      {/* Compliance with Google’s Policies */}
      <article className="mt-[2rem]">
        <h2 className="text-lg font-semibold mb-3">
          4. Compliance with Googles Policies
        </h2>
        <ul className=" ml-[2rem]">
          <li className="mb-3">
            We adhere to all of Googles guidelines and policies regarding the
            use of their services, including restrictions on user data access
            and storage. Users must ensure they also comply with these policies
            while using our service.
          </li>
        </ul>
      </article>
      {/*Gmail Sending Limits */}
      <article className="mt-[2rem]">
        <h2 className="text-lg font-semibold mb-3">5. Gmail Sending Limits</h2>
        <ul className=" ml-[2rem]">
          <li className="mb-3">
            When using Gmail through our service, please be aware that Google
            imposes sending limits on the number of emails that can be sent per
            day. These limits are subject to change based on your Gmail account
            type and activity. We are not responsible for emails that are not
            delivered due to these limits.
          </li>
        </ul>
      </article>
      {/*Verification and Approval */}
      <article className="mt-[2rem]">
        <h2 className="text-lg font-semibold mb-3">
          6. Verification and Approval
        </h2>
        <ul className=" ml-[2rem]">
          <li className="mb-3">
            To use our service with Gmail, our app must be verified by Google.
            This process may require additional permissions from you to allow us
            to manage your emails. We are committed to complying with Googles
            verification process to ensure the security and privacy of your
            data.
          </li>
        </ul>
      </article>
    </>
  );
};

export default Google;
