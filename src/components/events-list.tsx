import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { getEvents } from "@/lib/prismaFetch";

type EventsListProps = {
  city: string;
};
export default async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city);

  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
