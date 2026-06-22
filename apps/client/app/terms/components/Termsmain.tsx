import Link from 'next/link';
import React from 'react';
import Google from './Google';

const Termsmain = () => {
  return (
    <section className="mt-[3rem] flex flex-col justify-center items-center px-2">
      <main className="w-full max-w-[900px]">
        {/* ELIGIBILITY */}
        <article className="">
          <h2 className="text-lg font-semibold mb-3">1. Eligibility</h2>
          <p>
            To use our Service, you must be at least 18 years old and legally
            capable of entering into binding contracts. By using the Service,
            you confirm that you meet these requirements.
          </p>
        </article>
        {/* ELIGIBILITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">
            2. Account Registration
          </h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              You must create an account to use our Service.
            </li>
            <li className="mb-3">
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li className="mb-3">
              You must provide accurate and complete information during
              registration and keep your account information updated.
            </li>
          </ul>
          <p>
            Do not have an account{' '}
            <Link href={'/accounts/new'} className="text-blue-800">
              start here.
            </Link>
          </p>
        </article>
        {/* ELIGIBILITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">3. Use of Service</h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              Our Service allows you to send emails to your contacts. You must
              comply with all applicable laws and regulations when using the
              Service.
            </li>
            <li className="mb-3">
              You agree not to use the Service for any unlawful, abusive, or
              fraudulent activities, including but not limited to sending
              unsolicited emails (spam), phishing, or any form of harassment. If
              found your account will be permanently{' '}
              <span className="text-[red] font-semibold"> BANNED</span> without
              any warnings.
            </li>
          </ul>
        </article>
        {/* ELIGIBILITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">
            4. Content and Intellectual Property
          </h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              You retain ownership of the content you send through our Service.
              However, you grant us a license to use, store, and process your
              content solely to provide the Service.
            </li>
            <li className="mb-3">
              You must not use our Service to send content that is illegal,
              offensive, or violates the rights of others.
            </li>
          </ul>
        </article>
        {/* ELIGIBILITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">
            5. Prohibited Activities
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              Use the Service to send spam or unsolicited emails.
            </li>
            <li className="mb-3">
              Use the Service to send harmful or malicious content, including
              viruses or malware.
            </li>
            <li className="mb-3">
              Attempt to disrupt or interfere with the Service or servers.
            </li>
            <li className="mb-3">
              Reverse engineer, decompile, or attempt to extract the source code
              of the Service.
            </li>
          </ul>
        </article>
        {/* ELIGIBILITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">6. Payment and Billing</h2>
          <p className="text-center font-semibold mb-2">
            Our service is completely free for now however:
          </p>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              The Service offers both free and paid plans. Additional features
              and services may be available with a paid subscription.
            </li>
            <li className="mb-3">Payments are non-refundable.</li>
            <li className="mb-3">
              We reserve the right to change our pricing at any time, with
              reasonable notice.
            </li>
          </ul>
        </article>
        {/* ELIGIBILITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">7. Privacy</h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              We respect your privacy and are committed to protecting your
              personal information. Please review our Privacy Policy to
              understand how we collect, use, and safeguard your information.
            </li>
          </ul>
        </article>
        {/* SECURITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">
            8. Security and Compliance
          </h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              We take security seriously and implement industry-standard
              measures to protect your data.
            </li>
            <li className="mb-3">
              You are responsible for ensuring that your use of the Service
              complies with all applicable laws, including data protection
              regulations.
            </li>
          </ul>
        </article>
        {/* LIABILITY */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">
            9. Limitation of Liability
          </h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              The Service is provided{' '}
              <span className="text-[#7827E6]"> as is</span> and{' '}
              <span className="text-[#7827E6]"> as available.</span> We do not
              guarantee that the Service will be error-free or uninterrupted.
            </li>
            <li className="mb-3">
              To the maximum extent permitted by law, we are not liable for any
              direct, indirect, incidental, or consequential damages arising
              from your use of the Service.
            </li>
          </ul>
        </article>
        {/* INDEMNIFICATION */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">10. Indemnification</h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              You agree to indemnify and hold us harmless from any claims,
              damages, or losses arising from your use of the Service or your
              violation of these Terms.
            </li>
          </ul>
        </article>
        {/* TERMINATION */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">11. Termination</h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              We reserve the right to suspend or terminate your account at any
              time, with or without notice, for violating these Terms or for any
              other reason at our sole discretion.
            </li>
          </ul>
        </article>
        {/* Modifications to Terms */}
        <article className="mt-[2rem]">
          <h2 className="text-lg font-semibold mb-3">
            12. Modifications to Terms
          </h2>
          <ul className="list-disc ml-[2rem]">
            <li className="mb-3">
              We may update these Terms from time to time. We will notify you of
              any changes by posting the new Terms on our website. Your
              continued use of the Service after any such changes constitutes
              your acceptance of the new Terms.
            </li>
          </ul>
        </article>
        <Google />
        <p className="my-6 text-center font-semibold">
          If you have any questions or concerns about these Terms, please
          contact us at{' '}
          <Link
            href={'mailto:smtps.mailer.service@gmail.com'}
            className="text-blue-700 font-black"
          >
            support@enginemteam
          </Link>
        </p>
      </main>
    </section>
  );
};

export default Termsmain;
