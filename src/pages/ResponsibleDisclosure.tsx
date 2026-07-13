import { LegalPage } from "../components/legal/LegalPage";

export function ResponsibleDisclosure() {
  return (
    <LegalPage
      title="Responsible Disclosure"
      path="/security-disclosure"
      effectiveDate="[date to be set at launch]"
      draftNotice="The scope and process below follow standard industry practice and are safe to publish largely as-is. The one thing worth a lawyer's eyes specifically is the safe-harbor paragraph — it's what protects a good-faith researcher from legal action, and its exact wording carries real weight."
      intro="If you've found a security issue in a Cyberspatz-owned system, we want to hear about it. This page explains how to report it and what to expect from us."
      sections={[
        {
          heading: "Scope",
          body: (
            <ul>
              <li>In scope: cyberspatz.com and its subdomains, and any Cyberspatz-owned infrastructure explicitly listed here in the future.</li>
              <li>Out of scope: client systems and infrastructure — those are covered by each client's own disclosure policy, not this one. If you've found something in a system we built or tested for a client, contact that organization directly.</li>
              <li>Out of scope: social engineering, physical security testing, and denial-of-service testing against our systems, unless separately authorized in writing.</li>
            </ul>
          ),
        },
        {
          heading: "How to report",
          body: (
            <p>
              Email{" "}
              <a href="mailto:info@cyberspatz.com" className="text-signal hover:text-signal-bright">
                info@cyberspatz.com
              </a>{" "}
              with a description of the issue, steps to reproduce it, and its
              potential impact. Include a way to reach you back. If the report
              involves sensitive details, ask us for a PGP key before sending.
            </p>
          ),
        },
        {
          heading: "What to expect from us",
          body: (
            <ul>
              <li>Acknowledgment of your report within 2 business days.</li>
              <li>An initial assessment and expected timeline within 5 business days.</li>
              <li>Credit in a public acknowledgments page, if you'd like it, once the issue is resolved.</li>
              <li>We do not currently run a paid bug bounty program. [Update if that changes.]</li>
            </ul>
          ),
        },
        {
          heading: "Safe harbor",
          body: (
            <p>
              We will not pursue legal action against researchers who make a
              good-faith effort to comply with this policy — meaning you avoid
              privacy violations, data destruction, and service disruption,
              report issues promptly, and don't exploit a finding beyond what's
              necessary to demonstrate it. [This paragraph should be reviewed
              by counsel before publishing — safe-harbor language has real
              legal consequences and should be precise about what it does and
              doesn't cover.]
            </p>
          ),
        },
        {
          heading: "What we ask you not to do",
          body: (
            <ul>
              <li>Don't access, modify, or delete data that isn't yours.</li>
              <li>Don't run automated scanning that could degrade service for others.</li>
              <li>Don't publicly disclose an issue before we've had a reasonable chance to fix it — 90 days is a reasonable default absent other agreement.</li>
            </ul>
          ),
        },
      ]}
    />
  );
}
