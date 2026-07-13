import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { AmbientGlow } from "../components/ui/AmbientGlow";
import { accentClass } from "../lib/accent";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { PRINCIPLES, LEADERSHIP, COMPLIANCE } from "../data/about";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <>
      <Seo
        title="About"
        description="Cyberspatz puts engineers and security testers on the same team, working to the same standard — so building and securing software stop being separate phases."
        path="/about"
      />
      {/* Hero / mission */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 relative overflow-hidden">
        <AmbientGlow tone="mixed" className="w-[500px] h-[500px] -top-40 left-1/4 opacity-70" />
        <Container className="relative">
          <StatusBadge label="Founded on one idea" />
          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
            Most companies build first and secure later. We stopped
            separating the two.
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[58ch] leading-relaxed">
            Cyberspatz exists because that separation is where risk comes
            from — the gap between what gets shipped and what gets
            reviewed. We put engineers and security testers on the same
            team, working to the same standard, so the gap doesn't exist
            in the first place.
          </p>
        </Container>
      </section>

      {/* Principles */}
      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-4">How we operate</p>
          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-16">
            Principles that shape every engagement.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="border-r border-b border-border p-8"
              >
                <p.icon size={22} className={accentClass(i)} strokeWidth={1.6} />
                <h3 className="mt-6 text-base font-display font-semibold text-paper">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-paper-dim leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Compliance posture */}
      <section className="hairline py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="label-mono mb-4">Our own posture</p>
              <h2 className="text-display-md font-display font-bold max-w-[20ch]">
                We hold ourselves to the standard we sell.
              </h2>
            </div>
            <p className="text-paper-dim max-w-[38ch] leading-relaxed">
              Our own environment goes through the same review discipline
              we apply to client engagements.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {COMPLIANCE.map((c) => (
              <div key={c.label} className="border border-border-strong p-7">
                <c.icon size={20} className="text-signal" strokeWidth={1.6} />
                <p className="mt-5 text-sm font-semibold text-paper">{c.label}</p>
                <p className="mt-2 text-xs text-steel leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-4">Leadership</p>
          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-16">
            The team setting the standard.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {LEADERSHIP.map((person) => (
              <div key={person.role}>
                <div
                  className="h-16 w-16 flex items-center justify-center border border-border-strong text-signal font-display font-semibold text-lg"
                  aria-hidden="true"
                >
                  {person.initials}
                </div>
                <p className="mt-5 text-sm font-semibold text-paper">{person.name}</p>
                <p className="text-xs text-steel mt-1">{person.role}</p>
                <p className="mt-3 text-xs text-paper-dim leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA -> Careers */}
      <section className="py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong p-10 md:p-14">
            <div>
              <h2 className="text-display-md font-display font-bold max-w-[18ch]">
                Want to work this way?
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
                We're hiring engineers and security specialists who'd rather
                build it right the first time.
              </p>
            </div>
            <Link to="/careers" className="shrink-0">
              <Button size="lg" className="group">
                View Open Roles
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
