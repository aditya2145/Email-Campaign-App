import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        📢 About This App
      </h1>

      <section className="mb-8">
        <p className="mb-4 text-lg">
          This Email Campaign Manager is a lightweight, schema-driven tool for
          creating and tracking multi-step, condition-based email sequences. It
          allows marketers or product teams to automate and personalize email flows
          for engagement, reactivation, or onboarding campaigns.
        </p>
        <p className="mb-4 text-sm text-gray-600">
          ⚙️ <strong>Note:</strong> For demonstration purposes, the wait duration between steps
          has been reduced to <strong>2 minutes</strong> instead of days. This helps visualize the
          full email flow and user transitions in a shorter time window during development.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🛠 Key Features</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Create email campaigns using predefined templates{" "}
            <span className="text-sm text-gray-500">
              (currently one available, but built to scale for use cases like onboarding,
              re-engagement, promotions, and more)
            </span>
          </li>
          <li>Sends emails using <strong>Nodemailer</strong> with Gmail SMTP</li>
          <li>
            Tracks email opens using a{" "}
            <strong>confirmation link (anchor tag)</strong>. When the user clicks this link,
            it triggers a backend GET request and marks the email as opened.
          </li>
          <li>Handle wait steps, conditions, and email delivery logic</li>
          <li>Filter campaign users by status (Pending, Interested, Not Interested)</li>
          <li>View each user's current progress step and actions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📈 Scaling & Improvements</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Enable support for multiple predefined email templates for various use-cases (e.g. onboarding, sales follow-up, abandoned cart)
          </li>
          <li>
            Allow users to create <strong>custom templates</strong> with rich-text or drag-and-drop builders
          </li>
          <li>
            Store templates in a database for dynamic loading and reusability
          </li>
          <li>
            Replace <strong>Nodemailer</strong> with scalable services like:
            <ul className="list-disc ml-6 text-sm text-gray-600 mt-1">
              <li>
                <strong>SendGrid</strong> – A reliable service to send lots of emails (like marketing or transactional emails) without worrying about Gmail limits.
              </li>
              <li>
                <strong>Mailgun</strong> – Another powerful email API used by developers to send, receive, and track emails.
              </li>
              <li>
                <strong>AWS SES</strong> (Simple Email Service) – Amazon’s tool for sending emails at scale. It’s cost-effective and highly scalable.
              </li>
            </ul>
          </li>
          <li>
            Move email processing to a background worker using tools like:
            <ul className="list-disc ml-6 text-sm text-gray-600 mt-1">
              <li>
                <strong>BullMQ</strong> – A job queue library for handling background tasks like sending emails one by one in the background, so the main app stays fast.
              </li>
              <li>
                <strong>Agenda</strong> – Another job scheduling library, good for things like "send this email after 2 days".
              </li>
            </ul>
          </li>
          <li>
            Add advanced analytics dashboards to track open and click rates
          </li>
          <li>
            Introduce role-based access control – allow team members to have different permissions (e.g. Admin can edit campaigns, Viewer can only see reports)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
