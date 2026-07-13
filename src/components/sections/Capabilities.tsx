import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { AmbientGlow } from "../ui/AmbientGlow";
import { accentClass } from "../../lib/accent";
import {
  ShieldCheck,
  Swords,
  Cloud,
  Code2,
  Smartphone,
  Network,
  ArrowUpRight,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: ShieldCheck,
    title: "VAPT & Security Assessments",
    description:
      "Structured vulnerability assessment and penetration testing across your full attack surface.",
    href: "/services/vapt",
  },
  {
    icon: Swords,
    title: "Red Teaming",
    description:
      "Adversarial simulation that tests people, process, and infrastructure together.",
    href: "/services/red-teaming",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Security",
    description:
      "Hardening for cloud-native and hybrid environments, from IAM to network boundaries.",
    href: "/services/cloud-security",
  },
  {
    icon: Code2,
    title: "Secure Software Engineering",
    description:
      "Web, mobile, and SaaS platforms built with security requirements from the first sprint.",
    href: "/services/secure-web-development",
  },
  {
    icon: Smartphone,
    title: "Application & API Security",
    description:
      "Code review, threat modeling, and testing for the applications and APIs you ship.",
    href: "/services/app-security",
  },
  {
    icon: Network,
    title: "Continuous Security Programs",
    description:
      "Ongoing coverage — not a once-a-year audit — with reporting your board can read.",
    href: "/services/continuous-security-programs",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="hairline py-section relative overflow-hidden">
      <Container className="relative">
        <AmbientGlow tone="amber" className="w-[420px] h-[420px] -top-20 -left-40 opacity-50" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label-mono mb-4">What we do</p>
            <h2 className="text-display-md font-display font-bold max-w-[20ch]">
              One team for building and defending your systems.
            </h2>
          </div>
          <p className="text-paper-dim max-w-[38ch] leading-relaxed">
            Every engagement — offensive or engineering — runs through the
            same security review standard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            >
              <Link
                to={cap.href}
                className="group block h-full border-r border-b border-border p-8 hover:bg-ink-raised/50 transition-colors"
              >
                <cap.icon size={22} className={accentClass(i)} strokeWidth={1.6} />
                <h3 className="mt-6 text-base font-display font-semibold text-paper flex items-center gap-1.5">
                  {cap.title}
                  <ArrowUpRight
                    size={15}
                    className="text-steel opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  />
                </h3>
                <p className="mt-3 text-sm text-paper-dim leading-relaxed">
                  {cap.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
