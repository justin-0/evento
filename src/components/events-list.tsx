import { EventoEvent } from "@prisma/client";
import EventCard from "./event-card";
import { getEvents } from "@/lib/prismaFetch";
import { notFound } from "next/navigation";
import PaginationControl from "./pagination-control";

type EventsListProps = {
  city: string;
  page: number;
};
export default async function EventsList({ city, page }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);
  console.log(totalCount);
  const totalPages = totalCount / 6;
  return (
    <>
      <section className="flex w-full flex-wrap items-center justify-center gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      {page < totalPages ? (
        <PaginationControl page={+page} city={city} />
      ) : null}
    </>
  );
}
