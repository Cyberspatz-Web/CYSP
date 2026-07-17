import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { StatusBadge } from "../ui/StatusBadge";
import { AmbientGlow } from "../ui/AmbientGlow";
import { accentClass } from "../../lib/accent";
import type { CyberspatzEvent } from "../../data/events";
import {
  Calendar,
  Clock,
  Globe,
  Ticket,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const STATUS_LABEL: Record<CyberspatzEvent["status"], string> = {
  upcoming: "Registration open",
  live: "Happening now",
  completed: "Event completed",
};

export function EventFullView({ event }: { event: CyberspatzEvent }) {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        <AmbientGlow
          tone="mixed"
          className="w-[520px] h-[520px] -top-40 left-1/2 -translate-x-1/2 opacity-70"
        />
        <Container className="relative">
          <StatusBadge label={STATUS_LABEL[event.status]} />

          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[22ch]">
            {event.title}
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[58ch] leading-relaxed">
            {event.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3">
            <span className="inline-flex items-center gap-2 text-sm text-paper-dim">
              <Calendar size={15} className="text-signal" />
              {event.date}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-paper-dim">
              <Clock size={15} className="text-signal" />
              {event.timeRange}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-paper-dim">
              <Globe size={15} className="text-signal" />
              {event.mode}
              {event.location ? ` · ${event.location}` : ""}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-paper-dim">
              <Ticket size={15} className="text-signal" />
              {event.entryFee} entry
            </span>
          </div>

          {event.status !== "completed" && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="group">
                  Register Now
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Button>
              </a>
              {event.secondaryConfirmUrl && (
                <a
                  href={event.secondaryConfirmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary">
                    Confirm on Meetup
                  </Button>
                </a>
              )}
            </div>
          )}
          {event.secondaryConfirmNote && (
            <p className="mt-4 text-xs text-steel max-w-[54ch] leading-relaxed">
              {event.secondaryConfirmNote}
            </p>
          )}
        </Container>
      </section>

      {/* Poster + description */}
      <section className="hairline py-section">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <img
                src={event.posterImage}
                alt={`${event.title} event poster`}
                className="w-full h-auto border border-border-strong object-cover"
              />
            </div>
            <div className="lg:col-span-3">
              <p className="label-mono mb-4">About this event</p>
              <p className="text-paper-dim leading-relaxed text-base md:text-lg">
                {event.description}
              </p>

              <p className="label-mono mt-10 mb-4">Who should join</p>
              <p className="text-paper-dim leading-relaxed">{event.audience}</p>

              <p className="label-mono mt-10 mb-4">Organized by</p>
              <p className="text-paper-dim leading-relaxed">
                {event.organizers.join(" × ")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Domains tested */}
      <section className="hairline py-section relative overflow-hidden">
        <AmbientGlow
          tone="amber"
          className="w-[440px] h-[440px] -top-20 -right-32 opacity-60"
        />
        <Container className="relative">
          <p className="label-mono mb-4">What's tested</p>
          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-14">
            Five domains, real challenges.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-border">
            {event.domains.map((domain, i) => (
              <div
                key={domain.name}
                className="border-r border-b border-border p-7 flex flex-col items-start gap-4"
              >
                <domain.icon
                  size={22}
                  className={accentClass(i)}
                  strokeWidth={1.6}
                />
                <span className="text-sm font-display font-semibold text-paper">
                  {domain.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaborators
      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-4">In collaboration with</p>
          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-14">
            Built with partners who know the space.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {event.collaborators.map((collab) => (
              <div
                key={collab.name}
                className="border-r border-b border-border p-7"
              >
                <p className="text-sm font-display font-semibold text-paper">
                  {collab.name}
                </p>
                <p className="mt-2 text-xs text-steel leading-relaxed">
                  {collab.role}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section> */}
      {/* Collaborators */}
      <section className="hairline py-section">
        <Container>
          <p className="label-mono mb-4">In collaboration with</p>

          <h2 className="text-display-md font-display font-bold max-w-[22ch] mb-14">
            Built with partners who know the space.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
            {event.collaborators.map((collab) => (
              <a
                key={collab.name}
                href={collab.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border-r border-b border-border p-8 flex flex-col items-center text-center hover:bg-ink-raised/40 transition-all duration-300 group"
              >
                <img
                  src={collab.logo}
                  alt={collab.name}
                  className="h-16 w-auto object-contain mb-6 grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                />

                <p className="text-sm font-display font-semibold text-paper">
                  {collab.name}
                </p>

                <p className="mt-2 text-xs text-steel leading-relaxed">
                  {collab.role}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border border-border-strong p-10 md:p-14">
            <div>
              <h2 className="text-display-md font-display font-bold max-w-[18ch]">
                {event.status === "completed"
                  ? "Missed it? Don't miss the next one. Join our community now."
                  : "Ready to prove yourself?"}
              </h2>
              <p className="mt-4 text-paper-dim max-w-[46ch] leading-relaxed inline-flex items-center gap-2 flex-wrap">
                <Mail size={15} className="text-signal shrink-0" />
                Questions? Reach out at{" "}
                <a
                  href={`mailto:${event.contactEmail}`}
                  className="text-signal hover:text-signal-bright"
                >
                  {event.contactEmail}
                </a>
              </p>
            </div>
            {event.status !== "completed" && (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button size="lg" className="group">
                  Register Now
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Button>
              </a>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
