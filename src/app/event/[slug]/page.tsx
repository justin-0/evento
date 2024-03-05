import { EventoEvent } from "@prisma/client";
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

  return (
    <main className="min-h-screen px-5 md:px-24">
      <section className="relative  w-full  overflow-hidden pb-8 pt-8 sm:h-[400px] sm:pb-0 sm:pt-0">
        <Image
          src={event.imageUrl}
          className="-z-10 object-cover blur-xl"
          alt="event background image"
          fill
          quality={40}
          sizes="(max-width: 1280px), 100vw"
        />
        <div className="flex h-full flex-col items-center justify-center sm:flex-row sm:gap-x-20">
          <Image
            className="hover-scale"
            src={event.imageUrl}
            alt="event image"
            height={200}
            width={300}
          />
          <div className="pt-6 sm:pt-0">
            <p className="text-sm">{`${new Date(event.date).toLocaleString("default", { day: "2-digit" })} ${new Date(event.date).toLocaleString("default", { month: "long" })} ${new Date(event.date).toLocaleString("default", { year: "numeric" })}`}</p>
            <h1 className="text-xl font-bold lg:text-4xl">{event.name}</h1>
            <p className="text-white/80">Hosted by {event.organizerName}</p>

            <button className="sm:hover-scale mt-4 rounded-lg bg-gray-500/40 px-6 py-2 sm:mt-8 sm:px-12 sm:py-3 sm:font-medium">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="mt-9 flex w-full flex-col items-center justify-center">
        <div className="sm:w-3/4">
          <h2 className="mb-6 text-center text-xl font-medium">
            About this event
          </h2>
          <p className="leading-8 text-white/85">{event.description}</p>
          <h2 className="mb-6 mt-9 text-center text-xl font-medium">
            Location
          </h2>
          <p className="text-center text-white">{event.location}</p>
        </div>
      </div>
    </main>
  );
}
