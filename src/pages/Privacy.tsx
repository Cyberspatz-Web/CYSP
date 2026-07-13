import { LegalPage } from "../components/legal/LegalPage";

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      effectiveDate="[date to be set at launch]"
      draftNotice="This is placeholder structure and standard language for a company in this industry — not reviewed by counsel, and not yet accurate about Cyberspatz's actual data practices (analytics tools in use, subprocessors, retention periods, etc.). Replace bracketed sections and have this reviewed before publishing."
      intro="This policy explains what information Cyberspatz collects when you use this website or work with us, and how we handle it."
      sections={[
        {
          heading: "Information we collect",
          body: (
            <ul>
              <li>Information you submit directly — contact form, waitlist signups, job applications (name, email, company, and any message content).</li>
              <li>Basic usage data from visiting the site — pages viewed, referring source, and device/browser type, via [analytics provider to be named].</li>
              <li>Information shared during a client engagement, which is governed separately by the relevant engagement contract and any signed NDA.</li>
            </ul>
          ),
        },
        {
          heading: "How we use it",
          body: (
            <ul>
              <li>To respond to inquiries submitted through the contact form or waitlist.</li>
              <li>To evaluate job applications.</li>
              <li>To understand site usage and improve it.</li>
              <li>We do not sell personal information.</li>
            </ul>
          ),
        },
        {
          heading: "Data sharing",
          body: (
            <p>
              We share information with service providers who help us operate this
              site — currently, contact-form and waitlist submissions are stored
              in a Google Sheet via Google Apps Script, and email notifications
              go through Google's mail infrastructure. [Update this section if
              the backend changes, e.g. to a dedicated CRM.] We don't share
              information with third parties for their own marketing purposes.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              [Specify retention periods once finalized — e.g. contact form
              submissions retained for X months, job applications for X months
              after the role is filled.]
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              Depending on where you're located, you may have rights to access,
              correct, or delete personal information we hold about you. To make
              a request, contact{" "}
              <a href="mailto:info@cyberspatz.com" className="text-signal hover:text-signal-bright">
                info@cyberspatz.com
              </a>
              . [Add specific GDPR/CCPA mechanisms once confirmed applicable.]
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this policy:{" "}
              <a href="mailto:info@cyberspatz.com" className="text-signal hover:text-signal-bright">
                info@cyberspatz.com
              </a>
            </p>
          ),
        },
      ]}
    />
  );
}
