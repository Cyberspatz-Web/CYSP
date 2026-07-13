import type { LucideIcon } from "lucide-react";
import {
  Target,
  FileSearch,
  Boxes,
  Swords,
  Cloud,
  Radar,
} from "lucide-react";

export type ArticleCategory = "Security" | "Engineering" | "Company";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  tags: string[];
  date: string; // ISO
  readTime: string;
  icon: LucideIcon;
  content: string[]; // paragraphs
}

export const ARTICLES: Article[] = [
  {
    slug: "threat-modeling-in-sprint-planning",
    title: "Why Threat Modeling Belongs in Sprint Planning",
    excerpt:
      "Most teams treat threat modeling as a pre-launch checkbox. Moved earlier, it changes what gets built, not just what gets flagged.",
    category: "Security",
    tags: ["Threat Modeling", "Process"],
    date: "2026-06-02",
    readTime: "5 min",
    icon: Target,
    content: [
      "Threat modeling usually shows up at the wrong time — after the architecture is settled, when a security review is scheduled because launch is close. By then, the findings are mostly cosmetic. The trust boundaries were already drawn weeks earlier, in a design doc nobody flagged as a security decision.",
      "Moving the exercise into sprint planning changes what it can do. When an engineer sketches a new data flow and someone asks 'what happens if this token leaks' in the same meeting, the answer becomes a design choice instead of a remediation ticket. The cost of the fix is the cost of moving a box on a whiteboard, not rewriting an auth layer three weeks before launch.",
      "This doesn't require a formal STRIDE session for every ticket. A five-minute version — who can reach this, what do they get if they do, what would we notice — catches most of what matters. Save the full exercise for genuinely new trust boundaries: a new integration, a new tenant model, a new class of user.",
      "The teams that do this well don't have a bigger security team. They just stopped treating 'secure' and 'done' as two separate approvals.",
    ],
  },
  {
    slug: "cost-of-skipping-secure-code-review",
    title: "The Hidden Cost of Skipping Secure Code Review",
    excerpt:
      "A missed access-control bug rarely shows up in the sprint it was written. It shows up in the incident report, months later.",
    category: "Security",
    tags: ["Secure Code Review", "Engineering Culture"],
    date: "2026-05-14",
    readTime: "4 min",
    icon: FileSearch,
    content: [
      "Code review catches typos, style issues, and logic bugs reliably. It catches access-control mistakes much less reliably, because the reviewer is usually checking 'does this do what the ticket asked' — not 'can this be reached by someone who shouldn't reach it.' Those are different questions, and most PR templates only ask the first one.",
      "The bugs that get through are rarely exotic. An endpoint that checks the user is authenticated but not that they own the resource. A feature flag that's meant to be internal-only, gated only in the UI. A batch job that trusts an ID passed in from the client. None of these fail a functional test. All of them fail a five-minute adversarial read.",
      "What changes the outcome isn't a bigger review checklist — it's asking one extra question on the PRs that touch data access: 'if I were logged in as someone else, what would this let me do.' That single lens catches a disproportionate share of what a real attacker would find later, for free, before it ships.",
    ],
  },
  {
    slug: "multi-tenant-data-isolation",
    title: "Multi-Tenant SaaS: Getting Data Isolation Right the First Time",
    excerpt:
      "Retrofitting tenant isolation after your first cross-tenant bug is expensive. Here's what to decide before you write the schema.",
    category: "Engineering",
    tags: ["SaaS", "Architecture"],
    date: "2026-04-22",
    readTime: "6 min",
    icon: Boxes,
    content: [
      "Every multi-tenant SaaS product eventually has to answer the same question: what actually stops tenant A's query from returning tenant B's row? Row-level security in the database, a tenant_id filter enforced in application code, or fully separate schemas per tenant are all valid answers — but they carry very different failure modes if a developer forgets a WHERE clause at 2am.",
      "Application-level filtering is the fastest to build and the easiest to get wrong, because it depends on every query, forever, remembering to include the filter. Database-level row security moves that guarantee into infrastructure, so a missed filter fails safe instead of failing open. Schema-per-tenant is the strongest isolation and the most operationally expensive — worth it for regulated data, often overkill otherwise.",
      "The decision that matters most isn't which pattern you pick; it's picking one deliberately, in the architecture phase, instead of discovering the answer implicitly three months in when someone asks 'wait, how are we actually preventing this.'",
      "Test for it directly, too. A cross-tenant access test — log in as tenant A, try to fetch tenant B's resource by ID — belongs in your test suite the same way an auth test does. Most teams have the latter and not the former.",
    ],
  },
  {
    slug: "what-a-red-team-engagement-looks-like",
    title: "What a Red Team Engagement Actually Looks Like",
    excerpt:
      "Not a pentest with a different name. A walk through how a real adversarial simulation runs, week by week.",
    category: "Security",
    tags: ["Red Teaming"],
    date: "2026-03-30",
    readTime: "5 min",
    icon: Swords,
    content: [
      "A penetration test answers 'what vulnerabilities exist.' A red team engagement answers a different question: 'if someone genuinely wanted in, would we notice, and how far would they get.' The scope, pacing, and rules of engagement are built around that question, not around finding the maximum number of findings.",
      "The first week is usually reconnaissance — the same open-source research an actual attacker would do, without touching anything. What's exposed, who works there, what's been leaked in a past breach elsewhere. The next phase tests an initial access path, quietly, the way a patient adversary would rather than the way a scanner would.",
      "What follows — lateral movement, privilege escalation, reaching whatever the agreed 'crown jewel' target is — happens slowly enough to test whether detection tooling and the security team notice, not just whether the systems are technically breakable. That's the actual deliverable: not a vulnerability list, but an honest answer about detection and response.",
      "The debrief matters as much as the campaign. A red team exercise that ends with a report and no working session with the blue team wastes most of its value.",
    ],
  },
  {
    slug: "cloud-iam-mistakes-we-keep-finding",
    title: "Cloud IAM Mistakes We Keep Finding",
    excerpt:
      "Across dozens of cloud security reviews, the same handful of permission mistakes account for most of the real risk.",
    category: "Security",
    tags: ["Cloud Security", "IAM"],
    date: "2026-03-11",
    readTime: "4 min",
    icon: Cloud,
    content: [
      "Wildcard permissions granted 'temporarily' during a migration and never revisited are, by a wide margin, the most common finding in cloud environments we review. They're easy to justify in the moment and easy to forget about, because nothing breaks when they're left in place — until something does.",
      "Service accounts with standing access instead of just-in-time elevation are a close second. A CI pipeline that can deploy to production doesn't need to be able to read every secret in the account year-round; it needs that access for the seconds a deploy takes.",
      "The third pattern is trust boundaries that exist on a diagram but not in policy — a 'staging' account that can, technically, assume a role into production because nobody removed the cross-account trust after the migration finished.",
      "None of these require exotic tooling to catch. They require someone to actually read the IAM policy attached to a role, instead of trusting the name of the role to describe what it can do.",
    ],
  },
  {
    slug: "continuous-security-without-slowing-releases",
    title: "Building a Continuous Security Program Without Slowing Releases",
    excerpt:
      "Annual audits and fast release cycles don't mix well. Here's what a security program looks like when it runs alongside shipping, not against it.",
    category: "Company",
    tags: ["Continuous Security", "DevSecOps"],
    date: "2026-02-18",
    readTime: "5 min",
    icon: Radar,
    content: [
      "An annual pentest tells you about the risk your last big release introduced, roughly a year after you shipped it. For a team releasing weekly, that's not a security program — it's a single data point, stale before the report is even delivered.",
      "A continuous program replaces the single large event with smaller, constant ones: automated scanning on every PR, a rotating manual review of the highest-risk changes each sprint, and a scheduled deeper assessment quarterly instead of annually. The goal isn't more total testing — it's testing that matches the actual cadence of change.",
      "The part teams underestimate is reporting. A quarterly one-page summary that a board member can actually read does more for organizational buy-in than a 200-page annual report that gets skimmed once and filed away.",
      "Done well, this doesn't slow releases down. It moves the friction earlier, into the PR, where a finding costs an hour instead of an incident.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
