import type { LucideIcon } from "lucide-react";
import { Search, Lock, FileSearch, Cpu, Globe2 } from "lucide-react";

export interface EventDomain {
  name: string;
  icon: LucideIcon;
}

export interface EventCollaborator {
  name: string;
  role: string;
  logo: string;
  website: string;
}

export interface CyberspatzEvent {
  slug: string;
  title: string;
  subtitle: string;
  status: "upcoming" | "live" | "completed";

  /** Display strings, used in copy */
  date: string;
  timeRange: string;
  mode: "Online" | "Offline" | "Hybrid";
  location?: string;
  entryFee: string;

  /** ISO instants (with offset), used only for structured data — keep in sync with date/timeRange above */
  startDateTime: string;
  endDateTime: string;

  domains: EventDomain[];
  audience: string;
  description: string;

  organizers: string[];
  collaborators: EventCollaborator[];

  registrationUrl: string;
  secondaryConfirmUrl?: string;
  secondaryConfirmNote?: string;

  /**
   * Event-specific contact, as printed on the actual event poster/promo
   * copy (atscyberspatz@gmail.com) — deliberately NOT normalized to
   * info@cyberspatz.com, since this is the real address already public
   * on marketing material for this event. Worth reconciling with the
   * main site's single-inbox convention at some point, but silently
   * swapping it here would break an address people already have.
   */
  contactEmail: string;

  /**
   * Poster asset — place the uploaded Instagram poster at this path
   * (public/events/ctf-signal-poster.png) for this to resolve. Not
   * included in this code delivery since only code/filenames were
   * requested.
   */
  posterImage: string;
}

export const EVENTS: CyberspatzEvent[] = [
  {
    slug: "ctf-signal",
    title: "Cyberspatz CTF: SIGNAL",
    subtitle:
      "An intensive capture-the-flag competition testing real offensive security skills — not another certificate farm.",
    status: "completed",

    date: "30 November 2025",
    timeRange: "2:00 PM – 7:00 PM IST",
    mode: "Online",
    entryFee: "₹100",

    startDateTime: "2025-11-30T14:00:00+05:30",
    endDateTime: "2025-11-30T19:00:00+05:30",

    domains: [
      { name: "OSINT", icon: Search },
      { name: "Cryptography", icon: Lock },
      { name: "Forensics", icon: FileSearch },
      { name: "Reverse Engineering", icon: Cpu },
      { name: "Web Exploitation", icon: Globe2 },
    ],

    audience:
      "Open to everyone — students, professionals, and enthusiasts. No age bar, no prerequisites, no prior CTF experience required.",

    description:
      "Cyberspatz, in collaboration with OWASP Bhopal, is hosting CTF SIGNAL — a five-domain capture-the-flag competition for anyone who wants to prove real hacking skills. Compete across OSINT, cryptography, forensics, reverse engineering, and web exploitation for cash prizes, certification rewards, and leaderboard glory.",

    organizers: ["Cyberspatz", "OWASP Bhopal"],
    collaborators: [
      {
        name: "OWASP Bhopal Chapter",
        role: "Community & Prizes Partner",
        logo: "/events/logos/owasp-bhopal.png",
        website: "",
      },
      {
        name: "CTF7",
        role: "Platform Partner",
        logo: "/events/logos/ctf7.jpeg",
        website: "",
      },
      {
        name: "Barracks Army",
        role: "Platform & Challenge Partner",
        logo: "/events/logos/barracks-army.png",
        website: "",
      },
      {
        name: "Altered Security",
        role: "Certification Prizes Partner",
        logo: "/events/logos/altered-security.webp",
        website: "",
      },
    ],

    registrationUrl: "https://konfhub.com/cyberspatz-ctf-signal",
    secondaryConfirmUrl:
      "https://www.meetup.com/owasp-bhopal-chapter/events/311925754",
    secondaryConfirmNote:
      "After registering, also confirm your spot on Meetup — share your ticket number there and use the same details you registered with.",

    contactEmail: "info@cyberspatz.com",
    posterImage: "/events/ctf-signal-poster.png",
  },
];

export function getEventBySlug(slug: string): CyberspatzEvent | undefined {
  return EVENTS.find((e) => e.slug === slug);
}
