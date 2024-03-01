import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};
export default async function EventPage({ params }: EventPageProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${params.slug}`,
  );
  const event: EventoEvent = await response.json();
  console.log(event);

  return (
    <main className="min-h-screen px-5 md:px-24">
      <section className="relative  h-[400px]  w-full overflow-hidden">
        <Image
          src={event.imageUrl}
          className="-z-10 object-cover blur-xl"
          alt="event background image"
          fill
          quality={40}
          sizes="(max-width: 1280px), 100vw"
        />
        <div className="flex h-full flex-col items-center justify-center gap-y-10 sm:flex-row sm:gap-x-20 sm:gap-y-0">
          <Image
            className="hover-scale"
            src={event.imageUrl}
            alt="event image"
            height={200}
            width={300}
          />
          <div className="sm:space-y-2">
            <p className="text-sm">{`${new Date(event.date).toLocaleString("default", { day: "2-digit" })} ${new Date(event.date).toLocaleString("default", { month: "long" })} ${new Date(event.date).toLocaleString("default", { year: "numeric" })}`}</p>
            <h1 className="text-xl font-bold lg:text-4xl">{event.name}</h1>
            <p className="text-white/80">Hosted by {event.organizerName}</p>
            <p className="text-white/70">{event.location}</p>
            <button className="sm:hover-scale rounded-lg bg-gray-500/40 px-6 py-2 sm:px-12 sm:py-3 sm:font-medium">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="mt-9 flex w-full flex-col items-center justify-center">
        <div className="sm:w-2/4">
          <h2 className="mb-6 text-center text-xl font-medium">
            About this event
          </h2>
          <p>{event.description}</p>
        </div>
      </div>
    </main>
  );
}
