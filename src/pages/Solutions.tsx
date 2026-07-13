import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { AmbientGlow } from "../components/ui/AmbientGlow";
import { accentClass } from "../lib/accent";
import { SOLUTIONS } from "../data/solutions";
import { getServiceBySlug } from "../data/services";
import { ArrowRight } from "lucide-react";

export function Solutions() {
  return (
    <>
      <Seo
        title="Solutions"
        description="Outcome-driven Cyberspatz engagements — SOC 2 readiness, pre-funding security sprints, secure product launches, and M&A security due diligence."
        path="/solutions"
      />
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <AmbientGlow tone="amber" className="w-[480px] h-[480px] -top-32 -right-32 opacity-70" />
        <Container className="relative">
          <StatusBadge label="Outcome-driven engagements" />
          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
            Scoped around the outcome you need, not a service menu.
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[54ch] leading-relaxed">
            Some situations call for a specific combination of services
            delivered together, on a deadline that isn't ours to set. These
            are the ones we see most often.
          </p>
        </Container>
      </section>

      <section className="hairline py-section">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {SOLUTIONS.map((solution, i) => (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="border border-border-strong p-8 md:p-10 flex flex-col"
              >
                <solution.icon size={24} className={accentClass(i)} strokeWidth={1.6} />
                <h2 className="mt-6 text-xl font-display font-bold text-paper">
                  {solution.name}
                </h2>
                <p className="mt-2 text-sm text-signal-bright">{solution.tagline}</p>
                <p className="mt-4 text-sm text-paper-dim leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-6 hairline pt-6">
                  <p className="label-mono mb-3">Ideal for</p>
                  <p className="text-sm text-paper-dim leading-relaxed">{solution.idealFor}</p>
                </div>

                <div className="mt-6">
                  <p className="label-mono mb-3">Includes</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.includedServiceSlugs.map((slug) => {
                      const service = getServiceBySlug(slug);
                      if (!service) return null;
                      return (
                        <Link
                          key={slug}
                          to={`/services/${slug}`}
                          className="text-xs font-mono uppercase tracking-wide text-paper-dim hover:text-signal-bright border border-border px-2.5 py-1.5 transition-colors"
                        >
                          {service.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link to="/contact" className="mt-8">
                  <Button variant="secondary" className="group w-full sm:w-auto">
                    Scope This
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong p-10 md:p-14">
            <div>
              <h2 className="text-display-md font-display font-bold max-w-[20ch]">
                None of these quite fit?
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
                Most engagements start as a conversation, not a package
                selection. Tell us what you're working toward.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button size="lg">Talk to Security Team</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
