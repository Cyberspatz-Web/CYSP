import { useParams, Navigate } from "react-router-dom";
import { Seo } from "../components/Seo";
import { EventFullView } from "../components/events/EventFullView";
import { getEventBySlug } from "../data/events";

function eventSchema(event: NonNullable<ReturnType<typeof getEventBySlug>>) {
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

export function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <>
      <Seo
        title={event.title}
        description={`${event.title} — ${event.subtitle}`}
        path={`/events/${event.slug}`}
        schema={eventSchema(event)}
      />
      <EventFullView event={event} />
    </>
  );
}
