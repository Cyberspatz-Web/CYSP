import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Home,
  HeartPulse,
  TrendingUp,
  Users2,
  ShieldAlert,
} from "lucide-react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: Home,
    title: "Remote-first, globally",
    description:
      "Work from wherever you do your best work. We coordinate across time zones by default, not as an exception.",
  },
  {
    icon: GraduationCap,
    title: "Research and certification time",
    description:
      "Paid time and budget for CVEs, conference talks, and certifications — offensive skills atrophy if you don't use them.",
  },
  {
    icon: HeartPulse,
    title: "Health coverage that travels with you",
    description:
      "Comprehensive health coverage regardless of where you're based.",
  },
  {
    icon: TrendingUp,
    title: "Equity for every role",
    description:
      "Everyone who joins owns part of what they're building — not just leadership and sales.",
  },
  {
    icon: ShieldAlert,
    title: "No-blame incident culture",
    description:
      "When something breaks — ours or a client's — we run a blameless retro. Fear doesn't make systems safer.",
  },
  {
    icon: Users2,
    title: "Small teams, real ownership",
    description:
      "Engagements run lean. You'll own outcomes, not just tickets.",
  },
];

export interface OpenRole {
  title: string;
  department: "Engineering" | "Security" | "Business & Operations";
  location: string;
  type: "Full-time" | "Contract";
  remote: boolean;
}

export const OPEN_ROLES: OpenRole[] = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Secure Mobile Engineer (iOS/Android)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
  {
    title: "DevSecOps / Platform Engineer",
    department: "Engineering",
    location: "Berlin, DE",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Red Team Operator",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Cloud Security Engineer",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
  {
    title: "Application Security Consultant",
    department: "Security",
    location: "London, UK",
    type: "Contract",
    remote: false,
  },
  {
    title: "Enterprise Account Executive",
    department: "Business & Operations",
    location: "New York, US",
    type: "Full-time",
    remote: false,
  },
  {
    title: "Technical Program Manager",
    department: "Business & Operations",
    location: "Remote",
    type: "Full-time",
    remote: true,
  },
];

export function getRolesByDepartment(department: OpenRole["department"]) {
  return OPEN_ROLES.filter((r) => r.department === department);
}

export const DEPARTMENTS: OpenRole["department"][] = [
  "Engineering",
  "Security",
  "Business & Operations",
];
