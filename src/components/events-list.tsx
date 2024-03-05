import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";

type EventsListProps = {
  city: string;
};
export default async function EventsList({ city }: EventsListProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  );
  const events: EventoEvent[] = await response.json();

  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
