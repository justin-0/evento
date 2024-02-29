import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

type EventsListProps = {
  events: EventoEvent[];
};
export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="mt-8 flex w-full flex-wrap items-center justify-center gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
