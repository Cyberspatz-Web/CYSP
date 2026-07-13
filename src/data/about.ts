import {
  Gem,
  Building2,
  Sparkles,
  Cpu,
  ShieldCheck,
  Layers,
  Globe2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Principle {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Derived from the brand principles in the project constitution —
// written as what they mean in practice, not restated as adjectives.
export const PRINCIPLES: Principle[] = [
  {
    icon: ShieldCheck,
    title: "Security is a design constraint, not a feature",
    description:
      "It gets decided at architecture time, alongside performance and cost — not reviewed in afterward.",
  },
  {
    icon: Gem,
    title: "Evidence over assurances",
    description:
      "Every finding ships with reproduction steps. Every claim about a system is something we can show you, not just tell you.",
  },
  {
    icon: Building2,
    title: "Built for the enterprise you're becoming",
    description:
      "We design for the scale and compliance posture you'll need in two years, not just the launch you need next month.",
  },
  {
    icon: Layers,
    title: "One team, one standard",
    description:
      "The engineers who build your systems and the testers who break into them report to the same bar. Nothing ships unreviewed.",
  },
  {
    icon: Sparkles,
    title: "Restraint is a feature",
    description:
      "We recommend the smallest fix that closes the risk, not the largest engagement that fits our roadmap.",
  },
  {
    icon: Cpu,
    title: "Plain reporting",
    description:
      "Findings are written so a board member and an engineer can both act on them — no severity theater, no jargon padding.",
  },
];

export interface LeadershipMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
}

// Semantic placeholders — replace with real leadership bios and photos
// when supplied. Names are illustrative, not real people.
export const LEADERSHIP: LeadershipMember[] = [
  {
    initials: "AK",
    name: "Leadership Name",
    role: "Chief Executive Officer",
    bio: "Placeholder bio — background in enterprise security leadership.",
  },
  {
    initials: "MR",
    name: "Leadership Name",
    role: "Chief Technology Officer",
    bio: "Placeholder bio — background in secure software architecture.",
  },
  {
    initials: "SP",
    name: "Leadership Name",
    role: "Head of Offensive Security",
    bio: "Placeholder bio — background in red teaming and adversarial simulation.",
  },
  {
    initials: "JD",
    name: "Leadership Name",
    role: "Head of Engineering",
    bio: "Placeholder bio — background in large-scale platform engineering.",
  },
];

export interface ComplianceItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

// Placeholder only. Framed as roadmap/posture language ("working toward",
// "aligned with") rather than a claimed certification, since no
// certificate has been supplied. Replace with real, verified status
// (and the certifying body's badge/reference) before this goes live —
// publishing an unverified certification claim is a compliance risk in
// itself. See README "Compliance & certification claims" note.
export const COMPLIANCE: ComplianceItem[] = [
  {
    icon: ShieldCheck,
    label: "Working toward ISO 27001",
    description: "Information security management, in progress",
  },
  {
    icon: Globe2,
    label: "GDPR-aligned data handling",
    description: "Applied across EU-facing engagements",
  },
  {
    icon: Building2,
    label: "SOC 2 readiness program",
    description: "Underway — details available on request",
  },
];
