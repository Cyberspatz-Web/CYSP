import { LegalPage } from "../components/legal/LegalPage";

export function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms"
      effectiveDate="[date to be set at launch]"
      draftNotice="This covers website usage only — it deliberately does not attempt to cover engagement-specific terms (scope, liability, indemnification, payment) for actual security or engineering work, which belong in a separate Master Services Agreement or Statement of Work reviewed by counsel. Do not rely on this page for engagement terms."
      intro="These terms govern your use of this website. They don't cover the terms of any engagement with Cyberspatz — those are set out in a separate signed agreement."
      sections={[
        {
          heading: "Use of this site",
          body: (
            <p>
              This site is provided for informational purposes — to learn about
              Cyberspatz's services and to get in touch with us. You agree not to
              use it to attempt unauthorized access to our systems, scrape
              content for republication, or interfere with normal operation of
              the site.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              The content on this site — including the Cyberspatz name, logo,
              and written content — belongs to Cyberspatz or its licensors.
              You may reference or link to it, but not reproduce it wholesale
              without permission.
            </p>
          ),
        },
        {
          heading: "No professional advice",
          body: (
            <p>
              Articles and content published on this site (including the
              Resources section) are general commentary, not specific security
              or engineering advice for your environment. Don't act on it as a
              substitute for a scoped engagement with our team.
            </p>
          ),
        },
        {
          heading: "Disclaimer and liability",
          body: (
            <p>
              This site is provided "as is" without warranties of any kind.
              [Standard limitation-of-liability language to be finalized by
              counsel based on applicable jurisdiction.]
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. Material changes
              will update the effective date at the top of this page.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms:{" "}
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
