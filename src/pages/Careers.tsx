import { motion } from "framer-motion";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { AmbientGlow } from "../components/ui/AmbientGlow";
import { accentClass } from "../lib/accent";
import { Button } from "../components/ui/Button";
import { StatusBadge } from "../components/ui/StatusBadge";
import { BENEFITS, TALENT_AREAS } from "../data/careers";
// import { Clock, MapPin, Globe } from "lucide-react";

function applyHref(title: string) {
  const subject = encodeURIComponent(`Application: ${title}`);
  const body = encodeURIComponent(
    "Hi Cyberspatz team,\n\nI'm interested in the " +
      title +
      " role. A bit about me:\n\n",
  );
  return `mailto:career@cyberspatz.com?subject=${subject}&body=${body}`;
}

export function Careers() {
  return (
    <>
      <Seo
        title="Careers"
        description="Open roles across engineering, security, and business operations at Cyberspatz — remote-first, with real ownership."
        path="/careers"
      />
      <section className="pt-40 pb-24 md:pt-48 md:pb-28 relative overflow-hidden">
        <AmbientGlow
          tone="blue"
          className="w-[480px] h-[480px] -top-32 -right-24 opacity-70"
        />
        <Container className="relative">
          <StatusBadge label="Always looking for exceptional talent" />
          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
            Build the standard, don't just meet it.
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[56ch] leading-relaxed">
            We're a small team of engineers and security specialists who'd
            rather ship something correct once than fast three times. If that
            sounds like your kind of work, take a look below.
          </p>
        </Container>
      </section>

      {/* Benefits */}
      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-4">Why here</p>
          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-16">
            What you get for doing your best work.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="border-r border-b border-border p-8"
              >
                <b.icon
                  size={22}
                  className={accentClass(i)}
                  strokeWidth={1.6}
                />
                <h3 className="mt-6 text-base font-display font-semibold text-paper">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-paper-dim leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      {/* Talent Network */}
      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-4">Talent Network</p>

          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-10">
            We aren't hiring today.
          </h2>

          <p className="text-paper-dim max-w-[60ch] leading-relaxed mb-16">
            We don't keep permanent vacancies open. Instead, we maintain a
            network of exceptional people that we reach out to when projects,
            research initiatives, or full-time opportunities arise.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {TALENT_AREAS.map((area) => (
              <div key={area.title} className="border border-border-strong p-8">
                <h3 className="text-lg font-display font-semibold text-paper">
                  {area.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {area.roles.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-3 text-paper-dim"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* Fallback CTA */}
      <section className="py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong p-10 md:p-14">
            <div>
              <h2 className="text-display-md font-display font-bold max-w-[18ch]">
                Join Our Talent Network
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
                If your expertise aligns with what we build, we'd like to know
                you before we need you. Introduce yourself and we'll reach out
                when the right opportunity arises.
              </p>
            </div>
            <a href={applyHref("General Application")} className="shrink-0">
              <Button size="lg">Introduce Yourself</Button>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
