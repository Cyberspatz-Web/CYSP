import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Container } from "../components/ui/Container";
import { StatusBadge } from "../components/ui/StatusBadge";
import { EventFullView } from "../components/events/EventFullView";
import { EVENTS } from "../data/events";
import { Calendar, ArrowUpRight } from "lucide-react";

function eventSchema(event: (typeof EVENTS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.startDateTime,
    endDate: event.endDateTime,
    eventAttendanceMode:
      event.mode === "Online"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : event.mode === "Hybrid"
          ? "https://schema.org/MixedEventAttendanceMode"
          : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus:
      event.status === "completed"
        ? "https://schema.org/EventCompleted"
        : "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: event.registrationUrl,
    },
    organizer: event.organizers.map((name) => ({
      "@type": "Organization",
      name,
    })),
    offers: {
      "@type": "Offer",
      url: event.registrationUrl,
      priceCurrency: "INR",
      price: event.entryFee.replace(/[^\d.]/g, "") || "0",
      availability: "https://schema.org/InStock",
    },
  };
}

export function Events() {
  // Single-event case: use the whole page for it, per current state.
  if (EVENTS.length === 1) {
    const event = EVENTS[0];
    return (
      <>
        <Seo
          title="Events"
          description={`${event.title} — ${event.subtitle}`}
          path="/events"
          schema={eventSchema(event)}
        />
        <EventFullView event={event} />
      </>
    );
  }

  // Multi-event case: card grid linking to individual event pages.
  return (
    <>
      <Seo
        title="Events"
        description="Cyberspatz community events — CTFs, workshops, and meetups run with our security community and partners."
        path="/events"
      />
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <Container>
          <StatusBadge label={`${EVENTS.length} events`} />
          <h1 className="mt-8 text-display-lg font-display font-extrabold max-w-[18ch]">
            Come hack, learn, and win with us.
          </h1>
          <p className="mt-6 text-lg text-paper-dim max-w-[54ch] leading-relaxed">
            CTFs, workshops, and meetups run with our community and partners —
            past and upcoming.
          </p>
        </Container>
      </section>

      <section className="hairline py-section">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
            {EVENTS.map((event, i) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              >
                <Link
                  to={`/events/${event.slug}`}
                  className="group block h-full border-r border-b border-border p-8 hover:bg-ink-raised/50 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs text-steel font-mono">
                    <Calendar size={13} />
                    {event.date}
                  </div>
                  <h3 className="mt-4 text-base font-display font-semibold text-paper flex items-center gap-1.5">
                    {event.title}
                    <ArrowUpRight
                      size={15}
                      className="text-steel opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </h3>
                  <p className="mt-3 text-sm text-paper-dim leading-relaxed">
                    {event.subtitle}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
