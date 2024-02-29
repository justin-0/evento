import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="relative w-[380px] overflow-hidden rounded-xl  bg-green-800/50 transition hover:scale-110 lg:max-w-[25%]">
      <Link href={`/event/${event.slug}`}>
        <Image
          src={event.imageUrl}
          alt="event image"
          height={280}
          width={500}
          className="object-fit h-4/6"
        />
        <div className="mb-4 mt-4 flex h-auto flex-col items-center justify-center">
          <h2 className="font-bold">{event.name}</h2>
          <p className="text-sm italic text-white/80">
            By {event.organizerName}
          </p>
          <p className="text-sm italic text-white/60">{event.location}</p>
        </div>
        <section className="bg-black-40 absolute left-[15px] top-[15px] flex h-[45px] w-[45px] flex-col items-center justify-center rounded">
          <p className="-m-[5px] font-bold">
            {new Date(event.date).toLocaleString("default", { day: "2-digit" })}
          </p>
          <p className="text-xs font-light uppercase text-accent">
            {new Date(event.date).toLocaleString("default", { month: "short" })}
          </p>
        </section>
      </Link>
    </section>
  );
}
