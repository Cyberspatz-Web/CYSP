import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { AmbientGlow } from "../components/ui/AmbientGlow";
import { accentClass } from "../lib/accent";
import { getServicesByCategory, type ServiceCategory } from "../data/services";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const CATEGORIES: { name: ServiceCategory; description: string }[] = [
  {
    name: "Security Services",
    description:
      "Offensive testing, assessments, and advisory for teams that need an honest read on their exposure.",
  },
  {
    name: "Engineering",
    description:
      "Software built by engineers who think like attackers — so security isn't a phase you add later.",
  },
];

export function ServicesOverview() {
  return (
    <>
      <Seo
        title="Services"
        description="19 security and engineering service lines — VAPT, red teaming, cloud security, secure development, and more — all run through one review standard."
        path="/services"
      />
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <AmbientGlow tone="mixed" className="w-[520px] h-[520px] -top-40 left-1/2 -translate-x-1/2 opacity-70" />
        <Container className="relative">
          <StatusBadge label="19 active service lines" />
          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
            Every service runs through one standard.
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[54ch] leading-relaxed">
            Whether we're breaking into your systems or building them, the
            same team, the same review gates, and the same bar for evidence
            apply. Explore by what you need next.
          </p>
        </Container>
      </section>

      {CATEGORIES.map((cat, catIndex) => (
        <section key={cat.name} className="hairline py-section relative overflow-hidden">
          <AmbientGlow
            tone={catIndex % 2 === 0 ? "blue" : "amber"}
            className="w-[440px] h-[440px] -top-20 -right-40 opacity-60"
          />
          <Container className="relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="label-mono mb-4">{cat.name}</p>
                <h2 className="text-display-md font-display font-bold max-w-[22ch]">
                  {cat.name === "Security Services"
                    ? "Find out what an attacker would find."
                    : "Build it right, so testing finds less."}
                </h2>
              </div>
              <p className="text-paper-dim max-w-[38ch] leading-relaxed">
                {cat.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
              {getServicesByCategory(cat.name).map((service, i) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="group block h-full border-r border-b border-border p-8 hover:bg-ink-raised/50 transition-colors"
                  >
                    <service.icon size={22} className={accentClass(i)} strokeWidth={1.6} />
                    <h3 className="mt-6 text-base font-display font-semibold text-paper flex items-center gap-1.5">
                      {service.title}
                      <ArrowUpRight
                        size={15}
                        className="text-steel opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                      />
                    </h3>
                    <p className="mt-3 text-sm text-paper-dim leading-relaxed">
                      {service.tagline}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong p-10 md:p-14">
            <div>
              <h2 className="text-display-md font-display font-bold max-w-[20ch]">
                Not sure which service you need?
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
                Tell us what you're trying to protect or build — we'll scope
                the right engagement, not just sell you the biggest one.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button size="lg" className="group">
                Talk to Security Team
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
