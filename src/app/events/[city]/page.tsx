import EventsList from "@/components/events-list";
import EventsHeading from "@/components/header";
import { EventoEvent } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function Events({ params }: EventsPageProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${params.city}`,
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center px-5 md:px-24">
      <EventsHeading className="mb-10 mt-10" />
      <EventsList events={events} />
    </main>
  );
}
