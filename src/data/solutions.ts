import type { LucideIcon } from "lucide-react";
import { ClipboardCheck, TrendingUp, Rocket, Handshake } from "lucide-react";

export interface Solution {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  idealFor: string;
  includedServiceSlugs: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "soc2-readiness",
    name: "SOC 2 Readiness Program",
    icon: ClipboardCheck,
    tagline: "Get to audit-ready without guessing at scope.",
    description:
      "A structured path from wherever your security posture is today to a SOC 2 Type I or II audit — gap analysis, remediation support, and the evidence your auditor will actually ask for.",
    idealFor: "Growth-stage companies closing enterprise deals that require SOC 2.",
    includedServiceSlugs: [
      "enterprise-security-assessments",
      "continuous-security-programs",
      "secure-code-reviews",
    ],
  },
  {
    slug: "pre-funding-security-sprint",
    name: "Pre-Funding Security Sprint",
    icon: TrendingUp,
    tagline: "Walk into diligence with answers, not gaps.",
    description:
      "A compressed engagement that gets you a clean penetration test, a documented threat model, and a security narrative investors' technical diligence teams will accept without follow-up rounds of questions.",
    idealFor: "Startups heading into a funding round with technical due diligence.",
    includedServiceSlugs: ["vapt", "threat-modeling", "security-consulting"],
  },
  {
    slug: "secure-product-launch",
    name: "Secure Product Launch",
    icon: Rocket,
    tagline: "Ship the launch, not the incident that follows it.",
    description:
      "Security review integrated into your launch timeline — architecture review, focused testing on new surfaces, and a go/no-go security signoff before the public release date.",
    idealFor: "Teams shipping a new product, major feature, or public API.",
    includedServiceSlugs: ["app-security", "api-security", "secure-web-development"],
  },
  {
    slug: "ma-security-diligence",
    name: "M&A Security Due Diligence",
    icon: Handshake,
    tagline: "Know what you're actually acquiring.",
    description:
      "An independent security assessment of an acquisition target — infrastructure, application, and process risk — delivered on the diligence timeline, not a standard engagement timeline.",
    idealFor: "Acquirers evaluating the security posture of a target company.",
    includedServiceSlugs: ["enterprise-security-assessments", "cloud-security", "infrastructure-pentesting"],
  },
];

export function getSolutionBySlug(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
