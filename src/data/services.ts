import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  ClipboardCheck,
  Swords,
  AppWindow,
  Plug,
  Smartphone,
  ServerCog,
  Cloud,
  FileSearch,
  Target,
  Radar,
  Users,
  Globe,
  Layers,
  Boxes,
  Building2,
  Bot,
  Workflow,
  Cpu,
} from "lucide-react";

export type ServiceCategory = "Security Services" | "Engineering";

// export interface Service {
//   slug: string;
//   category: ServiceCategory;
//   title: string;
//   tagline: string; // one line, used on overview cards
//   summary: string; // 2-3 sentences, used on detail hero
//   deliverables: string[]; // what the engagement produces
//   icon: LucideIcon;
// }
export interface Service {
  // ----------------------------
  // Core Identity
  // ----------------------------
  slug: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;

  // ----------------------------
  // Existing UI
  // ----------------------------
  deliverables: string[];

  // ----------------------------
  // SEO
  // ----------------------------
  seo?: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };

  // ----------------------------
  // Landing Page Content
  // ----------------------------
  overview?: string;

  businessValue?: string;

  scope?: string[];

  methodology?: {
    title: string;
    description: string;
  }[];

  frameworks?: string[];

  industries?: string[];

  compliance?: string[];

  benefits?: string[];

  tools?: string[];

  // ----------------------------
  // FAQ
  // ----------------------------
  faqs?: {
    question: string;
    answer: string;
  }[];

  // ----------------------------
  // Internal Linking
  // ----------------------------
  relatedServices?: string[];

  relatedResources?: string[];

  // ----------------------------
  // CTA
  // ----------------------------
  cta?: {
    heading: string;
    description: string;
    button: string;
  };
}
export const SERVICES: Service[] = [
  // ---- Security Services ----
  {
    slug: "vapt",
    category: "Security Services",
    title: "VAPT",
    tagline: "Vulnerability assessment and penetration testing, done properly.",
    summary:
      "We combine automated scanning with manual, adversarial testing across your applications, networks, and infrastructure — then hand you findings ranked by real business risk, not raw CVSS scores.",
    deliverables: [
      "Full-scope vulnerability assessment",
      "Manual penetration test of critical paths",
      "Risk-ranked findings report with reproduction steps",
      "Retest after remediation",
    ],
    icon: ShieldCheck,
  },
  {
    slug: "enterprise-security-assessments",
    category: "Security Services",
    title: "Enterprise Security Assessments",
    tagline: "A full picture of where your organization is exposed.",
    summary:
      "A structured review of your security posture across people, process, and technology — built for boards and security leaders who need an honest baseline before they invest.",
    deliverables: [
      "Posture assessment against a named framework (ISO 27001, SOC 2, NIST)",
      "Gap analysis with prioritized roadmap",
      "Executive summary for leadership and board reporting",
      "Working session to walk through findings",
    ],
    icon: ClipboardCheck,
  },
  {
    slug: "red-teaming",
    category: "Security Services",
    title: "Red Teaming",
    tagline:
      "Adversarial simulation that tests people, process, and infrastructure together.",
    summary:
      "We run a real attack campaign against your organization — not just your systems — to see what a motivated adversary would actually find, and whether your team would catch it.",
    deliverables: [
      "Scoped adversarial simulation (defined rules of engagement)",
      "Attack narrative and timeline",
      "Detection and response gap analysis",
      "Debrief with your blue team",
    ],
    icon: Swords,
  },
  {
    slug: "app-security",
    category: "Security Services",
    title: "App Security",
    tagline:
      "Security testing built around how your application actually works.",
    summary:
      "Deep-dive testing of your web and desktop applications' business logic, authentication, and data handling — beyond what automated scanners catch.",
    deliverables: [
      "Business logic and access-control testing",
      "OWASP Top 10 and beyond coverage",
      "Severity-ranked findings with fix guidance",
      "Developer walkthrough of key issues",
    ],
    icon: AppWindow,
  },
  {
    slug: "api-security",
    category: "Security Services",
    title: "API Security",
    tagline: "Testing for the interfaces your other systems trust.",
    summary:
      "REST, GraphQL, and internal APIs tested for broken authorization, data exposure, and abuse paths — the issues that don't show up in a functional test suite.",
    deliverables: [
      "Full API endpoint inventory and testing",
      "Authorization and object-level access testing",
      "Rate-limit and abuse-case testing",
      "Findings report mapped to OWASP API Top 10",
    ],
    icon: Plug,
  },
  {
    slug: "mobile-security",
    category: "Security Services",
    title: "Mobile Security",
    tagline: "iOS and Android testing that goes past the app store checklist.",
    summary:
      "Static and dynamic testing of your mobile applications, including local storage, API communication, and platform-specific attack paths.",
    deliverables: [
      "Static and dynamic analysis (iOS / Android)",
      "Local storage and data-at-rest review",
      "API and backend communication testing",
      "Findings report with platform-specific fixes",
    ],
    icon: Smartphone,
  },
  {
    slug: "infrastructure-pentesting",
    category: "Security Services",
    title: "Infrastructure Pentesting",
    tagline:
      "Network and systems testing across on-prem and hybrid environments.",
    summary:
      "External and internal network penetration testing that maps how far an attacker could actually move once inside — not just what's exposed at the perimeter.",
    deliverables: [
      "External perimeter penetration test",
      "Internal network and lateral-movement testing",
      "Segmentation and privilege-escalation review",
      "Prioritized remediation plan",
    ],
    icon: ServerCog,
  },
  {
    slug: "cloud-security",
    category: "Security Services",
    title: "Cloud Security",
    tagline:
      "Hardening for AWS, Azure, and GCP environments, not generic checklists.",
    summary:
      "A configuration and architecture review of your cloud environment — IAM, network boundaries, storage, and workload identity — tailored to how your team actually operates it.",
    deliverables: [
      "IAM and permissions review",
      "Network and workload boundary assessment",
      "Storage and data-exposure review",
      "Cloud-native remediation plan (Terraform/IaC-friendly)",
    ],
    icon: Cloud,
  },
  {
    slug: "secure-code-reviews",
    category: "Security Services",
    title: "Secure Code Reviews",
    tagline: "Manual review that finds what a linter can't.",
    summary:
      "Line-by-line review of critical code paths by engineers who write secure software for a living — focused on authentication, authorization, and data handling.",
    deliverables: [
      "Manual review of critical code paths",
      "Static analysis with triaged, de-duplicated results",
      "Secure coding guidance specific to your stack",
      "Fix verification pass",
    ],
    icon: FileSearch,
  },
  {
    slug: "threat-modeling",
    category: "Security Services",
    title: "Threat Modeling",
    tagline: "Design-stage security, before a single line of code ships.",
    summary:
      "A structured session with your architects to map trust boundaries, data flows, and attacker paths — so security decisions get made at design time, not in a post-launch pentest.",
    deliverables: [
      "System and data-flow diagrams",
      "Threat enumeration (STRIDE or equivalent)",
      "Mitigation plan mapped to your roadmap",
      "Living threat model your team can maintain",
    ],
    icon: Target,
  },
  {
    slug: "continuous-security-programs",
    category: "Security Services",
    title: "Continuous Security Programs",
    tagline: "Ongoing coverage, not a once-a-year audit.",
    summary:
      "A retained program of testing, monitoring, and advisory that runs alongside your release cycle — so new risk gets caught as it ships, not twelve months later.",
    deliverables: [
      "Recurring testing cadence aligned to your release cycle",
      "Continuous monitoring and alerting setup",
      "Quarterly posture reporting for leadership",
      "On-call security advisory access",
    ],
    icon: Radar,
  },
  {
    slug: "security-consulting",
    category: "Security Services",
    title: "Security Consulting",
    tagline: "A security partner in the room for the decisions that matter.",
    summary:
      "Fractional and project-based security leadership for teams that need senior judgment — on architecture reviews, vendor decisions, incident readiness, or board reporting — without a full-time hire.",
    deliverables: [
      "Security roadmap and prioritization",
      "Architecture and vendor risk review",
      "Incident readiness and tabletop exercises",
      "Board- and investor-ready reporting",
    ],
    icon: Users,
  },

  // ---- Engineering ----
  {
    slug: "secure-web-development",
    category: "Engineering",
    title: "Secure Web Development",
    tagline:
      "Web platforms built with security requirements from the first sprint.",
    summary:
      "Full-stack web application development where authentication, authorization, and data handling are engineered in from the architecture phase — reviewed by the same team that breaks into applications for a living.",
    deliverables: [
      "Architecture defined with security requirements up front",
      "Production build with CI-integrated security checks",
      "Internal security review before launch",
      "Documented handover to your engineering team",
    ],
    icon: Globe,
  },
  {
    slug: "secure-mobile-development",
    category: "Engineering",
    title: "Secure Mobile Development",
    tagline:
      "iOS and Android apps engineered against real device-level threats.",
    summary:
      "Native and cross-platform mobile development with secure local storage, certificate pinning, and hardened API communication built in from day one.",
    deliverables: [
      "Secure-by-design architecture (iOS / Android / cross-platform)",
      "Hardened local storage and API communication",
      "Pre-launch internal security testing",
      "App-store-ready release package",
    ],
    icon: Layers,
  },
  {
    slug: "saas-development",
    category: "Engineering",
    title: "SaaS Development",
    tagline:
      "Multi-tenant platforms built to scale without scaling your exposure.",
    summary:
      "End-to-end SaaS product development — tenant isolation, billing, and access control designed correctly the first time, so growth doesn't mean re-architecting security later.",
    deliverables: [
      "Multi-tenant architecture with proper data isolation",
      "Role-based access control and billing integration",
      "Scalable infrastructure setup (IaC-managed)",
      "Launch-ready platform with documentation",
    ],
    icon: Boxes,
  },
  {
    slug: "erp-crm",
    category: "Engineering",
    title: "ERP & CRM",
    tagline: "Enterprise systems that fit how your business actually runs.",
    summary:
      "Custom ERP and CRM builds and integrations for teams that have outgrown off-the-shelf tools — with the access control and audit trails enterprise data requires.",
    deliverables: [
      "Requirements mapping against existing workflows",
      "Custom build or integration with existing systems",
      "Role-based access and audit logging",
      "Team training and documentation",
    ],
    icon: Building2,
  },
  {
    slug: "ai-automation",
    category: "Engineering",
    title: "AI & Automation",
    tagline:
      "AI-driven workflows built with the same security discipline as everything else.",
    summary:
      "Automation and AI-assisted tooling for internal workflows and customer-facing products — with data handling, model access, and output review treated as security surfaces, not afterthoughts.",
    deliverables: [
      "Workflow and automation architecture",
      "Model integration with data-handling review",
      "Guardrails for AI-assisted or AI-facing features",
      "Monitoring for automated processes",
    ],
    icon: Bot,
  },
  {
    slug: "digital-transformation",
    category: "Engineering",
    title: "Digital Transformation",
    tagline: "Modernization programs that don't trade speed for exposure.",
    summary:
      "Legacy system modernization and process digitization run as a joint engineering-and-security program, so the new system isn't a bigger target than the one it replaced.",
    deliverables: [
      "Current-state assessment and modernization roadmap",
      "Phased migration plan with rollback points",
      "Security review at each migration phase",
      "Change management and team enablement",
    ],
    icon: Workflow,
  },
  {
    slug: "enterprise-software",
    category: "Engineering",
    title: "Custom Enterprise Software",
    tagline:
      "Purpose-built software for the workflows off-the-shelf tools don't cover.",
    summary:
      "Bespoke enterprise software development — from internal tooling to customer-facing platforms — engineered, tested, and hardened by one accountable team end to end.",
    deliverables: [
      "Requirements and architecture definition",
      "Full-cycle build with security review gates",
      "Integration with existing enterprise systems",
      "Ongoing support and enhancement options",
    ],
    icon: Cpu,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}
