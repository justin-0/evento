import EventsHeading from "@/components/header";
import { Event } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export default async function Events({ params }: EventsPageProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${params.city}`,
  );
  const events: Event[] = await response.json();
  console.log(events);

  return (
    <main className="flex h-[85vh] flex-col items-center px-5 md:px-24">
      <EventsHeading />
    </main>
  );
}
