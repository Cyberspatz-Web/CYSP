import type { LucideIcon } from "lucide-react";
import { Users2, GraduationCap, Bot } from "lucide-react";

export interface FutureProduct {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  plannedCapabilities: string[];
  useShenron: boolean;
}

// These are pre-launch. Copy is written as roadmap/vision, not as
// available features — see README before publishing.
export const FUTURE_PRODUCTS: FutureProduct[] = [
  {
    slug: "community",
    name: "Cyberspatz Community",
    icon: Users2,
    tagline: "Become a member — get invited to events, not just a newsletter.",
    description:
      "We're building a space for security and engineering practitioners to trade real findings, ask hard questions, and see how other teams actually handle the same problems — moderated by our own team, not left to run itself. Register below to become a member: you'll be first in line for meetups, AMAs, and workshops as we schedule them.",
    plannedCapabilities: [
      "Discussion threads organized by discipline, not just a general firehose",
      "Regular AMAs with our red team and engineering leads",
      "Local meetups and workshops in cities where we have a concentration of clients and team members",
      "Recognition for contributors who consistently help others",
    ],
    useShenron: true,
  },
  {
    slug: "academy",
    name: "Cyberspatz Academy",
    icon: GraduationCap,
    tagline: "Training built from real engagements, not generic curricula.",
    description:
      "Structured learning tracks drawn from what we actually see across assessments — not repackaged general security content. Built for engineers who want to think like an attacker and testers who want to think like a builder.",
    plannedCapabilities: [
      "Offensive Security Fundamentals — hands-on labs, not just slides",
      "Secure Development track for engineers who aren't security specialists",
      "Cloud Security Deep Dive covering the misconfigurations we find most",
      "Completion certificates tied to demonstrated lab work, not quiz scores",
    ],
    useShenron: true,
  },
  {
    slug: "ai",
    name: "Cyberspatz AI",
    icon: Bot,
    tagline: "An assistant for your security team, not a replacement for it.",
    description:
      "We're building AI tooling to help triage findings faster, draft first-pass remediation guidance, and summarize scan output — the repetitive parts of the job — so our human testers spend their time on the parts that actually require judgment.",
    plannedCapabilities: [
      "Finding triage and severity-consistency checks across large scan outputs",
      "First-draft remediation guidance for engineering teams to review and adapt",
      "Plain-language summaries of technical findings for non-technical stakeholders",
      "Every output reviewed by a human tester before it reaches a client",
    ],
    useShenron: false,
  },
];

export function getFutureProductBySlug(slug: string): FutureProduct | undefined {
  return FUTURE_PRODUCTS.find((p) => p.slug === slug);
}
