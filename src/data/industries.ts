import type { LucideIcon } from "lucide-react";
import { Landmark, HeartPulse, Boxes, ShoppingCart, Truck, Building } from "lucide-react";

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  keyRisks: string[];
  relevantServiceSlugs: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: Landmark,
    description:
      "Regulatory scrutiny, high-value fraud targets, and a sprawling web of third-party integrations — security has to hold up to an auditor and an attacker at the same time.",
    keyRisks: [
      "Third-party and vendor risk across integrations",
      "Fraud and transaction-layer abuse",
      "Regulatory examination readiness (PCI DSS, SOX-adjacent controls)",
    ],
    relevantServiceSlugs: ["vapt", "cloud-security", "continuous-security-programs"],
  },
  {
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    icon: HeartPulse,
    description:
      "Patient data, connected devices, and legacy clinical systems that can't simply be taken offline for testing — security work here has to respect operational reality.",
    keyRisks: [
      "Protected health information exposure",
      "Connected device and legacy system risk",
      "Third-party clinical software integrations",
    ],
    relevantServiceSlugs: ["app-security", "infrastructure-pentesting", "threat-modeling"],
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    icon: Boxes,
    description:
      "Multi-tenant architecture, public APIs, and a release cadence measured in days, not quarters — security has to move at the same speed as the product.",
    keyRisks: [
      "Cross-tenant data isolation failures",
      "API abuse and credential stuffing",
      "Supply-chain risk from dependencies and integrations",
    ],
    relevantServiceSlugs: ["saas-development", "api-security", "secure-code-reviews"],
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description:
      "Payment data, seasonal traffic spikes, and a checkout flow that can't afford downtime — security decisions here are measured against real revenue risk.",
    keyRisks: [
      "Payment and cardholder data exposure",
      "Seasonal traffic abuse and availability risk",
      "Third-party plugin and storefront integration risk",
    ],
    relevantServiceSlugs: ["app-security", "cloud-security", "vapt"],
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    icon: Truck,
    description:
      "Operational technology meeting IT systems, partner data feeds, and tracking integrity that the rest of the chain depends on being accurate.",
    keyRisks: [
      "OT/IT convergence at facility and fleet level",
      "Partner and EDI integration risk",
      "Tracking and inventory data integrity",
    ],
    relevantServiceSlugs: ["infrastructure-pentesting", "api-security", "enterprise-software"],
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    icon: Building,
    description:
      "Higher-tier threat actors, long-lived legacy systems, and citizen data that carries a different kind of consequence when it's exposed.",
    keyRisks: [
      "Advanced and persistent threat activity",
      "Legacy system modernization risk",
      "Citizen and constituent data protection",
    ],
    relevantServiceSlugs: ["red-teaming", "enterprise-security-assessments", "digital-transformation"],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
