import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { AmbientGlow } from "../components/ui/AmbientGlow";
import { accentClass } from "../lib/accent";
import { INDUSTRIES } from "../data/industries";
import { getServiceBySlug } from "../data/services";
import { ArrowRight } from "lucide-react";

export function Industries() {
  return (
    <>
      <Seo
        title="Industries"
        description="How Cyberspatz tailors security and engineering work to what actually puts financial services, healthcare, SaaS, retail, government, and logistics businesses at risk."
        path="/industries"
      />
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <AmbientGlow tone="mixed" className="w-[520px] h-[520px] -top-40 left-1/2 -translate-x-1/2 opacity-70" />
        <Container className="relative">
          <StatusBadge label="6 industries served" />
          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
            Different industries, different attack surfaces.
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[54ch] leading-relaxed">
            We tailor scope to what actually puts your business at risk —
            not a generic checklist run against every client the same way.
          </p>
        </Container>
      </section>

      <section className="hairline py-section">
        <Container>
          <div className="flex flex-col gap-px bg-border">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="bg-ink py-10 md:py-12"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-4">
                    <industry.icon size={22} className={accentClass(i)} strokeWidth={1.6} />
                    <h2 className="mt-5 text-xl font-display font-bold text-paper max-w-[16ch]">
                      {industry.name}
                    </h2>
                    <p className="mt-3 text-sm text-paper-dim leading-relaxed max-w-[38ch]">
                      {industry.description}
                    </p>
                  </div>

                  <div className="md:col-span-4">
                    <p className="label-mono mb-4">Where the risk concentrates</p>
                    <ul className="flex flex-col gap-2.5">
                      {industry.keyRisks.map((risk) => (
                        <li key={risk} className="text-sm text-paper-dim leading-relaxed flex gap-2.5">
                          <span className="text-signal mt-1.5 h-1 w-1 rounded-full bg-signal shrink-0" />
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4">
                    <p className="label-mono mb-4">Relevant services</p>
                    <ul className="flex flex-col gap-2.5">
                      {industry.relevantServiceSlugs.map((slug) => {
                        const service = getServiceBySlug(slug);
                        if (!service) return null;
                        return (
                          <li key={slug}>
                            <Link
                              to={`/services/${slug}`}
                              className="text-sm text-paper hover:text-signal-bright transition-colors inline-flex items-center gap-1.5"
                            >
                              {service.title}
                              <ArrowRight size={12} />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
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
                Don't see your industry listed?
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
                The list above reflects where we've done the most work —
                not the limit of what we take on. Tell us about your
                environment.
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
