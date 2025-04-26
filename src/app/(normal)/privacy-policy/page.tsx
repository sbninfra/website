import { Metadata } from "next";
import React from "react";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Read the Privacy Policy of SBN Infra Project Private Limited to understand how we collect, use, and protect your personal information. We are committed to safeguarding your privacy and ensuring a secure experience on our website.",
};

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-20 flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
      {/* <p className="text-sm text-gray-600 text-center">
        Effective Date: 25th April 2025
      </p> */}

      <section className="flex flex-col gap-6 mt-8">
        <p>
          Welcome to SBN Infra Project Private Limited . We respect your privacy
          and are committed to protecting it through this Privacy Policy.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website{" "}
          <strong>sbninfra.in</strong> . Please read this policy carefully to
          understand our views and practices regarding your personal data and
          how we treat it.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          1. Information We Collect
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, and message content collected via our contact form.
          </li>
          <li>
            <strong>Automatically Collected Information:</strong> IP address,
            browser type, operating system, access times, and pages viewed.
          </li>
          <li>
            <strong>Cookies:</strong> We may use cookies to enhance your
            experience. You can control cookie settings via your browser.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">
          2. How We Use Your Information
        </h2>
        <p>
          We use the information to respond to inquiries, provide customer
          support, improve our services, and send updates . We do not sell,
          rent, or lease your personal information to third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          3. Sharing of Your Information
        </h2>
        <p>
          We may share your information with trusted service providers or when
          required by law to protect our rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          data. However, no method of transmission over the Internet is
          completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Your Privacy Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. To exercise these rights, please contact us at{" "}
          <a
            href="mailto:info@sbninfra.in"
            className="text-blue-600 font-semibold"
          >
            info@sbninfra.in
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices and encourage you to review
          their policies.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          7. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Please review it
          periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:info@sbninfra.in"
            className="text-blue-600 font-semibold"
          >
            info@sbninfra.in
          </a>
        </p>
      </section>
    </div>
  );
}
