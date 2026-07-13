import { Link, useParams, Navigate } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Approach } from "../components/sections/Approach";
import { getServiceBySlug, getServicesByCategory } from "../data/services";
import { ArrowLeft, ArrowRight, Check, ArrowUpRight } from "lucide-react";

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={service.title}
        description={service.summary}
        path={`/services/${service.slug}`}
      />
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-steel hover:text-paper-dim transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            All services
          </Link>

          <p className="label-mono mb-4">{service.category}</p>
          <h1 className="text-display-lg font-display font-extrabold max-w-[20ch]">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[56ch] leading-relaxed">
            {service.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                Scope This Engagement
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="secondary">
                Compare Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="hairline py-section">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="label-mono mb-4">What you get</p>
              <h2 className="text-display-md font-display font-bold max-w-[16ch]">
                Deliverables
              </h2>
            </div>
            <ul className="md:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-signal mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-paper-dim leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Approach />

      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-4">Related</p>
          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-14">
            Other {service.category.toLowerCase()}
          </h2>

          <div className="grid md:grid-cols-3 border-t border-l border-border">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="group block border-r border-b border-border p-8 hover:bg-ink-raised/50 transition-colors"
              >
                <r.icon size={22} className="text-signal" strokeWidth={1.6} />
                <h3 className="mt-6 text-base font-display font-semibold text-paper flex items-center gap-1.5">
                  {r.title}
                  <ArrowUpRight
                    size={15}
                    className="text-steel opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  />
                </h3>
                <p className="mt-3 text-sm text-paper-dim leading-relaxed">{r.tagline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong p-10 md:p-14">
            <div>
              <h2 className="text-display-md font-display font-bold max-w-[18ch]">
                Ready to scope {service.title.toLowerCase()}?
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed">
                Tell us about your environment and timeline — we'll come back
                with a fixed scope, not a vague proposal.
              </p>
            </div>
            <Link to="/contact" className="shrink-0">
              <Button size="lg" className="group">
                Request a Demo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
