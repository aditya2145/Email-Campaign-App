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
          <li>Track email opens using invisible pixel tracking</li>
          <li>Handle wait steps, conditions, and email delivery logic</li>
          <li>Filter campaign users by status (Pending, Interested, Not Interested)</li>
          <li>View each user's current progress step and actions</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📈 Scaling & Improvements</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Enable support for multiple predefined email templates for various use-cases (e.g. onboarding, sales follow-up, abandoned cart)</li>
          <li>Allow users to create <strong>custom templates</strong> with rich-text or drag-and-drop builders</li>
          <li>Store templates in a DB for dynamic loading and reusability</li>
          <li>Replace Nodemailer with scalable services like <strong>SendGrid</strong>, <strong>Mailgun</strong>, or <strong>AWS SES</strong></li>
          <li>Move email processing to a background worker using tools like <strong>BullMQ</strong> or <strong>Agenda</strong></li>
          <li>Add advanced analytics dashboards with open/click rates</li>
          <li>Introduce role-based access control for teams and organizations</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
